# Journal - LinkedIn Week 1 Visuals Generation
**Date:** 2026-06-09
**Author:** Antigravity

## Summary of Accomplishments
Tạo thành công hai hình ảnh thiết kế chuyên nghiệp cho bài đăng LinkedIn Tuần 1 của Trần Tiểu Ngọc (`post1.png` và `post2.png`) bằng phương pháp HTML-to-Image. Đã tích hợp các liên kết ảnh vào file bài viết `week-1-posts.md`.

## Technical Choices & Implementations
1. **HTML/CSS + Headless Chrome:** Sử dụng Chrome Headless để render HTML thành PNG thay vì các thư viện sinh ảnh AI hoặc canvas vẽ tay truyền thống. Phương án này mang lại độ phân giải tuyệt đối, hiển thị chữ sắc nét và kiểm soát hoàn toàn bố cục (đặc biệt hữu ích cho typography Neo-Brutalist).
2. **Wobbly Borders SVG Filter:** Áp dụng bộ lọc SVG `feTurbulence` + `feDisplacementMap` để tạo hiệu ứng viền vẽ tay lộn xộn (wobbly border) đặc trưng của phong cách Neo-Brutalist. Điều này mang lại cảm xúc cá tính và thực tế cho thiết kế của Ngọc.
3. **Automated Render Script:** Viết script Node.js `render_images.js` sử dụng `child_process.spawn` để thực thi Chrome Headless, xử lý chính xác đường dẫn tệp chứa khoảng trắng của hệ điều hành Windows (`Designer Docs`) mà không gây lỗi tham số.

## Results
- `post1.png` (375 KB) - Ảnh vuông 1200x1200px chứa chân dung của Ngọc lồng ghép trong khung wobbly kèm quote CRO nổi bật.
- `post2.png` (137 KB) - Sơ đồ so sánh hai quy trình vẽ wobbly phong cách sketch, trực quan và chuyên nghiệp.
