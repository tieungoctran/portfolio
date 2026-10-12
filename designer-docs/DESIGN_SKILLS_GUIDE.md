# Hướng Dẫn Kích Hoạt Kỹ Năng (Skills) Thiết Kế Cho AI Agent

Tài liệu này giúp bạn hiểu rõ và lựa chọn chính xác các `skills` liên quan đến thiết kế hiện có trong hệ thống khi bắt đầu một dự án mới hoặc xử lý một tác vụ cụ thể.

Mỗi khi bạn muốn AI hỗ trợ chuyên sâu một mảng nào đó, hãy yêu cầu kích hoạt skill tương ứng (VD: *"Hãy dùng skill `ui-visual-validator` để kiểm tra trang web này cho tôi"*).

---

## 1. Khi Nào Nên Dùng Nhóm Sản Phẩm & Hệ Thống (Product Design)?
Nhóm này dành cho việc xây dựng nền tảng ban đầu, định hình tư duy sản phẩm, làm việc với Design System, hoặc lên ý tưởng sản phẩm từ con số không.

*   **`product-design`**
    *   **Công dụng:** Đóng vai trò Product Designer cấp Apple. Hỗ trợ hệ thống hóa hình ảnh, luồng UX (UX flows), ngôn ngữ thiết kế độc bản, và Design Tokens.
    *   **Khi nào gọi:** Bắt đầu tạo một Design System mới, lên luồng trải nghiệm người dùng, hoặc cần tư vấn cấu trúc UI tổng thể.
*   **`product-inventor`**
    *   **Công dụng:** Chuyên gia cấp cao kết hợp giữa Tư duy Sản phẩm (Product Thinking), Tâm lý học, và Nghệ thuật Kể chuyện (Storytelling).
    *   **Khi nào gọi:** Cần tìm ra USP (Điểm bán hàng độc nhất) cho sản phẩm, sáng tạo luồng sản phẩm mới có tính đột phá, hoặc lồng ghép câu chuyện vào thiết kế.
*   **`vizcom`**
    *   **Công dụng:** Hỗ trợ công cụ AI Vizcom để biến các bản vẽ phác thảo (sketches) thành hỉnh ảnh 3D/renders độ phân giải cao.
    *   **Khi nào gọi:** Khi làm thiết kế công nghiệp (Industrial Design), vẽ phác thảo tay và cần render phối cảnh sản phẩm 3D.

---

## 2. Khi Nào Nên Dùng Nhóm Giao Diện & Trải Nghiệm (UI/UX)?
Nhóm này tập trung vào tính thực chiến, chi tiết của từng màn hình, từng component, và đảm bảo mọi thứ đẹp mắt, hữu dụng.

*   **`ui-ux-pro-max` (Khuyên dùng thường xuyên nhất)**
    *   **Công dụng:** Cẩm nang toàn diện nhất về UI/UX trên web/mobile.
    *   **Khi nào gọi:** Khi bạn cần AI code một màn hình giao diện cụ thể, cần chọn bảng màu, typography, hoặc review (đánh giá) code frontend xem cấu trúc UX đã hợp lý chưa.
*   **`ui-ux-designer`**
    *   **Công dụng:** Kỹ năng tiêu chuẩn của UI/UX Designer. Lên wireframe, làm việc với chuẩn accessibility.
    *   **Khi nào gọi:** Bước đầu lên cấu trúc wireframe cho một trang web trước khi đắp UI/màu sắc vào.
*   **`ui-skills`**
    *   **Công dụng:** Bộ quy tắc ràng buộc (constraints) nhỏ, có tính quan điểm cá nhân để trau chuốt giao diện.
    *   **Khi nào gọi:** Khi giao diện đã gần hoàn thiện nhưng bạn cần AI "đánh bóng" lại các chi tiết nhỏ cho xịn xò hơn.

---

## 3. Khi Nào Nên Dùng Nhóm Chuyển Động & Hiệu Ứng (Motion & Experience)?
Đừng để giao diện của bạn tĩnh lặng. Nhóm này giúp web/app trở nên "sống động" và mượt mà hơn.

*   **`fixing-motion-performance`**
    *   **Công dụng:** Chuyên gia chẩn đoán và sửa các lỗi giật lag (jank), tối ưu hóa hiệu suất animation bằng CSS/JS.
    *   **Khi nào gọi:** Khi website có animation bị giật, cuộn trang bị lag, hoặc cần kiểm tra hiệu năng của các transition.
*   **`scroll-experience`**
    *   **Công dụng:** Sử dụng việc "cuộn trang" như một công cụ kể chuyện.
    *   **Khi nào gọi:** Khi thiết kế Landing Page giới thiệu sản phẩm, Apple-style landing pages, cần các hiệu ứng mượt mà khi người dùng cuộn chuột.

---

## 4. Khi Nào Nên Dùng Nhóm Kiểm Định (Validation & Quality Assurance)?
Bất cứ khi nào thiết kế xong, hãy gọi "người kiểm duyệt" này để soi lỗi trước khi đưa cho khách hàng hoặc coder.

*   **`ui-visual-validator`**
    *   **Công dụng:** Trình xác thực khắt khe về mặt thị giác, tính nhất quán của Design System và tiêu chuẩn khả năng truy cập (Accessibility).
    *   **Khi nào gọi:** Sau khi code xong một UI component hoặc một page, yêu cầu AI dùng skill này để soi các lỗi sai lệch về padding, màu sắc, độ tương phản.

---

## 5. Các Nhóm Chuyên Biệt Khác

### Thương Hiệu & Định Danh (Brand Identity)
*   **`brand-guidelines`**: Đảm bảo toàn bộ câu chữ (copywriting), thông báo lỗi, văn bản trên nút bấm luôn chuẩn với giọng văn (Tone & Voice) của doanh nghiệp. Sử dụng khi bắt đầu viết nội dung hiển thị trên UI.
*   **`canvas-design`**: Rất thiên về nghệ thuật, triết lý thiết kế. Dùng khi muốn "brainstorm" các phong trào thẩm mỹ mới.

### Thiết Kế Game (Game Design/Art)
*   **`game-design`**: Nguyên tắc cốt lõi làm game (GDD, cân bằng game, tâm lý người chơi). Dùng khi lên ý tưởng hệ thống trò chơi.
*   **`game-art`**: Lựa chọn phong cách đồ họa, luồng làm việc animation cho Game.

---

## 💡 Mẹo nhỏ cho Workflow lý tưởng:

1.  Bắt đầu với **`product-design`** để chốt cấu trúc tổng thể và design tokens.
2.  Tiến hành code/vẽ giao diện với sự hỗ trợ của **`ui-ux-pro-max`**.
3.  Áp dụng **`brand-guidelines`** để viết nội dung trên giao diện đó.
4.  Thêm "gia vị" bằng **`scroll-experience`** hoặc các hiệu ứng chuyển động.
5.  Chốt hạ bằng **`ui-visual-validator`** để soi lỗi thiết kế trước khi bàn giao.
