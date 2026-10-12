# Design System Guide
> Tư duy hệ thống cho dự án thiết kế đa lĩnh vực

---

## 1. Atomic Design — Tư duy chia nhỏ thiết kế

Atomic Design chia hệ thống thiết kế thành 5 cấp độ, từ nhỏ nhất đến lớn nhất:

```
Atoms → Molecules → Organisms → Templates → Pages
```

### Cấp 1 — Atoms (Nguyên tử)
Các yếu tố cơ bản nhất, không thể chia nhỏ hơn:

| Loại | Ví dụ | Ghi chú |
|---|---|---|
| **Color** | Primary, Secondary, Neutral, Error | Xem `brand-guideline.md` |
| **Typography** | Font family, size scale, weight | Heading / Body / Caption |
| **Spacing** | 4px, 8px, 16px, 24px, 32px, 48px | Dùng bội số của 4 |
| **Icon** | 16px, 24px, 32px | SVG, stroke-based |
| **Shadow** | sm / md / lg / xl | Elevation system |
| **Border Radius** | 0 / 4px / 8px / 16px / 999px | |

### Cấp 2 — Molecules (Phân tử)
Kết hợp nhiều Atoms thành một đơn vị chức năng:

- Button (Icon + Label + Background color)
- Input Field (Label + Input box + Helper text)
- Tag / Badge (Color + Text)
- Avatar (Image + Border)
- Price Tag (Typography + Color block)

### Cấp 3 — Organisms (Cấu trúc)
Kết hợp Molecules thành các khối giao diện hoàn chỉnh:

- Navigation Bar
- Product Card
- Hero Section
- Form Block
- Footer

### Cấp 4 — Templates (Khung trang)
Layout tổng thể chưa có nội dung thật — chỉ có wireframe + placeholder.

### Cấp 5 — Pages (Trang hoàn chỉnh)
Templates được điền nội dung thực tế.

---

## 2. Consistency — Tính nhất quán xuyên suốt

### 2.1 Design Token
Mọi giá trị thiết kế phải được đặt tên và lưu tập trung:

```yaml
# Ví dụ Design Token
color:
  brand-primary: "#1A1A2E"
  brand-secondary: "#E94560"
  neutral-100: "#F9F9F9"
  neutral-900: "#111111"

typography:
  font-heading: "Playfair Display"
  font-body: "DM Sans"
  size-xs: 12px
  size-sm: 14px
  size-base: 16px
  size-lg: 20px
  size-xl: 24px
  size-2xl: 32px
  size-3xl: 48px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
```

### 2.2 Checklist nhất quán theo kênh ứng dụng

| Kênh | Yếu tố cần kiểm tra |
|---|---|
| **Print / POD** | CMYK color, bleed 3mm, resolution 300dpi |
| **Digital / Web** | RGB/HEX, @2x assets, dark mode variant |
| **Social Media** | Kích thước theo platform, safe zone |
| **Merchandise** | Vector logo, pantone match nếu có |

### 2.3 Quy tắc "Hơi thở thương hiệu"
Dù áp dụng trên bất kỳ chất liệu nào, cần đảm bảo:

- [ ] Đúng bảng màu thương hiệu
- [ ] Đúng font chữ quy định
- [ ] Logo đúng vùng bảo vệ (clear space)
- [ ] Tỷ lệ và khoảng cách nhất quán
- [ ] Tone hình ảnh (nhiếp ảnh / minh họa) đồng nhất

---

## 3. Scalability — Tư duy mở rộng

### 3.1 Nguyên tắc thiết kế có thể mở rộng

1. **Component-based**: Mọi element đều là component tái sử dụng
2. **Variant-driven**: Một component có nhiều biến thể (size, color, state)
3. **Token-first**: Thay đổi token → cập nhật toàn bộ hệ thống
4. **Documentation-ready**: Mọi component đều có hướng dẫn sử dụng

### 3.2 Ví dụ cấu trúc Variant của Button

```
Button
├── Size: sm / md / lg
├── Variant: primary / secondary / ghost / danger
├── State: default / hover / active / disabled / loading
└── Icon: none / left / right / only
```

---

## 4. Công cụ đề xuất

| Mục đích | Công cụ |
|---|---|
| Design Token quản lý | Figma Variables / Style Dictionary |
| Component library | Figma Components + Adobe CC Libraries |
| Documentation | Notion / Confluence / file .md này |
| Version control | Git (cho code) / Figma Version History |
| Handoff | Figma Dev Mode / Zeplin |

---

*Cập nhật lần cuối: 2026 | Phiên bản: 1.0*
