export interface Article {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  platform: 'Substack' | 'LinkedIn';
  url: string;
  tags: string[];
  thumbnail: string;
}

export const articlesData: Article[] = [
  {
    id: "a1",
    title: "Nhật ký làm nghề: Chuyện cô gái Song Ngư bắt trend áo thun thị trường Mỹ và bộ sưu tập $20,000 một quý",
    date: "15 Tháng 01, 2026",
    readTime: "6 phút đọc",
    excerpt: "Làm POD cho thị trường US không chỉ là vẽ đẹp, mà là cuộc đua thấu hiểu tâm lý khách hàng Âu Mỹ. Chia sẻ thật lòng về hành trình từ những mẫu áo đầu tiên đến bộ sưu tập anime cán mốc $20,000 trong mùa mua sắm cuối năm.",
    platform: "Substack",
    url: "https://tieungoc.substack.com/",
    tags: ["Nhật Ký Làm Nghề", "POD US Market", "Storytelling", "Case Study"],
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "a2",
    title: "Khi Designer không muốn burnout: Cách mình dùng Photoshop Scripts & AI để giảm 40% thời gian cày cuốc",
    date: "28 Tháng 11, 2025",
    readTime: "5 phút đọc",
    excerpt: "Nếu mỗi ngày bạn phải xuất hàng trăm file in và ghép mockup bằng tay, bạn sẽ sớm kiệt sức. Đây là cách một cô gái không rành lập trình đã tự mày mò viết Photoshop Actions và JS Scripts để giải phóng sức lao động.",
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/tieungoc-design",
    tags: ["Tự Động Hóa", "Photoshop Scripts", "AI Workflow", "Năng Suất"],
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "a3",
    title: "Overthinking nhưng làm siêu nhanh: Bí quyết vẽ Wacom và xử lý file in chuẩn chỉnh cho 3500+ sản phẩm POD",
    date: "10 Tháng 09, 2025",
    readTime: "7 phút đọc",
    excerpt: "Người ta bảo Song Ngư hay mơ mộng và overthinking. Mình biến điều đó thành sự kỹ tính khắt khe trong việc kiểm soát dải màu in ấn, nét vẽ bảng Wacom và độ sắc nét 300 DPI để khách hàng nhận áo là ưng ý ngay.",
    platform: "Substack",
    url: "https://tieungoc.substack.com/",
    tags: ["Wacom Illustration", "Kỹ Thuật In Ấn", "Song Ngư", "Tâm Sự"],
    thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "a4",
    title: "Nghệ thuật Email Marketing trong E-commerce POD: Thiết kế thế nào để đạt 28% tỷ lệ mở giữa tâm bão thư rác?",
    date: "20 Tháng 06, 2025",
    readTime: "4 phút đọc",
    excerpt: "Khách hàng Mỹ chỉ lướt qua email trong đúng 3 giây. Phân tích bố cục phân cấp thị giác, cách nén ảnh dưới 200KB và chiến lược CTA trực quan giúp nâng cao tỷ lệ chuyển đổi cho store thời trang.",
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/tieungoc-design",
    tags: ["Klaviyo Email", "E-commerce Design", "Conversion Rate"],
    thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "a5",
    title: "Cẩm nang Prompt Engineering cho Graphic Designer: Tạo concept thời trang chuẩn xưởng in",
    date: "02 Tháng 03, 2026",
    readTime: "5 phút đọc",
    excerpt: "Prompt AI không chỉ là gõ từ khóa ngẫu hứng. Khám phá cách cấu trúc prompt về chất liệu vải, góc chiếu sáng rim-light và phong cách mỹ thuật để cho ra concept visual có thể vẽ lại hoặc tách lớp in ấn thực tế.",
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/tieungoc-design",
    tags: ["Prompt Engineering", "AI Design", "Print On Demand", "Tips Làm Nghề"],
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "a6",
    title: "DesignOps cho Designer Gen Z: Tự viết Photoshop Script ghép 100 mockup áo thun trong 3 phút",
    date: "18 Tháng 02, 2026",
    readTime: "6 phút đọc",
    excerpt: "Đừng để công việc lặp đi lặp lại bào mòn ngọn lửa sáng tạo của bạn. Hướng dẫn từng bước cách tận dụng ExtendScript (JavaScript trong Photoshop) và Actions để tự động hóa toàn bộ công đoạn mockup sản phẩm cho store E-commerce.",
    platform: "Substack",
    url: "https://tieungoc.substack.com/",
    tags: ["DesignOps", "Automation", "Photoshop Script", "Tự Động Hóa"],
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
  }
];
