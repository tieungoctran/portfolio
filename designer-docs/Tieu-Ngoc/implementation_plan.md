# Portfolio Redesign — Trần Tiểu Ngọc (HTML Presentation)

Xây dựng lại portfolio của Trần Tiểu Ngọc dưới dạng **HTML Presentation** theo phong cách **Neo-Brutalist Sketchy** (đồng bộ với `tieungoc.site`), sử dụng nội dung từ [Portfolio_Content_Final.md](file:///c:/Users/ZPC/OneDrive/Cowork/Tieu-Ngoc/Portfolio_Content_Final.md).

## Skills sử dụng

| Skill | Vai trò |
|-------|---------|
| **frontend-slides** | Tạo HTML presentation zero-dependency, animation-rich, scroll-snap |
| **frontend-design** | Aesthetic direction: Neo-Brutalist + Editorial, distinctive typography & color |
| **interactive-portfolio** | Cấu trúc "30-second test", case study storytelling, CTA conversion |

## Proposed Changes

### [NEW] [Portfolio_TranTieuNgoc_SCC.html](file:///C:/Users/ZPC/OneDrive/Cowork/Tieu-Ngoc/Portfolio_TranTieuNgoc_SCC.html)

Single-file HTML presentation (zero dependencies, inline CSS/JS) gồm **12 slides** theo [Portfolio_Content_Final.md](file:///c:/Users/ZPC/OneDrive/Cowork/Tieu-Ngoc/Portfolio_Content_Final.md):

| Slide | Nội dung | Hiệu ứng đặc biệt |
|-------|----------|-------------------|
| 1. Cover | 3 Power Stats hook, tên, tagline | Counter animation cho stats, dot-grid background |
| 2. Về tôi | Bio story, chuyên môn, contact | 2-column layout, quote-style bio |
| 3. Kinh nghiệm | Timeline Vani Ecommerce + Metric cards | Brutalist metric cards, stagger reveal |
| 4. LittleOwh P1 | Context → Solution → AI Workflow | Before/After comparison layout |
| 5. LittleOwh P2 | Impact + Giá trị cho SCC | Impact numbers animation |
| 6. Kozmoz P1 | Context → Solution | Logo showcase, brand palette |
| 7. Kozmoz P2 | Impact + Giá trị cho SCC | Brand guidelines spread |
| 8. POD + Email | 3500+ sản phẩm + Klaviyo | Product grid + email mockup |
| 9. SCC Audit | Before/After listing đề xuất | Split-screen comparison |
| 10. Kế hoạch 30-60-90 | Roadmap đồ họa | Animated timeline, color-coded |
| 11. Tại sao SCC + CRO | 3 lý do + CRO thinking | Annotated design visual |
| 12. CTA & Liên hệ | Contact, closing | Dark theme matching cover |

### Design System

- **Aesthetic**: Neo-Brutalist Sketchy + Editorial
- **Fonts**: Space Grotesk (display) + DM Sans (body) từ Google Fonts
- **Colors**: Dark bg `#0d0d0d`, accent cam `#FF6B35`, xanh dương `#4ECDC4`, xanh lá `#7BC950`
- **Elements**: Wobbly borders (SVG filter), dot-grid background, hard shadows `4px 4px 0`
- **Motion**: Staggered reveal on scroll, counter animation cho số liệu

### Features (từ frontend-slides skill)

- Keyboard navigation (←→, Space)
- Touch/swipe support
- Progress bar + Navigation dots  
- Scroll-snap slides
- Intersection Observer animations
- Responsive mobile layout

> [!IMPORTANT]
> Vì chưa có hình ảnh thật (mockup sản phẩm, ảnh chân dung...), tôi sẽ dùng **placeholder có ghi chú** rõ ràng để Ngọc biết nên chèn hình gì. Portfolio vẫn hoạt động hoàn chỉnh và có thể xem được ngay.

## Verification Plan

### Browser Test
- Mở file `Portfolio_TranTieuNgoc_SCC.html` trong browser
- Kiểm tra: tất cả 12 slides hiển thị đúng, navigation hoạt động, animation chạy mượt
- Kiểm tra responsive trên viewport 375px (mobile)
