# Tôi Đã Tạo Linh Vật Cho Công Ty Trong 1 Ngày - Đây Là Cách

**Subtitle:** Behind-the-scenes quá trình thiết kế VaniBot: từ brief trắng đến sticker pack hoàn chỉnh, sử dụng AI-First Workflow.

---

Hôm qua tôi nhận được một câu hỏi từ team: "Công ty mình có linh vật chưa?"

Câu trả lời là chưa. Vani Ecommerce có 3 thương hiệu con, mỗi thương hiệu có bộ nhận diện riêng. Nhưng parent company thì không. Không logo mascot, không sticker pack, không nhân vật đại diện.

Và tôi nghĩ: tại sao không thử?

Không phải vì team yêu cầu chính thức. Mà vì tôi muốn xem quy trình AI-First mà tôi vẫn dùng hàng ngày cho product design có thể làm được đến đâu với character design - một lĩnh vực tôi chưa từng thử nghiêm túc.

Đây là ghi chép thật về quá trình đó.

## Brief: Bắt Đầu Từ Đâu?

Bước đầu tiên không phải mở Photoshop. Mà là ngồi viết.

Tôi tự hỏi: nếu Vani Ecommerce là một nhân vật, nó sẽ trông như thế nào?

Công ty làm POD (Print-on-Demand), bán cho thị trường Mỹ và Châu Âu. Team designer nhỏ nhưng output rất lớn - hàng nghìn SKU. Và điểm khác biệt lớn nhất của team là quy trình AI-First: dùng AI cho ideation, Photoshop Scripting cho automation.

Từ đó tôi viết ra concept: **một robot designer nhỏ**.

- Robot vì AI + automation.
- Designer vì vẫn cầm bút, vẫn sáng tạo.
- Nhỏ và dễ thương vì team culture thân thiện, trẻ, năng động.

Phong cách: chibi kawaii. Đầu to, mắt tròn, tỷ lệ 2:1. Kiểu nhân vật mà bạn muốn biến thành sticker ngay khi nhìn thấy.

## Màu Sắc: Bài Toán Thú Vị

Đây là phần tôi thích nhất.

Vani Ecommerce có 3 thương hiệu con, mỗi thương hiệu có màu riêng:
- EzCustomcar: đỏ (#E04343)
- LittleOwh: tím (#9B5DE5)
- Kozmozracing: xanh (#3876DE)

Thay vì chọn 1 màu, tôi dùng gradient cả 3. Robot có thân gradient từ đỏ sang tím sang xanh. Vừa đẹp, vừa có ý nghĩa: parent company chứa đựng tất cả các con.

Thêm chi tiết:
- Antenna hình cây bút Pen Tool (Photoshop signature)
- Tai nghe over-ear (designer vibes)
- Logo "V" phát sáng trên bụng (Vani)
- Má hồng kawaii (vì cute là quyền)

## Generate: AI Làm Phần Nặng

Với brief rõ ràng, tôi bắt đầu generate.

Tôi viết prompt chi tiết cho từng asset: character sheet front view, 3-view turnaround, 5 biểu cảm (happy, excited, thinking, surprised, tired), 5 tư thế (vẽ, ngồi laptop, ôm package, high-five, ngủ gật).

Tổng cộng 14 images.

Với Gemini AI (model 2.5-flash-image), mỗi image generate trong khoảng 10-15 giây. Toàn bộ 14 images xong trong dưới 10 phút.

So sánh: nếu tôi sketch tay 14 bản này, ít nhất 2-3 ngày. Nếu thuê illustrator, 1-2 tuần + budget đáng kể.

10 phút.

Tất nhiên output AI không hoàn hảo. Một số bản có chi tiết không nhất quán - antenna hơi khác giữa các pose, gradient color shift nhẹ. Đó là lý do tôi không bao giờ dùng AI output trực tiếp.

## Refine: Con Mắt Người Vẫn Quyết Định

Sau khi generate, tôi mở Photoshop:
- Chỉnh lại color consistency giữa các pose (dùng adjustment layers)
- Cleanup chi tiết antenna cho đồng nhất
- Cân chỉnh gradient cho khớp với hex code thật
- Export đúng spec: transparent PNG cho sticker, high-res cho Behance

Phần refine mất khoảng 1-2 tiếng. Không nhiều, nhưng đây là phần tạo ra sự khác biệt giữa "AI generate" và "designer sử dụng AI".

## Behance Showcase: Đóng Gói Chuyên Nghiệp

Linh vật đẹp mà không biết present thì uổng.

Tôi tạo Behance showcase gồm 8 slides:
1. Hero: giới thiệu VaniBot
2. Concept story: tại sao robot, tại sao gradient
3. Character turnaround: 3-view reference
4. Color palette: 6 swatches với hex codes
5. Emotion pack: 5 biểu cảm
6. Pose pack: 5 tư thế hành động
7. Sticker pack preview: layout mockup
8. Behind-the-scenes: quy trình 6 bước

Layout dùng DTC Prime visual system: dark theme, Inter + Outfit fonts, gradient background.

## Số Liệu Thực Tế

| Metric | Giá trị |
|--------|---------|
| Thời gian từ brief đến delivery | ~4 tiếng (1 ngày làm việc) |
| Số images tạo ra | 14 assets |
| AI generation time | ~10 phút |
| Manual refinement | ~2 tiếng |
| Showcase layout | ~1.5 tiếng |
| Estimated cost nếu outsource | $500-$1,500 |
| Actual cost (AI API) | < $2 |

## Bài Học Rút Ra

**1. Brief tốt = output tốt.**
80% chất lượng đến từ việc viết brief rõ ràng trước khi generate. Prompt "vẽ robot dễ thương" cho kết quả rất khác với prompt chi tiết về màu sắc, tỷ lệ, accessories, personality.

**2. AI cho tốc độ, designer cho linh hồn.**
AI generate 14 images trong 10 phút. Nhưng quyết định chọn gradient 3 brand colors, antenna hình Pen Tool, logo "V" phát sáng - những chi tiết có ý nghĩa - đó là việc của designer.

**3. Character design cũng có thể apply AI-First Workflow.**
Tôi quen dùng workflow này cho product mockup, banner, email template. Hóa ra nó hoạt động tốt cho cả character design - chỉ cần điều chỉnh prompt chi tiết hơn về consistency.

**4. Showcase quan trọng bằng design.**
Behance project đẹp = people notice. Present tốt biến 14 images thành một câu chuyện hoàn chỉnh.

## Tiếp Theo

VaniBot hiện tại là concept project. Bước tiếp:
- Upload lên Behance (portfolio)
- Tạo Lark sticker pack cho team internal
- Animate 2-3 stickers (GIF) cho social media

Nếu bạn đang có ý tưởng mascot cho team hoặc brand của mình, quy trình này hoàn toàn reproduce được. Brief rõ ràng + AI generate + refine thủ công = mascot trong 1 ngày.

Có câu hỏi nào về quy trình, cứ inbox tôi qua [LinkedIn](https://www.linkedin.com/in/tieungoc-design) hoặc ghé [portfolio](https://tieungoc.site).
