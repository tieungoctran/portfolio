# SOP Thiết Kế Banner E-commerce: Hướng Dẫn Tự Động Hóa Từ Brief Đến Delivery

**Subtitle:** Template SOP thực tế cho designer e-commerce: chuẩn hóa quy trình, tích hợp Photoshop Actions & AI Generative Fill, giảm 40% thời gian sản xuất mà không mất kiểm soát chất lượng.

---

Nếu bạn đang làm banner cho e-commerce, chắc hẳn bạn đã quen với vòng lặp này: nhận brief -> hỏi lại brief -> làm 3 phiên bản -> sửa 5 lần -> xuất sai format -> sửa lại. Mỗi banner mất 2-3 tiếng thay vì 45 phút.

Vấn đề không phải kỹ năng thiết kế. Vấn đề là thiếu quy trình chuẩn hóa.

Bài viết này chia sẻ SOP (Standard Operating Procedure) tôi đã xây dựng và áp dụng tại công ty e-commerce hiện tại, nơi team designer phải xử lý banner cho nhiều thương hiệu POD đồng thời, mỗi thương hiệu có bộ nhận diện riêng, target market riêng (US/EU).

## Tại Sao Designer E-commerce Cần SOP?

Trong agency hoặc freelance, mỗi project là duy nhất. Nhưng trong e-commerce, 80% công việc thiết kế là lặp lại theo pattern:

- **Banner hero homepage:** Cùng layout, đổi hình + copy theo campaign
- **Banner collection:** Cùng template, đổi niche/sản phẩm
- **Banner email:** Cùng grid, đổi nội dung theo flow (welcome, abandoned cart, post-purchase)
- **Banner ads:** Cùng format, đổi hook + visual theo A/B test

Không SOP nghĩa là: mỗi lần làm banner = bắt đầu từ đầu. Designer mới join team mất 2-3 tuần để "hiểu style". Revision rate cao vì output không consistent. Manager phải review từng bản thay vì spot check.

Có SOP nghĩa là: quy trình rõ ràng, output đồng nhất, onboarding nhanh, revision giảm.

## SOP 5 Bước: Từ Brief Đến Delivery

### Bước 1: Nhận Brief Chuẩn Hóa (5 phút)

**Vấn đề phổ biến:** Brief bằng tin nhắn, thiếu thông tin, phải hỏi đi hỏi lại.

**Giải pháp:** Dùng Brief Template cố định. Mọi yêu cầu banner phải điền đủ 7 trường:

| Trường | Ví dụ |
|--------|-------|
| Loại banner | Hero homepage / Collection / Email / Ads |
| Thương hiệu | Brand A (ví dụ) |
| Campaign/Niche | Summer Racing Gear 2026 |
| Kích thước | 1200x628 (FB), 1080x1080 (IG), 1920x600 (Web) |
| Copy chính | "Born to Race. Dressed to Kill." |
| CTA | Shop Now / Explore Collection |
| Tham chiếu | Link đến brand guide + 2-3 ví dụ mong muốn |

**Tip:** Tạo Google Form hoặc Lark Form cho brief. Không nhận brief qua chat - mọi yêu cầu không có form = không vào queue.

### Bước 2: Chọn Template + Setup File (10 phút)

**Vấn đề phổ biến:** Mỗi lần mở Photoshop lại setup từ đầu - artboard, guides, layer structure.

**Giải pháp:** Xây dựng Template Library theo thương hiệu và loại banner.

Cấu trúc folder template:

```
Templates/
├── BrandA/
│   ├── hero-1920x600.psd
│   ├── collection-1200x800.psd
│   ├── email-600x400.psd
│   └── ads-1080x1080.psd
├── BrandB/
│   ├── hero-1920x600.psd
│   └── ...
└── _Base/
    ├── grid-guides.psd
    └── export-actions.atn
```

Mỗi template PSD đã có sẵn:
- Layer groups chuẩn: Background / Product / Text / CTA / Logo
- Smart Objects cho vùng thay đổi (hero image, product shot)
- Character styles + paragraph styles theo brand guide
- Artboard đúng kích thước, guides đúng safe zone

**Kết quả:** Setup từ 15-20 phút giảm xuống mở file + double-click Smart Object = 2 phút.

### Bước 3: Thiết Kế Với AI Assist (15-20 phút)

**Vấn đề phổ biến:** Tìm stock photo phù hợp mất thời gian. Background không khớp mood. Product shot cần retouch.

**Giải pháp:** Dùng AI generative tích hợp trong Photoshop:

- **Generative Fill** để mở rộng background, xóa vật thể không mong muốn, tạo seamless pattern
- **Generative Expand** để resize hình ảnh sang tỷ lệ khác mà không crop mất nội dung
- **AI background removal** cho product shot (tích hợp sẵn trong PS 2024+, chính xác hơn Magic Wand)

Quy tắc sử dụng AI trong SOP:
1. AI chỉ hỗ trợ phần technical (background, retouch, expand) - KHÔNG dùng AI để generate toàn bộ visual
2. Output AI phải qua kiểm tra thủ công: check artifact, check brand consistency
3. Ghi log: banner nào dùng AI assist ở bước nào (để QA biết focus check đâu)

**Kết quả:** Thời gian thiết kế chính giảm từ 45-60 phút xuống 15-20 phút. Chất lượng background tốt hơn vì AI generate theo context, không phải crop ghép thủ công.

### Bước 4: Export Tự Động Bằng Photoshop Actions (3 phút)

**Vấn đề phổ biến:** Export thủ công sai format, quên resize, đặt tên file lung tung, quên convert color profile.

**Giải pháp:** Viết Photoshop Actions cho từng loại export:

**Action "Export-Web-Banner":**
1. Flatten visible layers
2. Convert to sRGB (web standard)
3. Save for Web: JPEG quality 82, progressive
4. Naming: `{brand}_{type}_{campaign}_{size}_{version}.jpg`
5. Save to output folder

**Action "Export-Email-Banner":**
1. Flatten + resize to max width 600px
2. Convert to sRGB
3. Save for Web: JPEG quality 75 (optimize file size cho email)
4. Compress dưới 200KB

**Action "Export-Ads-Multi":**
1. Từ 1 master artboard, auto-resize sang 5 ad sizes (1080x1080, 1200x628, 1080x1920, 320x50, 728x90)
2. Smart Object content giữ nguyên, chỉ reflow layout
3. Export tất cả vào subfolder theo platform

**Cách tạo Action:**
1. Window > Actions > New Action > Record
2. Thực hiện các bước export 1 lần
3. Stop recording
4. Gán phím tắt (F5-F12) cho từng action
5. Batch: File > Automate > Batch > chọn Action + folder input/output

**Kết quả:** Export từ 10-15 phút (thủ công, dễ sai) giảm xuống 1-3 phút (tự động, zero lỗi format). Giảm ~40% tổng thời gian sản xuất.

### Bước 5: QC Checklist + Delivery (5 phút)

**Vấn đề phổ biến:** Gửi banner xong bị feedback "logo sai vị trí", "font không đúng", "file quá nặng".

**Giải pháp:** QC Checklist bắt buộc trước khi gửi:

**Visual Check (mắt người):**
- [ ] Logo đúng vị trí, đúng phiên bản (full color / white / monochrome)
- [ ] Typography đúng font family + weight theo brand guide
- [ ] Color palette không lệch (so sánh với hex code trong guide)
- [ ] Hierarchy rõ ràng: headline > subhead > CTA
- [ ] Safe zone: text không bị cắt trên mobile

**Technical Check (script/tự động):**
- [ ] Resolution: web 72dpi / print 300dpi
- [ ] Color profile: sRGB cho web, CMYK cho in
- [ ] File size: web < 500KB, email < 200KB
- [ ] Naming convention đúng format
- [ ] Tất cả sizes đã export (không thiếu format nào)

**Delivery:**
- Upload vào folder đã quy ước (Google Drive / Lark Drive)
- Đánh dấu hoàn thành trên task board
- Tag reviewer nếu là banner quan trọng (hero, ads)

## Template SOP Cho Team Của Bạn

Dưới đây là template bạn có thể copy và customize:

```
SOP: [Tên Loại Banner]
Version: 1.0
Owner: [Designer phụ trách]
Last updated: [Ngày]

INPUT REQUIRED:
- Brief form hoàn chỉnh (7 trường)
- Brand guide link
- Campaign assets (product shots, copy)

PROCESS:
1. Nhận brief -> verify đủ thông tin (5 min)
2. Mở template PSD đúng brand + type (2 min)
3. Replace Smart Objects + thiết kế (15-20 min)
4. AI assist nếu cần (background, expand) (5 min)
5. Run Export Action phù hợp (3 min)
6. QC Checklist (5 min)
7. Upload + notify (2 min)

TOTAL TIME: 35-40 phút/banner (từ 2-3 tiếng thủ công)

OUTPUT:
- File chính theo kích thước yêu cầu
- File PSD source (lưu trữ)
- Thumbnail preview cho reviewer

QUALITY GATES:
- Visual check: pass tất cả items
- Technical check: pass tất cả items
- Reviewer sign-off (banner hero/ads only)
```

## Đo Lường Hiệu Quả SOP

Không đo = không biết SOP có hoạt động không. Track 4 metrics:

| Metric | Trước SOP | Sau SOP | Target |
|--------|-----------|---------|--------|
| Thời gian/banner | 2-3 tiếng | 35-40 phút | < 45 phút |
| Revision rate | 3-5 lần/banner | 0-1 lần | < 1 lần |
| Onboarding time | 2-3 tuần | 3-5 ngày | < 1 tuần |
| Format errors | 2-3/tuần | 0 | 0 |

Review SOP mỗi tháng: cái gì team hay bỏ qua? Bước nào mất thời gian nhất? Template nào cần update?

## Bước Tiếp Theo

SOP banner chỉ là khởi đầu. Cùng framework này có thể áp dụng cho:
- SOP thiết kế email template (cho các nền tảng email marketing)
- SOP sản xuất product listing image
- SOP tạo social media content batch

Chìa khóa là: **chuẩn hóa trước, tự động hóa sau**. Đừng viết script cho quy trình chưa ổn định. Chạy SOP thủ công 2-4 tuần, refine, rồi mới automate những bước lặp lại.

Nếu bạn muốn trao đổi thêm về cách xây SOP cho team design e-commerce, connect với tôi qua [LinkedIn](https://www.linkedin.com/in/tieungoc-design) hoặc ghé [portfolio](https://tieungoc.site) của tôi.

*Bài tiếp theo: Midjourney + Photoshop Scripting: Quy Trình Thực Tế - so sánh hands-on giữa các công cụ AI gen và cách kết hợp vào pipeline production hàng ngày.*
