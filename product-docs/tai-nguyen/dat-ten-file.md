---
description: Đặt tên và quản lý phiên bản dùng trong quy trình thiết kế.
---

# Đặt tên và quản lý phiên bản

Tên file cần giúp người nhận tìm đúng đầu ra mà không phải mở từng file.

### Quy tắc gợi ý

`PROJECT_SKU_CHANNEL_SIZE_LANG_v01.ext`

Ví dụ minh họa:

`SPRING_TEE001_EMAIL_1200x800_EN_v03.jpg`

Chỉ giữ những trường team thực sự sử dụng. Thứ tự các trường cần thống nhất trong cùng dự án.

### Cấu trúc thư mục

| Thư mục      | Nội dung                                   |
| ------------ | ------------------------------------------ |
| 01\_brief    | Yêu cầu đã thống nhất và nội dung đầu vào  |
| 02\_source   | File thiết kế có layer và asset liên quan  |
| 03\_review   | Bản xem thử theo từng vòng feedback        |
| 04\_delivery | File đã kiểm tra và được duyệt để bàn giao |

### Quản lý vòng sửa

Tăng số phiên bản khi gửi một vòng duyệt mới. Khi bản v03 đã được duyệt, giữ nguyên bản đó trong thư mục delivery. Nếu có chỉnh sửa tiếp, tạo v04 và ghi rõ bản thay thế.

Tránh những tên như `final_new_final2`. Chúng không cho biết bản nào đã được duyệt.

### Với sản xuất hàng loạt

Đối chiếu tên file với danh sách SKU. Thử một mẫu trước khi chạy cả lô; sau khi xuất, kiểm tra cả số lượng lẫn nội dung. Một quy tắc đặt tên sai có thể ảnh hưởng toàn bộ lô file.
