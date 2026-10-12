# 📋 TÀI LIỆU YÊU CẦU NGHIỆP VỤ (BA REQUIREMENTS / BRD)
## Dự án: Website Portfolio & Personal Branding - Trần Tiểu Ngọc (AI Product Designer)

---

## 1. TỔNG QUAN DỰ ÁN (EXECUTIVE SUMMARY)

- **Tên dự án:** tieungoc.site (Trần Tiểu Ngọc - AI Product Designer Portfolio)
- **Chủ sở hữu:** Trần Tiểu Ngọc - AI Product Designer & Creative Technologist
- **Mục tiêu cốt lõi:**
  1. Thu hút và thuyết phục các **Nhà tuyển dụng công nghệ (Tech Recruiters), Design Lead & C-Level** tìm kiếm ứng viên thiết kế có năng lực thực chiến về Trí tuệ Nhân tạo (AI).
  2. Trưng bày các Case Study chuyên sâu về Human-AI Interaction (HAII), AI Copilot UI, Generative Prototyping và Intelligent Design Systems.
  3. Minh họa quy trình thiết kế tăng cường bởi AI (AI-Augmented Design Workflow) giúp rút ngắn 50% thời gian phát triển sản phẩm.
  4. Lan tỏa tư duy lãnh đạo (Thought Leadership) qua các bài viết chuyên sâu trên Substack và LinkedIn.
  5. Tiếp nhận lời mời phỏng vấn và cơ hội hợp tác thông qua Form liên hệ tinh gọn tích hợp Supabase.

---

## 2. ĐỐI TƯỢNG NGƯỜI DÙNG & CHÂN DUNG KHÁCH HÀNG (TARGET AUDIENCE)

1. **Khách hàng doanh nghiệp / Startup / Nhà sáng lập:**
   - Cần tìm Designer chuyên nghiệp để làm việc freelance hoặc dự án dài hạn (Branding, UI/UX, Design System).
   - Quan tâm: Độ chuyên nghiệp của tác phẩm, tư duy giải quyết vấn đề (qua Case Study), quy trình làm việc và cách thức liên hệ nhanh chóng.
2. **Nhà tuyển dụng / Design Lead / HR:**
   - Đánh giá năng lực của Tiểu Ngọc qua kinh nghiệm, kỹ năng, công cụ sử dụng và CV cá nhân.
3. **Cộng đồng Designer & Độc giả:**
   - Quan tâm đến bài viết chia sẻ kinh nghiệm, tư duy thiết kế và tài nguyên từ Substack và LinkedIn của Tiểu Ngọc.

---

## 3. ĐỊNH HƯỚNG THẨM MỸ & TRẢI NGHIỆM NGƯỜI DÙNG (UI/UX DESIGN DIRECTION)

- **Phong cách chủ đạo:** **Minimalist & Editorial High-End**
  - Thanh lịch, tối giản, khoảng trắng (whitespace) rộng rãi, bố cục lưới phân cấp rõ ràng.
  - Tôn vinh hình ảnh và sản phẩm thiết kế làm nhân vật chính.
  - Typography tinh tế, hiện đại, dễ đọc trên cả Desktop và Mobile.
  - Hỗ trợ chuyển đổi giao diện **Dark Mode / Light Mode** mượt mà.
- **Ngôn ngữ hiển thị:** **100% Tiếng Việt** thân thiện, gần gũi và chuyên nghiệp.

---

## 4. KIẾN TRÚC KỸ THUẬT & HẠ TẦNG (SYSTEM ARCHITECTURE)

- **Frontend:**
  - Single Page Application (SPA) nhiều trang xây dựng bằng React 18, Vite, TypeScript, Tailwind CSS, Lucide Icons.
  - Quản lý định tuyến mượt mà (Client-side Routing).
  - Triển khai tối ưu trên nền tảng **Vercel** (Global Edge CDN, tốc độ tải trang cực nhanh).
- **Cơ sở dữ liệu & Backend:**
  - **Supabase (BaaS):** Sử dụng làm cơ sở dữ liệu cloud để tiếp nhận và lưu trữ thông tin từ Biểu mẫu Liên hệ (Contact Form Inquiries).
  - Bảng Supabase dự kiến: `contact_inquiries` (id, full_name, email, subject, message, created_at, status).
- **Quản lý nội dung (Content Management):**
  - Toàn bộ dữ liệu Dự án (Projects), Giới thiệu (Bio/Skills/Experiences), và Bài viết (Blog) được lưu trữ dưới dạng cấu trúc tệp tĩnh (`TypeScript/JSON`) trong thư mục `frontend/src/data/`.
  - Giúp Trần Tiểu Ngọc dễ dàng cập nhật nội dung mà không phát sinh chi phí duy trì server hay độ trễ CMS.
- **Kênh viết lách:**
  - Không xây dựng CMS viết blog trên web; bài viết được soạn và phát hành trực tiếp trên **Substack** và **LinkedIn**.
  - Website đóng vai trò là Hub tuyển chọn (Curated Hub) dẫn link trực tiếp sang 2 nền tảng này.

---

## 5. SƠ ĐỒ TRANG & YÊU CẦU CHỨC NĂNG CHI TIẾT (SITEMAP & FUNCTIONAL SPECS)

### 5.1. Trang Chủ (`/`)
- **Hero Section:** Lời chào ấn tượng, định vị nghề nghiệp của Trần Tiểu Ngọc, câu slogan cá nhân và các nút kêu gọi hành động (Xem dự án / Liên hệ).
- **Giới thiệu tóm tắt:** Một đoạn ngắn gọn về phong cách và đam mê thiết kế.
- **Dự án tiêu biểu (Featured Projects):** Lựa chọn 2-3 tác phẩm nổi bật nhất kèm visual mockup sắc nét.
- **Bài viết chọn lọc (Latest Insights):** 2-3 bài viết mới nhất dẫn sang Substack/LinkedIn.
- **Footer:** Bản quyền, liên kết mạng xã hội (LinkedIn, Substack, Behance, Dribbble, Facebook, Email).

### 5.2. Trang Dự Án (`/projects`) & Chi Tiết (`/projects/:slug`)
- **Trang danh sách `/projects`:**
  - Bộ lọc theo danh mục thiết kế (Tất cả, UI/UX Design, Brand Identity, Graphic Design, v.v.).
  - Thẻ dự án: Ảnh bìa mockup, tên dự án, danh mục, năm hoàn thành, tóm tắt.
- **Trang chi tiết `/projects/:slug` (Case Study chuyên sâu):**
  - **Header Case Study:** Tên dự án, khách hàng (Client), năm thực hiện, vai trò (Role), công cụ sử dụng (Figma, AI, PS, v.v.).
  - **Vấn đề / Thách thức (The Challenge):** Khách hàng gặp khó khăn gì?
  - **Giải pháp thiết kế (The Solution):** Quá trình nghiên cứu, ý tưởng thẩm mỹ, wireframe, thiết kế giao diện/nhận diện.
  - **Bộ sưu tập hình ảnh (Visual Gallery):** Ảnh kích thước lớn, độ sắc nét cao.
  - **Nút hành động:** Xem prototype thực tế / Link Behance / Figma (nếu có).
  - **Điều hướng tiếp theo:** Nút chuyển nhanh sang dự án kế tiếp (Next Project).

### 5.3. Trang Về Tôi (`/about`)
- **Chân dung & Câu chuyện cá nhân:** Hình ảnh Tiểu Ngọc, triết lý thiết kế và hành trình làm nghề.
- **Kỹ năng & Chuyên môn:** Thiết kế giao diện (UI), Trải nghiệm người dùng (UX), Nhận diện thương hiệu (Branding), Hệ thống thiết kế (Design Systems).
- **Công cụ thành thạo:** Figma, Adobe Photoshop, Illustrator, Premiere, Notion, v.v.
- **Kinh nghiệm & Chặng đường:** Mốc thời gian (Timeline) các dự án hoặc vị trí công tác.
- **Tải CV:** Nút tải file Resume/CV dạng PDF.

### 5.4. Trang Góc Chia Sẻ (`/blog`)
- **Khái niệm:** Curated Article Hub.
- **Cấu trúc thẻ bài viết (Article Card):**
  - Ảnh đại diện bài viết (Thumbnail).
  - Tiêu đề bài viết.
  - Ngày xuất bản.
  - Đoạn trích dẫn tóm tắt (Excerpt).
  - Thẻ phân loại chủ đề (UI Tips, Design Thinking, Freelance Life...).
  - **Huy hiệu nguồn:** Badge phân biệt rõ ràng: `Đọc trên Substack` hoặc `Đọc trên LinkedIn`.
  - Nút bấm mở tab mới dẫn trực tiếp tới bài viết gốc.

### 5.5. Trang Liên Hệ (`/contact`)
- **Biểu mẫu liên hệ tinh gọn (Quick Contact Form):**
  - Trường dữ liệu:
    1. Họ và tên (`name`) - Bắt buộc
    2. Địa chỉ Email (`email`) - Bắt buộc, kiểm tra định dạng email
    3. Tiêu đề liên hệ (`subject`) - Bắt buộc
    4. Nội dung tin nhắn (`message`) - Bắt buộc
  - Cơ chế xử lý: Gửi trực tiếp lên Supabase Table qua Supabase JS Client với trạng thái Loading và thông báo gửi thành công (Toast notification).
- **Thông tin liên hệ trực tiếp:**
  - Email cá nhân
  - Địa điểm làm việc (Hà Nội / TP.HCM / Remote)
  - Các kênh mạng xã hội: LinkedIn, Substack, Behance, Facebook.

---

## 6. YÊU CẦU DỮ LIỆU BAN ĐẦU (SEED DATA / PLACEHOLDERS)

- Tạo khung sườn dữ liệu tối thiểu và dễ thay thế:
  - 1-2 dự án mẫu hoàn chỉnh (1 dự án UI/UX App, 1 dự án Brand Identity) kèm cấu trúc trường chuẩn.
  - 2-3 bài viết mẫu có sẵn link dẫn tới Substack/LinkedIn placeholder.
  - Thông tin giới thiệu và kỹ năng mẫu phù hợp với Designer chuyên nghiệp.

---

## 7. KẾ HOẠCH BÀN GIAO & CÁC BƯỚC TRIỂN KHAI (NEXT STEPS)

1. Thiết lập thư mục và cấu trúc Routes trên Frontend (`react-router-dom`).
2. Xây dựng kho dữ liệu tĩnh (`src/data/projects.ts`, `src/data/articles.ts`, `src/data/profile.ts`).
3. Tích hợp Supabase Client cho Form liên hệ (`src/lib/supabase.ts`).
4. Thiết kế Layout chung: Header (Navbar với Dark/Light toggle), Footer và Mobile Menu.
5. Triển khai 5 trang giao diện theo phong cách Minimalist & Editorial.
6. Kiểm thử và sẵn sàng deploy lên Vercel.
