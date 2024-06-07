(async function() {
    // Function to load the xlsx library dynamically
    function loadScript(url) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = url;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error(`Script load error for ${url}`));
            document.head.appendChild(script);
        });
    }

    // Load the xlsx library
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.17.3/xlsx.full.min.js');

    async function fetchWithRetry(url, retries = 3) {
        for (let i = 0; i < retries; i++) {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                return await response.json();
            } catch (error) {
                console.error(`Attempt ${i + 1} failed:`, error);
                if (i === retries - 1) throw error;
            }
        }
    }

    async function getOrders(offset, limit) {
        const url = `https://shopee.vn/api/v4/order/get_all_order_and_checkout_list?limit=${limit}&offset=${offset}`;
        try {
            const result = await fetchWithRetry(url);
            return result.data.order_data.details_list || [];
        } catch (error) {
            console.error("Error fetching orders:", error);
            return [];
        }
    }

    async function getOrderDetails(orderId) {
        const url = `https://shopee.vn/api/v4/order/get_order_detail?order_id=${orderId}`;
        try {
            const result = await fetchWithRetry(url);
            const orderInfoRows = result.data.processing_info.info_rows;
            const orderTimeInfo = orderInfoRows.find(row => row.info_label.text === "label_odp_order_time");
            return orderTimeInfo ? orderTimeInfo.info_value.value : null;
        } catch (error) {
            console.error(`Error fetching details for order ${orderId}:`, error);
            return null;
        }
    }

    function formatCurrency(number) {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
    }

    function unixToDate(unixTimestamp) {
        const date = new Date(unixTimestamp * 1000);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }    

    function unixToExcelDate(unixTimestamp) {
        const date = new Date(unixTimestamp * 1000);
        const excelDate = (date - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000);
        return excelDate;
    }

    async function getAllOrders() {
        const limit = 20;
        let offset = 0;
        const allOrders = [
            ['OrderID', 'Order Time', 'Tên chung', 'Số lượng', 'Tổng tiền', 'Trạng thái', 'Tên shop', 'Chi tiết', 'Tiền gốc']
        ];
        let totalAmount = 0;
        let totalCount = 0;

        while (true) {
            const data = await getOrders(offset, limit);
            if (data.length === 0) break;

            const detailsPromises = data.map(async item => {
                const infoCard = item.info_card;
                const listType = item.list_type;
                const orderid = infoCard.order_id;

                const statusMap = {
                    3: "Hoàn thành",
                    4: "Đã hủy",
                    7: "Vận chuyển",
                    8: "Đang giao",
                    9: "Chờ thanh toán",
                    12: "Trả hàng"
                };
                const strListType = statusMap[listType] || "Không rõ";

                const productCount = infoCard.product_count;
                let subTotal = infoCard.subtotal / 1e5;
                if (listType !== 4 && listType !== 12) totalAmount += subTotal;
                else subTotal = 0;
                totalCount += productCount;

                const orderCard = infoCard.order_list_cards[0];
                const { username, shop_name: shopName } = orderCard.shop_info;
                const products = orderCard.product_info.item_groups;
                const productSummary = products.flatMap(group => group.items.map(item => item.model_name)).join(', ');
                

                const name = products[0].items[0].name;
                const formattedTotal = formatCurrency(subTotal);

                // Fetch the order time
                const orderTime = await getOrderDetails(orderid);
                const formattedOrderTime = orderTime ? new Date(orderTime * 1000).toISOString().slice(0, 10) : '';

                return [
                    orderid, formattedOrderTime, name, productCount, formattedTotal, strListType, `${username} - ${shopName}`, productSummary, subTotal
                ];
            });

            const orderDetails = await Promise.all(detailsPromises);
            allOrders.push(...orderDetails);

            console.log(`Collected: ${offset}`);
            offset += limit;
        }

        allOrders.push([
            'Tổng cộng: ', '', '', totalCount, formatCurrency(totalAmount), '', '', '', ''
        ]);

        // Create a workbook and add the data
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet(allOrders);
        XLSX.utils.book_append_sheet(wb, ws, 'Orders');

        // Generate the Excel file and download it
        XLSX.writeFile(wb, 'shopee_orders.xlsx');
    }

    getAllOrders();
})();
