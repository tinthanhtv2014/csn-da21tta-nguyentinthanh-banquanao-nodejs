# csn-da21tta-nguyentinthanh-banquanao-nodejs
đề tài: xây dựng website bán quần áo <br>
giáo viên hướng dẫn: Võ Thành C<br>
sinh viên thực hiện: Nguyễn Tín Thành - 110121104 - DA21TTA<br>
email: tinthanhtv2014@gmail.com<br>
dienthoai: 0395890398<br>

### Nội dung đề tài:

- **Mục tiêu:**
  - Xây dựng website bán quần áo với các chức năng quản lý sản phẩm và thống kê cho quản trị viên.
  - Cung cấp khả năng tra cứu thông tin sản phẩm cho người dùng.

- **Chức năng cho quản trị viên:**
  - Quản lý sản phẩm: Thêm, sửa, xóa và tìm kiếm sản phẩm.
  - Thống kê: Hiển thị báo cáo thống kê về doanh số bán hàng.

- **Chức năng cho người dùng:**
  - Tra cứu thông tin sản phẩm: Tìm kiếm, xem thông tin chi tiết sản phẩm.
    
### Phương pháp thực hiện:

1. **Tìm kiếm và Nghiên cứu:**
   - Tìm hiểu thông tin liên quan đến website bán quần áo.
   - Nghiên cứu tài liệu để xác định yêu cầu bài toán.

2. **Phân tích và Thiết kế:**
   - Phân tích yêu cầu bài toán.
   - Thiết kế cơ sở dữ liệu và giao diện người dùng.

3. **Lập trình và Triển khai:**
   - Lập trình website theo thiết kế đã xác định.

4. **Kết quả đạt được:**
   - Hoàn thành xây dựng website theo yêu cầu đề tài.
   - Hoàn thiện quyển báo cáo đồ án.


### Kế hoạch thực hiện:

| Tuần | Thời gian | Nội dung công việc | Người thực hiện |
|------|-----------|--------------------|-----------------|
| 1    | 06/11-12/11/2023 | - Hoàn thành đề cương chi tiết <br> - Tìm hiểu nghiệp vụ <br> - Phân tích thiết kế thành phần dữ liệu, xử lý | Nguyễn Tín Thành |
| 2    | 20/11-26/11/2023 | - Thiết kế cơ sở dữ liệu <br> - Thiết kế giao diện <br> - Lập trình <br> - Viết báo cáo đồ án | Nguyễn Tín Thành  |
| 3    | 04/12-10/12/2023 | - Thiết kế giao diện <br> - Lập trình <br> - Viết báo cáo đồ án | Nguyễn Tín Thành  |
| 4    | 18/12-24/12/2023 | - Thiết kế giao diện <br> - Lập trình <br> - Viết báo cáo đồ án | Nguyễn Tín Thành  |
| Kết thúc | 25/12-31/12/2023 | - Hoàn chỉnh website <br> - Hoàn chỉnh quyển báo cáo <br> - Nộp quyển báo cáo, website | Nguyễn Tín Thành  |


## Hướng dẫn cài đặt dự án
Hướng dẫn cài đặt dự án bào gồm máy chủ node.js và React

## Yêu Cầu

- Xampp
- Node.js
- npm

## Cài Đặt

1. **Clone Repository:**
   ```bash
   git clone https://github.com/tinthanhtv2014/csn-da21tta-nguyentinthanh-banquanao-nodejs.git


2. **Cài Đặt Dependencies:**

   - Chuột phải vào thư mục src_nodejs/AdminPage chọn Open in integrated Terminal
   ```bash
   npm install
   ```
   - Chuột phải vào thư mục src_nodejs/UserPage/my-app chọn Open in integrated Terminal
    ```bash
   npm install
   ```

4. **Cấu Hình Môi Trường:**
   
   - Tạo một tệp `.env` từ tệp `.env.example` và điền thông tin cần thiết (env có sẵn trong dự án).

6. **Chạy Ứng Dụng:**

   - Import file src/quanlysanpham.sql vào Xampp
   - Mở visual studio code Open dự án
   - Chuột phải vào thư mục src_nodejs/AdminPage chọn Open in integrated Terminal
   ```bash
   npm run start
   ```

   - Hoặc sử dụng `nodemon` để tự động khởi động lại ứng dụng khi có thay đổi (đã được cài sẵn):

   ```bash
   npm install -g nodemon
   nodemon
   ```

## Đóng Góp

Nếu bạn muốn đóng góp vào dự án, vui lòng làm theo các bước sau:

1. Fork dự án
2. Tạo một nhánh (`git checkout -b feature/awesome-feature`)
3. Commit thay đổi của bạn (`git commit -am 'Add some awesome feature'`)
4. Push đến nhánh của bạn (`git push origin feature/awesome-feature`)
5. Tạo một Pull Request

## Vấn Đề và Đóng Góp

Nếu bạn gặp vấn đề hoặc muốn đóng góp, vui lòng tạo một "issue" hoặc một "pull request".

## Liên Hệ

Nếu bạn có bất kỳ câu hỏi hoặc muốn liên hệ với tôi về dự án, bạn có thể sử dụng các thông tin sau:

- **Trường Đại học:** Đại học Trà Vinh
- **Lớp:** DA21TTA
- **Tên:** Nguyễn Tín Thành
- **Email:** [Tinthanhtv2014@gmail.com](mailto:Tinthanhtv2014@Gmail.com)

Tôi rất mong nhận được phản hồi và sự hỗ trợ từ cộng đồng. Đừng ngần ngại liên hệ nếu bạn có bất kỳ ý kiến đóng góp hoặc câu hỏi nào liên quan đến dự án.

## Kế Hoạch Thực Hiện
ngày 6/11 - ngày 11/11: tạo cơ sở dữ liệu cho dự án và đưa lên github <br>
ngày 13/11: thêm chức năng add thêm data vào cơ sở dữ liệu <br>
ngày 14/11: thêm chức năng xóa và edit dữ liệu <br>
ngày 19/11: thêm ảnh vào cơ sở dữ liệu và đưa lên trang nodejs đồng thời thêm chức năng thêm ảnh, update ảnh cho dự án. Fix các lỗi liên quan đến file ảnh <br>
ngày 20/11: tạo ra dự ấn frontend cho trang web <br>
ngày 21/11: tạo thanh navbar cho trang web <br>
ngày 22/11: tạo slide và tiến hành lấy api từ dự án nodejs lên dự án reactjs <br>
ngày 23/11: thiết kế lại cơ sở dữ liệu và thêm chức năng chọn các option tạo thêm sản phẩm cho trang nodejs <br>
ngày 29/11: up dữ liệu và các sản phẩm lên reactjs <br>
ngày 1/12: tạo trang hiển thị thông chi tiết cho sản phẩm <br>
ngày 2/12: tạo trang đặt hàng <br>
ngày 3/12: tiến hành lấy dữ liệu từ reactjs về nodejs thông qua nút đặt hàng <br>
ngày 6/12: fix 1 vài lỗi khi bấm nút đặt hàng mà không điền thông tin thì thông báo nhập lại <br>
