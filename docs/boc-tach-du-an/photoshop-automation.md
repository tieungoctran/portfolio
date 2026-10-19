---
description: >-
  Một case study về Actions, Scripts và cách kiểm soát đầu ra khi sản xuất nhiều
  file.
---

# Khi Photoshop làm phần việc lặp lại

### Những thao tác lặp lại khi làm file POD

Trong công việc POD, nhiều thao tác không khó nhưng lặp lại rất nhiều: thay artwork vào mockup, kiểm tra kích thước, xuất file và đặt tên SKU. Khi số lượng tăng, phần việc này chiếm thời gian và dễ phát sinh nhầm lẫn.

Mình xây dựng Photoshop Actions và JavaScript Scripts để hỗ trợ những bước có quy tắc rõ ràng, dành nhiều thời gian hơn cho phần thiết kế.

| Hồ sơ dự án | Phạm vi                                           |
| ----------- | ------------------------------------------------- |
| Bối cảnh    | Quy trình sản xuất thiết kế nội bộ Vani Ecommerce |
| Vai trò     | Xây dựng và sử dụng bộ công cụ                    |
| Công cụ     | Photoshop Actions, JavaScript / ExtendScript      |
| Đầu ra      | Artwork xuất file, mockup và tên file theo SKU    |

### Chọn đúng phần để tự động hóa

Mình phân biệt hai nhóm công việc:

| Cần Designer quyết định          | Có thể chuẩn hóa bằng công cụ                   |
| -------------------------------- | ----------------------------------------------- |
| Thông điệp và bố cục             | Chuỗi thao tác xuất file                        |
| Typography, hình minh họa        | Thay artwork vào template đã kiểm tra           |
| Đánh giá độ phù hợp với sản phẩm | Đặt tên và phân loại file theo quy tắc          |
| Kiểm tra chất lượng cuối         | Kiểm tra những điều kiện kỹ thuật xác định được |

Một thao tác chỉ nên chạy hàng loạt khi đầu vào và cách xử lý ngoại lệ đủ rõ.

### Luồng xử lý

1. Chuẩn bị artwork và template đúng loại sản phẩm.
2. Kiểm tra một mẫu trước khi chạy cả lô.
3. Dùng Actions hoặc Scripts cho các thao tác lặp lại.
4. Đối chiếu danh sách file đầu ra với SKU và yêu cầu.
5. Mở kiểm tra thành phẩm, xử lý các trường hợp cần chỉnh tay.

### Kiểm tra template và các trường hợp ngoại lệ

Tự động hóa có giá trị khi quy trình dễ kiểm tra và người khác có thể hiểu cách dùng. Nếu template thay đổi, công cụ cần được thử lại; một lần chạy thành công không bảo đảm mọi loại artwork đều phù hợp.

Mình vẫn giữ bước kiểm tra cuối vì sai một quy tắc có thể tạo ra cả lô file sai.

### Kết quả và cách chứng minh

Dữ liệu portfolio hiện ghi nhận mức giảm khoảng 40% thời gian sản xuất. Để con số này có ý nghĩa khi công bố, case study cần bổ sung cách đo: loại tác vụ, số lượng file, thời gian làm tay và thời gian chạy công cụ kèm kiểm tra.

Thời gian đo cần gồm cả bước kiểm tra sau khi xuất. Tốc độ xuất file chỉ phản ánh một phần công việc.

### Tư liệu cần bổ sung trước khi công bố

* Video ngắn cho cùng một tác vụ trước và sau khi tự động hóa.
* Bảng thời gian so sánh trên cùng một bộ đầu vào.
* Ảnh giao diện Actions hoặc đoạn mã đã loại thông tin nội bộ.
* Một trường hợp ngoại lệ và cách công cụ được kiểm tra.

_Ghi chú biên tập: đây là bản nháp case study. Số liệu hiệu quả chưa được đối chiếu bằng log hoặc phép đo trong tài liệu hiện có._

[Đọc cách mình phân chia công việc giữa Designer và AI](../human-led-ai-workflow.md)
