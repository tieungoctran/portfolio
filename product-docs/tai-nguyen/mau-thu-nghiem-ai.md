---
description: Lưu đầu vào, prompt, đầu ra và phần chỉnh tay của mỗi thử nghiệm.
---

# Mẫu ghi thử nghiệm AI

Khung này dùng để ghi một lần thử. Chưa điền kết quả thì chưa gắn nhãn đã kiểm chứng.

### Hồ sơ thử nghiệm

| Trường              | Thông tin cần điền                            |
| ------------------- | --------------------------------------------- |
| Câu hỏi             | Muốn kiểm tra điều gì?                        |
| Ngày thử            | YYYY-MM-DD                                    |
| Công cụ / model     | Tên và phiên bản nếu hiển thị                 |
| Đầu vào             | Reference, brief, kích thước và quyền sử dụng |
| Tiêu chí đạt        | Điều kiện có thể đối chiếu trên kết quả       |
| Yếu tố thay đổi     | Chỉ ra điểm khác biệt giữa các lượt           |
| Số lượt             | Số lần chạy và cách chọn kết quả              |
| Chi phí / thời gian | Nếu có ghi nhận; gồm cả phần chỉnh tay        |

### Prompt và thiết lập

Lưu nguyên văn prompt đã dùng trong code block, cùng tỷ lệ ảnh, seed hoặc thiết lập khác nếu công cụ cung cấp. Không sửa lại prompt cũ khi bổ sung lượt thử mới.

### So sánh kết quả

| Lượt | Thay đổi          | Quan sát               | Phần cần sửa tay          |
| ---- | ----------------- | ---------------------- | ------------------------- |
| A    | Điền sau khi chạy | Điền từ đầu ra thực tế | Ghi lỗi và thao tác xử lý |
| B    | Điền sau khi chạy | Điền từ đầu ra thực tế | Ghi lỗi và thao tác xử lý |

### Kết luận

Ghi cách làm phù hợp với đầu vào nào, còn lỗi gì và khi nào cần thử lại. Chèn ảnh đối chiếu cùng tỷ lệ, kèm chú thích phần AI tạo và phần đã chỉnh tay.

### Trước khi lưu vào kho prompt

Đính kèm ít nhất một kết quả thật và mô tả giới hạn. Chỉ dùng nhãn đã kiểm chứng cho đúng phạm vi đã thử.
