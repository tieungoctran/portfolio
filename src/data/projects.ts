export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'POD & Apparel Design' | 'Brand Visual Identity' | 'E-commerce & Email Visual';
  year: string;
  client: string;
  role: string;
  tools: string[];
  aiHighlights: string[];
  coverImage: string;
  galleryImages: {
    url: string;
    caption: string;
  }[];
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  prototypeUrl?: string;
  behanceUrl?: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: "p1",
    slug: "pod-anime-collection",
    title: "Dự Án D2C: 3 Thương Hiệu E-commerce, Đạt ~$25,000 Lợi Nhuận Team Q4/2025",
    subtitle: "Phụ trách toàn bộ thiết kế cho 3 thương hiệu D2C từ các dòng sản phẩm in ấn POD đến Ad Creatives cho Meta & Google Ads, banner website và email Klaviyo.",
    category: "POD & Apparel Design",
    year: "Q3–Q4/2025",
    client: "Dự án D2C: 3 Thương hiệu E-commerce (US/EU)",
    role: "Lead E-commerce Designer (Product Design, Ad Creatives, Website Banners & Mockups)",
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Bảng vẽ Wacom", "Adobe Firefly", "PS Actions & Scripts"],
    aiHighlights: [
      "Ứng dụng Adobe Firefly, ChatGPT Image & Gemini tạo moodboard và biến thể nhanh gấp 3 lần",
      "Hoàn thiện thủ công 100% từng sản phẩm bằng Wacom: gu dẫn lối, AI tiếp sức, thiết kế có hồn",
      "Sử dụng Photoshop Actions & Scripts tự động ghép mockup 2D/3D và xuất file in 300 DPI chuẩn SKU"
    ],
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80",
        caption: "Thiết kế sản phẩm in ấn (T-shirt, áo, quần, cốc, mũ, giày, poster) với độ tương phản cao, sẵn sàng sản xuất."
      },
      {
        url: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1400&q=80",
        caption: "Hệ thống Mockup 2D/3D và Ad Creatives cho Meta & Google Ads đồng bộ từ sản phẩm đến chiến dịch."
      },
      {
        url: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1400&q=80",
        caption: "Hàng trăm biến thể kích thước và mockup được xuất tự động bằng Photoshop Actions & Script (.jsx)."
      }
    ],
    overview: "Trong Q3–Q4/2025, Tiểu Ngọc được giao phụ trách toàn bộ thiết kế cho 3 thương hiệu E-commerce thuộc dự án D2C, phối hợp chặt chẽ cùng team từ khâu phát triển sản phẩm in ấn đến toàn bộ visual marketing phục vụ mùa cao điểm mua sắm cuối năm.",
    challenge: "Phải đồng thời vận hành khối lượng thiết kế lớn cho cả 3 thương hiệu trên nhiều dòng sản phẩm (t-shirt, áo, quần, cốc, mũ, giày, poster) và đa kênh quảng cáo (banner website, header email Klaviyo, Google Ads, Facebook Ads) mà vẫn phải giữ chất lượng thẩm mỹ độc bản và chuẩn kỹ thuật in ấn.",
    solution: "Tiểu Ngọc áp dụng quy trình 'Con người dẫn dắt, AI tăng tốc': dùng AI để khám phá ý tưởng và bố cục quảng cáo nhanh, tự tay hoàn thiện nét vẽ Wacom và Typography, sau đó dùng bộ Photoshop Actions & Scripts tự viết để tự động hóa khâu ghép mockup và xuất file in 300 DPI.",
    results: [
      "Đóng góp vào kết quả ~$25,000 USD lợi nhuận của team D2C trong Q4/2025",
      "Giảm ~40% thời gian sản xuất và 99% lỗi đặt tên file theo SKU cho toàn bộ dự án",
      "Tỷ lệ hoàn trả sản phẩm do lỗi in ấn giữ dưới 0.4% nhờ kiểm soát chặt hệ màu CMYK/RGB 300 DPI"
    ],
    behanceUrl: "https://www.behance.net/tieungoctran",
    featured: true,
  },
  {
    id: "p2",
    slug: "racing-apparel-line",
    title: "Racing Apparel Line: Hệ Thống Nhận Diện & Thời Trang Đường Đua Mỹ",
    subtitle: "Trọn bộ cẩm nang nhận diện thương hiệu ngách Motorsport kết hợp dòng thiết kế thời trang POD in tràn viền All-Over-Print sống động.",
    category: "Brand Visual Identity",
    year: "2024",
    client: "Apex US Racing Gear",
    role: "Brand Identity & Apparel Designer",
    tools: ["Adobe Illustrator", "Photoshop", "Wacom Tablet", "Banana Pro AI"],
    aiHighlights: [
      "Tạo sinh các mẫu hoa văn thuật toán (Generative speed patterns) thể hiện vận tốc và khói bụi đường đua",
      "Chắt lọc typography kim loại nặng, góc cạnh mang đậm tinh thần thể thao tốc độ",
      "Tự động hóa luồng mockup sản phẩm 3D áo khoác bomber, hoodie và nón snapback"
    ],
    coverImage: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1400&q=80",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1400&q=80",
        caption: "Bộ logo biểu tượng đại bàng kim loại và hệ thống màu sắc nhận diện đặc trưng của thương hiệu Apex."
      },
      {
        url: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1400&q=80",
        caption: "Thiết kế áo đua All-Over-Print 3D với các mảng khối khí động học và typography thể thao sắc sảo."
      },
      {
        url: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1400&q=80",
        caption: "Bộ mockup trang phục và phụ kiện hoàn chỉnh sẵn sàng cho chiến dịch quảng cáo Meta Ads."
      }
    ],
    overview: "Dự án xây dựng trọn gói từ hệ thống nhận diện thương hiệu cốt lõi (Logo, Brand Guidelines, Typography) đến bộ sưu tập 30 sản phẩm thời trang POD phục vụ người hâm mộ đua xe thể thao tại Mỹ.",
    challenge: "Khách hàng ngách thể thao tốc độ yêu cầu đồ họa phải toát lên năng lượng mạnh mẽ, gai góc và hiện đại. Việc dựng các mẫu in tràn viền 3D (All-Over-Print) yêu cầu sự chính xác tuyệt đối ở các đường may, khớp nối giữa thân áo và tay áo.",
    solution: "Tiểu Ngọc xây dựng khung lưới (grid template) riêng cho từng kích thước áo, sử dụng Illustrator để hoàn thiện vector chính xác đến từng mi-li-mét, kết hợp kỹ thuật gradient kim loại để tạo chiều sâu thị giác khi sản phẩm hiển thị trên màn hình quảng cáo trực tuyến.",
    results: [
      "Hoàn thiện toàn bộ hệ thống nhận diện và 30 thiết kế thương phẩm chỉ trong vòng 3 tuần",
      "Tăng chỉ số nhấp chuột quảng cáo (CTR) lên 45% nhờ mockups bắt mắt và độ phân giải cao",
      "Khách hàng ký tiếp hợp đồng phát triển dòng phụ kiện (ly giữ nhiệt, cờ lưu niệm, poster canvas)"
    ],
    behanceUrl: "https://www.behance.net/tieungoctran",
    featured: true,
  },
  {
    id: "p3",
    slug: "ecommerce-email-marketing-system",
    title: "E-Commerce Email System: Chuỗi Giao Diện Tiếp Thị Chuyển Đổi Cao",
    subtitle: "Thiết kế hệ thống 15+ mẫu email Klaviyo chuẩn Responsive cho thương hiệu thời trang POD, đạt tỷ lệ mở trung bình 28%.",
    category: "E-commerce & Email Visual",
    year: "2024",
    client: "Vani Ecommerce Global Brands",
    role: "Visual Designer & Email Template Creator",
    tools: ["Adobe Photoshop", "Canva Pro", "Klaviyo", "HTML/CSS cơ bản"],
    aiHighlights: [
      "Ứng dụng AI tạo sinh các banner theo mùa (Black Friday, Halloween, Father's Day), rút ngắn thời gian lên ý tưởng",
      "Quy chuẩn hóa tỷ lệ typography và nút CTA để người dùng dễ thao tác trên màn hình điện thoại",
      "Tối ưu dung lượng hình ảnh dưới 200KB mà vẫn sắc nét, giúp email tải tức thì và không bị rơi vào hòm thư rác (Spam)"
    ],
    coverImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80",
        caption: "Mẫu email Welcome Series với bố cục phân cấp thị giác rõ ràng, dẫn dắt khách hàng khám phá sản phẩm mới."
      },
      {
        url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1400&q=80",
        caption: "Chiến dịch Flash Sale theo chủ đề Black Friday với visual tương phản cao kích thích hành vi mua sắm."
      }
    ],
    overview: "Xây dựng hệ thống mẫu email marketing toàn diện trên nền tảng Klaviyo cho các nhãn hàng thời trang POD, từ chuỗi chào đón (Welcome Series), nhắc nhở giỏ hàng bị bỏ quên (Abandoned Cart) đến các đợt phát hành bộ sưu tập mới.",
    challenge: "Email thời trang thường bị rơi vào tab Khuyến mãi (Promotions) hoặc Spam nếu chứa quá nhiều ảnh nặng, trong khi phần lớn khách hàng US mở email trên điện thoại với thời gian lướt qua chỉ 3-5 giây.",
    solution: "Tiểu Ngọc thiết kế hệ thống layout dạng mô-đun (Modular blocks), kết hợp hài hòa giữa chữ và hình ảnh, giữ tỷ lệ dung lượng nhẹ tối đa và tạo điểm nhấn thị giác bằng các ảnh GIF động ngắn mô phỏng góc nhìn 360 độ của sản phẩm áo thun.",
    results: [
      "Đạt tỷ lệ mở trung bình (Average Open Rate) 28%, vượt trội so với mức chuẩn chung của ngành e-commerce là 21%",
      "Tỷ lệ nhấp chuột trên lượt mở (Click-to-Open Rate) tăng 35% sau khi tối ưu lại nút CTA",
      "Tiết kiệm 50% thời gian dựng campaign hàng tuần cho team Marketing nhờ hệ thống thư viện mẫu linh hoạt"
    ],
    behanceUrl: "https://www.behance.net/tieungoctran",
    featured: true,
  },
  {
    id: "p4",
    slug: "photoshop-automation-toolkit",
    title: "Photoshop Automation Toolkit: Giải Pháp Tự Động Hóa Giảm ~40% Thời Gian",
    subtitle: "Bộ kịch bản JavaScript (.jsx) & Actions (.atn) giúp tự động hóa khâu ghép mockup 2D/3D, xuất file in 300 DPI và đặt tên theo SKU cho hàng nghìn file in sản phẩm.",
    category: "POD & Apparel Design",
    year: "2023",
    client: "Nội bộ Vani Ecommerce",
    role: "Creator & Automation Specialist",
    tools: ["Adobe Photoshop", "JavaScript", "Photoshop Actions", "Batch Processing"],
    aiHighlights: [
      "Tự lập trình các kịch bản JS mở rộng tính năng của Photoshop mà phần mềm gốc không hỗ trợ",
      "Tự động canh chỉnh tỷ lệ hình in theo từng size áo từ S đến 5XL mà không cần thao tác tay",
      "Tích hợp phím tắt thông minh giảm bớt 80% các thao tác lặp đi lặp lại hàng ngày của designer"
    ],
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
        caption: "Giao diện bảng điều khiển Photoshop Action với các lệnh xuất file in tự động chỉ bằng 1 phím tắt."
      },
      {
        url: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1400&q=80",
        caption: "Quy trình batch process tự động ghép 50 mẫu áo lên 4 góc nhìn khác nhau trong vòng chưa đầy 5 phút."
      }
    ],
    overview: "Để giải quyết áp lực tiến độ khi phải sản xuất hàng trăm mẫu thiết kế mới mỗi tuần cho các chiến dịch bán hàng quốc tế, Tiểu Ngọc đã tự nghiên cứu và viết bộ kịch bản tự động hóa chuyên biệt cho Photoshop.",
    challenge: "Các thao tác thủ công như đổi hệ màu, kiểm tra độ phân giải, tạo bóng đổ mockup, đổi tên file theo mã SKU tốn hàng giờ đồng hồ mỗi ngày và rất dễ xảy ra nhầm lẫn.",
    solution: "Viết kịch bản tự động hóa bằng Photoshop JavaScript (ExtendScript) kết hợp Actions: Tự động phát hiện kích thước canvas, căn giữa đồ họa, ghép vào khung áo thun và xuất đa định dạng (PNG trong suốt, JPEG mockup) theo đúng cây thư mục của nhà in.",
    results: [
      "Cắt giảm khoảng 40% tổng thời gian chuẩn bị file sản xuất cho toàn đội ngũ thiết kế",
      "Giảm thiểu 99% lỗi sai lệch mã SKU hoặc nhầm size file in khi gửi sang xưởng in US",
      "Giúp Tiểu Ngọc có thêm nhiều thời gian để đầu tư vào tư duy sáng tạo và vẽ minh họa chi tiết"
    ],
    behanceUrl: "https://www.behance.net/tieungoctran",
    featured: false,
  }
];
