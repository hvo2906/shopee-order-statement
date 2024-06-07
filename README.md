![image](https://github.com/hvo2906/shopee-order-export/assets/171783916/854062c5-2db1-4a4a-aa68-694136f8487d)

***PHIÊN BẢN TIẾNG VIỆT Ở BÊN DƯỚI hoặc [CLICK](https://github.com/hvo2906/shopee-order-export?tab=readme-ov-file#tool-xu%E1%BA%A5t-%C4%91%C6%A1n-h%C3%A0ng-shopee-ra-file-excel)*** 

# **Shopee Order Statement**

## **Introduction**

Get a clear picture of your Shopee historical spending pattern with ShopeeVN Orders Statement! Think of it as your bank statement, but packed with all your SPE orders detail. Easily export your order history to a Excel compatible file (CSV/XLSX) to keep track of your historical spending, then build a budget for it and maintain financial health.

This project provides two methods for exporting orders: 
  1. Use the Chrome/CocCoc browser extension
  **OR** 
  2. Manually executing a JavaScript script in the browser's DevTools console.

***I've submitted the browser extension package to Google Store to reviewed. When it's approved I will update the third method which is loading the extension from Extension store.***

## **Usage Methods**

### **Method 1: Chrome Extension - Manually Upload**
  #### Step 1: Enable Developer Mode
1. Open Google Chrome or CocCoc
2. Access Extensions: In the address bar, type chrome://extensions/ for Chrome browser, or coccoc://extensions/ then press Enter.
3. Enable Developer Mode:
  - In the Extensions page, you will see a toggle switch labeled Developer mode in the upper-right corner.
  - Click on the toggle to enable Developer mode. This will reveal additional options.
  #### Step 2: Load the Extension
4. Unzip the Extension File:
  - Locate the "Shopee Order Exporter - Extension.zip" file on your computer.
  - Right-click on the file and choose Extract All or use your preferred extraction tool to unzip the file.
  - Extract the contents to a known directory on your computer.
5. Load Unpacked Extension:
  - In the Extensions page in Chrome (with Developer mode enabled), click on the Load unpacked button.
  - A file dialog will open. Navigate to the directory where you extracted the extension files.
  - Select the folder containing the extracted files and click Select Folder.
6. Verify Installation:
  - You should now see the "Shopee Order Exporter" extension listed on the Extensions page.
  - Ensure the extension is enabled (the toggle switch next to it should be on).
  #### Step 3: Use the Extension
7. Login to Shopee: Navigate to the Shopee website (https://shopee.vn/) and log in with your account.
8. Open the Extension and Export:
  - Click on the puzzle piece icon (Extensions icon) in the upper-right corner of Chrome.
  - From the dropdown, find and click on "Shopee Order Exporter" to open the extension popup.
  - In the extension popup, click on the Export Orders button.
  - The script will run and export your orders to a CSV file. This process might take a few minutes, so please be patient.
  - Once the process is complete, the CSV file will be downloaded to your computer.

### **Method 2: DevTools Script**
- Log in to your Shopee account on shopee.vn.
- Press F12 to open the DevTools.
- Select the 'Console' tab in the DevTools panel.
- Copy the code from the Shopee Order Export v1.4.js script file.
- Paste the copied code into the Console field in the DevTools panel.
- Press Enter to execute the script.
- Wait for approximately 5 minutes for the script to fetch and export your orders.
- The exported orders will be downloaded as an Excel (.xlsx) file to your Downloads folder.

<sub>NOTE: 
Hat tip to NT Tòng for the base of this code. His original code could be viewed [here](https://pastecode.io/s/7cpgip63) <sub/>

VN VERSION
# **Lịch sử mua sắm Shopee**

## **Giới thiệu**

Có được bức tranh rõ nét về lịch sử chi tiêu trên Shopee của bạn với Báo cáo đơn hàng ShopeeVN! Tương tự như sao kê ngân hàng, bạn có thể dễ dàng xuất lịch sử đơn hàng ra file Excel (định dạng CSV/XLSX) để theo dõi lịch sử chi tiêu, sau đó lập ngân sách mua sắm và duy trì sức khỏe tài chính    

Công cụ này cung cấp hai phương pháp để xuất đơn hàng:
1. Sử dụng tính năng Tiện ích mở rộng trên trình duyệt Chrome/CocCoc
**HOẶC**
2. Thực hiện thủ công một tập lệnh JavaScript trong bảng điều khiển DevTools của trình duyệt.

***Tôi đã gửi gói tiện ích mở rộng trình duyệt lên Google Store để xem xét. Khi được chấp thuận, tôi sẽ cập nhật phương pháp thứ ba là tải tiện ích mở rộng từ Cửa hàng tiện ích mở rộng.***

## **Phương pháp sử dụng**

### **Phương pháp 1: Tiện ích mở rộng Chrome - Tải lên thủ công**
#### Bước 1: Bật Chế độ nhà phát triển
1. Mở Google Chrome hoặc CocCoc
2. Truy cập Tiện ích mở rộng: Trong thanh địa chỉ, nhập chrome://extensions/ cho trình duyệt Chrome hoặc coccoc://extensions/ rồi nhấn Enter.
3. Bật Chế độ nhà phát triển:
- Trong trang Tiện ích mở rộng, bạn sẽ thấy một công tắc chuyển đổi có nhãn Chế độ nhà phát triển ở góc trên bên phải.
- Nhấp vào nút chuyển đổi để bật Chế độ nhà phát triển. Thao tác này sẽ hiển thị các tùy chọn bổ sung.
#### Bước 2: Tải tiện ích mở rộng
4. Giải nén tệp tiện ích mở rộng:
- Xác định vị trí tệp "Shopee Order Exporter - Extension.zip" trên máy tính của bạn.
- Nhấp chuột phải vào tệp và chọn Giải nén tất cả hoặc sử dụng công cụ giải nén ưa thích của bạn để giải nén tệp.
- Giải nén nội dung vào một thư mục đã biết trên máy tính của bạn.
5. Tải tiện ích mở rộng chưa giải nén:
- Trong trang Tiện ích mở rộng trong Chrome (đã bật Chế độ nhà phát triển), hãy nhấp vào nút Tải tiện ích mở rộng chưa giải nén.
- Hộp thoại tệp sẽ mở ra. Điều hướng đến thư mục mà bạn đã giải nén các tệp tiện ích mở rộng.
- Chọn thư mục chứa các tệp đã giải nén và nhấp vào Chọn thư mục.
6. Xác minh cài đặt:
- Bây giờ bạn sẽ thấy tiện ích mở rộng "Shopee Order Exporter" được liệt kê trên trang Tiện ích mở rộng.
- Đảm bảo tiện ích mở rộng đã được bật (công tắc chuyển đổi bên cạnh tiện ích mở rộng phải bật).
#### Bước 3: Sử dụng Extension
7. Đăng nhập vào Shopee: Điều hướng đến trang web Shopee (https://shopee.vn/) và đăng nhập bằng tài khoản của bạn.
8. Mở Extension và Xuất:
- Nhấp vào biểu tượng mảnh ghép (biểu tượng Extensions) ở góc trên bên phải của Chrome.
- Từ menu thả xuống, tìm và nhấp vào "Shopee Order Exporter" để mở cửa sổ bật lên của extension.
- Trong cửa sổ bật lên của extension, nhấp vào nút Xuất đơn hàng.
- Script sẽ chạy và xuất đơn hàng của bạn sang tệp CSV. Quá trình này có thể mất vài phút, vì vậy hãy kiên nhẫn.
- Sau khi quá trình hoàn tất, tệp CSV sẽ được tải xuống máy tính của bạn.

### **Phương pháp 2: DevTools Script**
- Đăng nhập vào tài khoản Shopee của bạn trên shopee.vn.
- Nhấn F12 để mở DevTools.
- Chọn tab 'Console' trong bảng điều khiển DevTools.
- Sao chép mã từ tệp script Shopee Order Export v1.4.js.
- Dán mã đã sao chép vào trường Console trong bảng điều khiển DevTools.
- Nhấn Enter để thực thi tập lệnh.
- Đợi khoảng 5 phút để tập lệnh tải và xuất các đơn hàng của bạn.
- Các đơn hàng đã xuất sẽ được tải xuống dưới dạng tệp Excel (.xlsx) vào thư mục Tải xuống của bạn.

<sub>LƯU Ý:
Xin cảm ơn NT Tòng vì đã cung cấp cơ sở cho mã này. Mã gốc của anh ấy có thể được xem [tại đây](https://pastecode.io/s/7cpgip63) <sub/>

