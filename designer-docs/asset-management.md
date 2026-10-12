# Asset Management Guide
> Quản lý tài nguyên thiết kế cho dự án đa lĩnh vực

---

## 1. File Naming Convention — Quy tắc đặt tên file

### Cú pháp chuẩn

```
[project]_[category]_[component]_[variant]_[version].[ext]
```

### Ví dụ thực tế

| File | Giải thích |
|---|---|
| `brandX_logo_primary_color_v2.ai` | Project: brandX, Logo chính, màu, phiên bản 2 |
| `brandX_icon_cart_outline_v1.svg` | Icon giỏ hàng, dạng outline |
| `brandX_banner_homepage_desktop_v3.psd` | Banner trang chủ, desktop |
| `brandX_mockup_tshirt_front_white_v1.psb` | Mockup áo thun, mặt trước, màu trắng |
| `brandX_pattern_floral_seamless_v1.ai` | Họa tiết hoa, dạng seamless |

### Quy tắc đặt tên

- ✅ Dùng **chữ thường**, cách nhau bằng dấu `_`
- ✅ Luôn có **version** ở cuối: `_v1`, `_v2`
- ✅ Tiếng Anh, không dấu, không khoảng trắng
- ❌ Không đặt tên chung chung: `final`, `new`, `copy`, `untitled`
- ❌ Không dùng ngày tháng thay cho version (trừ archive)

---

## 2. Folder Structure — Cấu trúc thư mục

```
📁 [PROJECT_NAME]/
│
├── 📁 01_Brand_Core/
│   ├── 📁 Logo/
│   │   ├── AI/                  ← File gốc Illustrator
│   │   ├── SVG/                 ← Dùng cho web, UI
│   │   ├── PNG/                 ← Xuất sẵn các kích thước
│   │   └── PDF/                 ← Dùng cho in ấn
│   ├── 📁 Color_Palette/
│   │   ├── ASE/                 ← Adobe Swatch Exchange
│   │   └── References.md        ← Hex, RGB, CMYK, Pantone
│   └── 📁 Typography/
│       ├── Fonts/               ← File font (.otf / .ttf)
│       └── Type_Scale.md
│
├── 📁 02_Design_Assets/
│   ├── 📁 Icons/
│   ├── 📁 Illustrations/
│   ├── 📁 Patterns/
│   ├── 📁 Textures/
│   └── 📁 Photography/
│       ├── Raw/
│       └── Edited/
│
├── 📁 03_Templates/
│   ├── 📁 Print/
│   │   ├── Poster/
│   │   ├── Packaging/
│   │   └── POD/                 ← Print-on-Demand templates
│   ├── 📁 Digital/
│   │   ├── Social_Media/
│   │   ├── Email/
│   │   └── Web_Banner/
│   └── 📁 Presentation/
│
├── 📁 04_Mockups/
│   ├── 📁 Apparel/              ← Áo thun, hoodie, tote bag
│   ├── 📁 Stationery/           ← Namecard, letterhead
│   ├── 📁 Packaging/
│   └── 📁 Devices/              ← Phone, laptop, tablet
│
├── 📁 05_Exports/
│   ├── 📁 For_Print/            ← CMYK, 300dpi, có bleed
│   ├── 📁 For_Web/              ← RGB, compressed
│   └── 📁 For_POD/              ← Theo spec từng platform
│
├── 📁 06_Archive/
│   └── 📁 2025/                 ← Các phiên bản cũ
│
└── 📄 README.md                 ← Hướng dẫn sử dụng thư mục
```

---

## 3. Adobe Creative Cloud Libraries

### 3.1 Cách thiết lập CC Library cho team

**Bước 1 — Tạo Library**
1. Mở Illustrator hoặc Photoshop
2. Window → Libraries → Create New Library
3. Đặt tên theo dự án: `BrandX_Design_Library`

**Bước 2 — Thêm Assets vào Library**

| Loại Asset | Cách thêm | App |
|---|---|---|
| Color Swatch | Chọn màu → kéo vào Libraries panel | Ai / Ps |
| Character Style | Text → Add to Library | Ai / Id |
| Logo / Icon | Chọn object → kéo vào Libraries | Ai |
| Layer Style | Layer → Add to Library | Ps |
| Brush | Brush panel → Add to Library | Ps |

**Bước 3 — Chia sẻ với team**
1. Click icon "Collaborate" (người + dấu +) trong Libraries panel
2. Nhập email đồng nghiệp
3. Chọn quyền: **Can edit** hoặc **Can view**

### 3.2 Quy tắc sử dụng CC Library

- ✅ Luôn **place from Library** thay vì copy-paste trực tiếp
- ✅ Khi cần chỉnh sửa: Edit in Original → tự động cập nhật tất cả linked files
- ✅ Đặt tên rõ ràng cho từng asset trong Library (không để "Color 1", "Logo copy")
- ❌ Không embed asset từ Library (sẽ mất liên kết sync)
- ❌ Không xóa asset khỏi Library khi đang được dùng trong file đang mở

### 3.3 Đồng bộ giữa Photoshop ↔ Illustrator

```
Illustrator               CC Library              Photoshop
──────────                ──────────              ─────────
Logo (vector) ──save──▶  BrandX Library  ◀──use── Smart Object
Color swatches ──save──▶  BrandX Library  ◀──use── Solid Color Layer
Character Styles ──save──▶ BrandX Library ◀──use── Text Layer Style
```

---

## 4. Version Control & Archive

### 4.1 Quy trình lưu phiên bản

```
[Đang làm việc] brandX_logo_v1.ai
       ↓ Có chỉnh sửa lớn
[Lưu phiên bản] brandX_logo_v2.ai
       ↓ Client duyệt
[Final]         brandX_logo_FINAL.ai
       ↓ Sau khi bàn giao
[Archive]       /Archive/2026/brandX_logo_FINAL.ai
```

### 4.2 Changelog đơn giản

Tạo file `CHANGELOG.md` trong mỗi thư mục dự án:

```markdown
# Changelog — BrandX

## v3 (2026-03-15)
- Cập nhật logo: đổi font từ Playfair sang Cormorant
- Thêm dark mode variant cho toàn bộ color palette

## v2 (2026-02-01)
- Chỉnh sửa icon set: đổi sang stroke-based, weight 1.5px

## v1 (2026-01-10)
- Khởi tạo brand identity
```

---

## 5. Checklist bàn giao file

Trước khi giao file cho client hoặc đồng nghiệp:

- [ ] Tất cả font đã được **Outline** hoặc **Embed**
- [ ] Link ảnh đã được **Embed** (không còn link ngoài)
- [ ] Artboard đặt tên rõ ràng
- [ ] Layer được đặt tên và nhóm gọn
- [ ] Xóa các layer ẩn không cần thiết
- [ ] File đã **Save a Copy** sang định dạng tương thích (PDF, SVG, PNG)
- [ ] Kiểm tra bleed và crop mark (cho file in)
- [ ] README hoặc note hướng dẫn sử dụng đã có trong folder

---

*Cập nhật lần cuối: 2026 | Phiên bản: 1.0*
