# Midjourney + Photoshop Scripting: Quy Trình Thực Tế Của Một POD Designer

**Subtitle:** So sánh hands-on giữa các công cụ AI generative và cách kết hợp chúng vào pipeline sản xuất thiết kế hàng ngày - không lý thuyết, chỉ có thực hành.

---

Trên mạng có hàng trăm bài review Midjourney, Adobe Firefly, Stable Diffusion. Đa số viết bởi người dùng thử vài prompt rồi kết luận. Bài viết này khác: đây là góc nhìn từ người dùng các công cụ này mỗi ngày trong production thật, với deadline thật và tiêu chuẩn chất lượng cho thị trường Mỹ và Châu Âu.

Tôi sẽ chia sẻ cụ thể: công cụ nào dùng ở bước nào, tại sao không dùng 1 công cụ cho tất cả, và cách Photoshop Scripting biến output AI thành sản phẩm hoàn chỉnh.

## Bản Đồ Công Cụ: Ai Làm Gì?

Sai lầm phổ biến nhất là cố tìm "công cụ AI tốt nhất" rồi dùng nó cho mọi thứ. Thực tế, mỗi công cụ mạnh ở một giai đoạn khác nhau:

| Công cụ | Vai trò chính | Mạnh nhất ở đâu | Yếu nhất ở đâu |
|---------|---------------|------------------|-----------------|
| Midjourney | Ideation, concept art | Sáng tạo, aesthetic, variation nhanh | Không chỉnh sửa chi tiết được |
| Adobe Firefly | Chỉnh sửa trong Photoshop | Generative Fill, expand, remove | Kém sáng tạo hơn Midjourney |
| Banana Pro | Nâng chất lượng in ấn | Upscale giữ chi tiết, 300 DPI | Không tạo content mới |
| Photoshop Scripting | Tự động hóa lặp lại | Batch processing, export, QC | Không có AI, chỉ là automation |

Khi hiểu rõ vai trò từng công cụ, bạn không còn lãng phí thời gian ép Midjourney làm việc của Photoshop, hay dùng Firefly để brainstorm concept.

## Giai Đoạn 1: Midjourney Cho Ideation

### Khi Nào Dùng

- Bắt đầu niche mới, chưa có visual direction
- Cần 20-40 concept variations để chọn lọc
- Thử nghiệm phong cách mới cho thương hiệu
- Tìm cảm hứng cho campaign seasonal

### Cách Dùng Trong Production

Tôi không dùng Midjourney để tạo design cuối cùng. Tôi dùng nó để tạo "nguyên liệu thô":

**Prompt structure tôi hay dùng:**
```
[chủ đề sản phẩm] + [phong cách thẩm mỹ] + [mood/tone] + [thông số kỹ thuật]
```

Ví dụ cho niche thời trang:
```
streetwear graphic design, bold typography, urban aesthetic, 
flat vector style, vibrant colors on dark background --ar 1:1 --v 6
```

**Quy trình thực tế:**
1. Tạo 10 prompt variations cho 1 niche (5 phút)
2. Mỗi prompt ra 4 variations = 40 concepts (10 phút chờ generate)
3. Lọc xuống 8-10 concepts có tiềm năng (5 phút)
4. Download và đưa vào Photoshop để refine

**Tổng thời gian:** 20 phút cho 8-10 concept đã lọc. So với brainstorm thủ công: 1-2 tiếng cho 3-5 concept.

### Giới Hạn Thực Tế

- **Không kiểm soát chi tiết:** Bạn không thể nói "dịch logo sang phải 2cm". Midjourney là công cụ sáng tạo, không phải công cụ chỉnh sửa.
- **Consistency khó:** 4 variations từ 1 prompt có thể khác nhau hoàn toàn. Muốn style nhất quán phải dùng --sref hoặc style reference.
- **IP cần cẩn thận:** Output Midjourney có thể giống phong cách của artist khác. Luôn kiểm tra trước khi dùng cho thương mại.

## Giai Đoạn 2: Adobe Firefly Cho Chỉnh Sửa

### Khi Nào Dùng

- Mở rộng background cho banner (Generative Expand)
- Xóa vật thể không mong muốn (Generative Fill)
- Thay đổi chi tiết cụ thể trên design có sẵn
- Tạo seamless pattern từ texture gốc

### Cách Dùng Trong Production

Firefly mạnh nhất khi tích hợp trong Photoshop, không phải dùng qua web:

**Use case 1: Banner hero cần background rộng hơn**
- Product shot có sẵn nhưng chỉ 1:1
- Cần expand sang 16:9 cho hero banner
- Generative Expand giữ nguyên subject, AI fill background tự nhiên
- Thời gian: 30 giây thay vì 15-20 phút ghép thủ công

**Use case 2: Xóa chi tiết không mong muốn**
- Photo sản phẩm có watermark, tag giá, hoặc background lộn xộn
- Chọn vùng cần xóa, Generative Fill tái tạo tự nhiên
- Chính xác hơn Content-Aware Fill cũ rất nhiều

**Use case 3: Đổi màu sản phẩm**
- Áo thun đen cần tạo thêm phiên bản trắng, đỏ, xanh
- Chọn vùng vải, mô tả màu mong muốn
- AI hiểu texture và ánh sáng, đổi màu realistic

### Giới Hạn Thực Tế

- **Artifact ở viền:** Đôi khi Generative Fill tạo ra viền mờ hoặc texture không khớp. Cần zoom in kiểm tra.
- **Không nhất quán giữa các lần generate:** Cùng prompt, 3 lần generate cho 3 kết quả khác nhau. Phải thử nhiều lần chọn cái tốt nhất.
- **Phụ thuộc vào input quality:** Ảnh gốc càng tốt, output AI càng tốt. Garbage in, garbage out.

## Giai Đoạn 3: Banana Pro Cho Chất Lượng In Ấn

### Khi Nào Dùng

- AI-generated image cần in trên sản phẩm (áo, cốc, poster)
- Design chỉ có 72 DPI, cần nâng lên 300 DPI
- Upscale mà không muốn bị mờ hoặc pixelated

### Thực Tế Sử Dụng

Midjourney output thường ở 1024x1024 pixels. Đủ cho web, nhưng in trên áo size L cần ít nhất 3000x3000 ở 300 DPI. Banana Pro giải quyết gap này:

- Upload image 1024x1024
- Upscale 4x ra 4096x4096
- AI giữ nguyên chi tiết, thêm texture tự nhiên thay vì blur
- Export ở 300 DPI, sẵn sàng gửi nhà in

**So sánh với upscale thường:**
- Photoshop Image Size (Preserve Details 2.0): Tốt nhưng vẫn mờ ở 4x
- Topaz Gigapixel: Tốt hơn nhưng chậm và đắt
- Banana Pro: Nhanh, chất lượng tương đương Topaz, giá rẻ hơn

## Giai Đoạn 4: Photoshop Scripting - Biến Output AI Thành Sản Phẩm

### Tại Sao Cần Scripting

AI generate xong mới chỉ là 50% công việc. 50% còn lại là:
- Đặt design lên mockup sản phẩm
- Tạo color variants
- Export đúng spec cho từng nền tảng
- Đặt tên file theo convention
- Kiểm tra chất lượng

Làm thủ công 1 bản mất 10-15 phút. Nhân cho 20-30 designs mỗi ngày = 5-7 tiếng chỉ riêng phần post-production. Scripting giải quyết vấn đề này.

### 3 Script Tôi Dùng Hàng Ngày

**Script 1: Batch Mockup Placer**
```
Input: Folder chứa 30 design files + 1 mockup template
Output: 30 mockup images đã place đúng vị trí, perspective, shadow
Thời gian: 5 phút (thay vì 2-3 tiếng thủ công)
```

Cách hoạt động:
- Script mở template PSD có Smart Object layer đánh dấu sẵn
- Lặp qua từng file trong folder input
- Replace nội dung Smart Object bằng design mới
- Flatten và save ra output folder
- Tự động đặt tên theo format: `brand_niche_sku_mockuptype.jpg`

**Script 2: Color Variant Generator**
```
Input: 1 design gốc + bảng màu (5-8 màu)
Output: 5-8 phiên bản màu khác nhau
Thời gian: 1 phút (thay vì 20-30 phút)
```

Cách hoạt động:
- Script đọc layer cần đổi màu (đánh dấu bằng tên layer)
- Apply Hue/Saturation adjustment cho từng màu trong bảng
- Save từng variant ra file riêng
- Naming convention: `design_name_color_variant.png`

**Script 3: Multi-Platform Exporter**
```
Input: 1 master design PSD
Output: 5+ file cho các nền tảng khác nhau (web, email, ads, social)
Thời gian: 30 giây (thay vì 10-15 phút)
```

Cách hoạt động:
- Đọc config file chứa specs từng nền tảng (size, DPI, format, quality)
- Resize, convert color profile, compress theo từng spec
- Export vào subfolder theo tên nền tảng
- Validate file size (web < 500KB, email < 200KB)

### Bắt Đầu Viết Script Từ Đâu

Nếu bạn chưa từng viết Photoshop Script:

1. **Tuần 1:** Học Photoshop Actions trước. Record các bước bạn lặp lại nhiều nhất. Chạy bằng Batch (File > Automate > Batch).
2. **Tuần 2:** Tìm hiểu ExtendScript cơ bản. Photoshop có Script Listener (ghi lại mọi thao tác thành code). Bật lên, làm thủ công 1 lần, xem code được ghi lại.
3. **Tuần 3:** Chỉnh sửa code từ Script Listener cho phù hợp. Thêm vòng lặp để xử lý nhiều file.
4. **Tuần 4:** Hoặc đơn giản hơn: mô tả quy trình cho AI (ChatGPT, Claude) và nhờ viết script. Review, test, chỉnh sửa.

Bạn không cần là developer để viết Photoshop Script. Chỉ cần biết mình muốn automate bước nào.

## Quy Trình Tổng Hợp: Từ Ý Tưởng Đến Sản Phẩm

Đây là flow thực tế tôi chạy mỗi ngày:

```
Midjourney (20 phút)
    ↓ 8-10 concepts đã lọc
Adobe Firefly (10 phút)
    ↓ Chỉnh sửa, expand, remove chi tiết
Banana Pro (5 phút)
    ↓ Upscale lên 300 DPI chuẩn in
PS Script: Batch Mockup (5 phút)
    ↓ 20-30 mockups hoàn chỉnh
PS Script: Color Variants (2 phút)
    ↓ 5-8 màu mỗi design
PS Script: Multi-Export (1 phút)
    ↓ Files cho web, email, ads, social
QC Script (1 phút)
    ↓ Validate resolution, size, naming
DONE: 25+ sản phẩm hoàn chỉnh
```

**Tổng thời gian:** khoảng 45 phút cho 25+ sản phẩm. Trước đây cần 6-8 tiếng cho cùng output.

## Lời Khuyên Từ Thực Tế

1. **Đừng dùng AI output trực tiếp cho sản phẩm.** Luôn qua Photoshop để refine. AI generate tốt nhưng chưa bao giờ hoàn hảo ngay lần đầu.

2. **Xây dựng prompt library.** Mỗi prompt hiệu quả tôi đều lưu lại kèm output example. Sau vài tháng có hàng trăm prompt đã test, tiết kiệm rất nhiều thời gian.

3. **Script không cần hoàn hảo ngay.** Viết version đầu tiên xử lý 80% trường hợp. Chỉnh sửa dần qua thực tế sử dụng.

4. **Đo lường để cải thiện.** Mỗi tuần tôi ghi lại: bao nhiêu SKU output, bao nhiêu phút mỗi bản, bao nhiêu lần phải sửa lại. Con số không nói dối.

5. **Chia sẻ với team.** Quy trình hay mà chỉ mình dùng thì tác động hạn chế. Viết SOP, training team adopt, mới thực sự scale được.

## Tổng Kết

Không có "công cụ AI tốt nhất" - chỉ có sự kết hợp phù hợp nhất cho workflow của bạn. Midjourney cho sáng tạo, Firefly cho chỉnh sửa, Banana Pro cho chất lượng in, Photoshop Scripting cho tự động hóa. Mỗi công cụ một vai trò, kết hợp lại thành pipeline mạnh mẽ.

Bắt đầu từ 1 công cụ, thành thạo rồi thêm dần. Đừng cố setup cả 4 cùng lúc.

Nếu bạn muốn trao đổi thêm về quy trình hoặc cần hỗ trợ viết Photoshop Script đầu tiên, connect với tôi qua [LinkedIn](https://www.linkedin.com/in/tieungoc-design) hoặc ghé [portfolio](https://tieungoc.site) của tôi.
