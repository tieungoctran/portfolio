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

// Case-study plates are redrawn reconstructions, never client files (NDA); pages label them so
export const isReconstructedVisual = (url: string) => url.startsWith('/images/projects/');

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
    coverImage: "/images/projects/d2c-cover.svg",
    galleryImages: [
      {
        url: "/images/projects/d2c-products.svg",
        caption: "Một artwork triển khai đồng bộ trên áo, cốc, mũ và poster, file in 300 DPI tách lớp cho DTG và All-Over-Print."
      },
      {
        url: "/images/projects/d2c-ads.svg",
        caption: "Một concept quảng cáo xuất đủ kích thước cho feed, story, Google Display và hero banner website."
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
    client: "Thương hiệu Racing apparel tại Mỹ (ẩn tên theo NDA)",
    role: "Brand Identity & Apparel Designer",
    tools: ["Adobe Illustrator", "Photoshop", "Wacom Tablet", "Banana Pro AI"],
    aiHighlights: [
      "Tạo sinh các mẫu hoa văn thuật toán (Generative speed patterns) thể hiện vận tốc và khói bụi đường đua",
      "Chắt lọc typography kim loại nặng, góc cạnh mang đậm tinh thần thể thao tốc độ",
      "Tự động hóa luồng mockup sản phẩm 3D áo khoác bomber, hoodie và nón snapback"
    ],
    coverImage: "/images/projects/racing-cover.svg",
    galleryImages: [
      {
        url: "/images/projects/racing-identity.svg",
        caption: "Hệ thống nhận diện: wordmark, bảng màu, typography và cách áp lên áo, nón, cốc, poster."
      },
      {
        url: "/images/projects/racing-aop.svg",
        caption: "Khung lưới All-Over-Print cho thân trước, thân sau và tay áo, có vùng bleed và safe zone theo từng size."
      }
    ],
    overview: "Dự án xây dựng trọn gói từ hệ thống nhận diện thương hiệu cốt lõi (Logo, Brand Guidelines, Typography) đến bộ sưu tập sản phẩm thời trang POD phục vụ người hâm mộ đua xe thể thao tại Mỹ.",
    challenge: "Khách hàng ngách thể thao tốc độ yêu cầu đồ họa phải toát lên năng lượng mạnh mẽ, gai góc và hiện đại. Việc dựng các mẫu in tràn viền 3D (All-Over-Print) yêu cầu sự chính xác tuyệt đối ở các đường may, khớp nối giữa thân áo và tay áo.",
    solution: "Tiểu Ngọc xây dựng khung lưới (grid template) riêng cho từng kích thước áo, sử dụng Illustrator để hoàn thiện vector chính xác đến từng mi-li-mét, kết hợp kỹ thuật gradient kim loại để tạo chiều sâu thị giác khi sản phẩm hiển thị trên màn hình quảng cáo trực tuyến.",
    results: [
      "Bàn giao trọn bộ nhận diện và dòng sản phẩm POD đồng bộ, sẵn sàng lên chiến dịch Meta Ads",
      "Khung lưới All-Over-Print theo từng size giúp hình in khớp đường may từ S đến 5XL",
      "Mockup 3D áo, hoodie và nón snapback xuất tự động bằng Photoshop Actions, rút ngắn khâu chuẩn bị ảnh quảng cáo"
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
    client: "Các thương hiệu POD tại Vani Ecommerce (US/EU)",
    role: "Visual Designer & Email Template Creator",
    tools: ["Adobe Photoshop", "Canva Pro", "Klaviyo", "HTML/CSS cơ bản"],
    aiHighlights: [
      "Ứng dụng AI tạo sinh các banner theo mùa (Black Friday, Halloween, Father's Day), rút ngắn thời gian lên ý tưởng",
      "Quy chuẩn hóa tỷ lệ typography và nút CTA để người dùng dễ thao tác trên màn hình điện thoại",
      "Tối ưu dung lượng hình ảnh dưới 200KB mà vẫn sắc nét, giúp email tải tức thì và không bị rơi vào hòm thư rác (Spam)"
    ],
    coverImage: "/images/projects/email-cover.svg",
    galleryImages: [
      {
        url: "/images/projects/email-flows.svg",
        caption: "Ba luồng email chính: Welcome Series, Abandoned Cart và Flash Sale theo mùa."
      },
      {
        url: "/images/projects/email-modules.svg",
        caption: "Thư viện khối mô-đun: hero, lưới sản phẩm, nút CTA, khối GIF và footer, ghép lại thành campaign mới."
      }
    ],
    overview: "Xây dựng hệ thống mẫu email marketing toàn diện trên nền tảng Klaviyo cho các nhãn hàng thời trang POD, từ chuỗi chào đón (Welcome Series), nhắc nhở giỏ hàng bị bỏ quên (Abandoned Cart) đến các đợt phát hành bộ sưu tập mới.",
    challenge: "Email thời trang thường bị rơi vào tab Khuyến mãi (Promotions) hoặc Spam nếu chứa quá nhiều ảnh nặng, trong khi phần lớn khách hàng US mở email trên điện thoại với thời gian lướt qua chỉ 3-5 giây.",
    solution: "Tiểu Ngọc thiết kế hệ thống layout dạng mô-đun (Modular blocks), kết hợp hài hòa giữa chữ và hình ảnh, giữ tỷ lệ dung lượng nhẹ tối đa và tạo điểm nhấn thị giác bằng các ảnh GIF động ngắn mô phỏng góc nhìn 360 độ của sản phẩm áo thun.",
    results: [
      "Đạt tỷ lệ mở trung bình (Average Open Rate) 28%, vượt trội so với mức chuẩn chung của ngành e-commerce là 21%",
      "Hệ thống 15+ mẫu email responsive dùng lại được cho Welcome, Abandoned Cart và Flash Sale theo mùa",
      "Dựng campaign mới bằng cách ghép khối có sẵn thay vì thiết kế lại từ đầu mỗi tuần"
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
      "Gói chuỗi thao tác lặp lại hằng ngày vào một phím tắt, designer chỉ cần bấm một lần cho cả quy trình xuất file"
    ],
    coverImage: "/images/projects/automation-cover.svg",
    galleryImages: [
      {
        url: "/images/projects/automation-script.svg",
        caption: "Actions panel và đoạn ExtendScript rút gọn: kiểm tra 300 DPI, ghép mockup 4 góc, đặt tên theo SKU."
      },
      {
        url: "/images/projects/automation-batch.svg",
        caption: "Trước và sau khi tự động hóa: tên file theo SKU và mockup 4 góc nhìn xuất cùng một lần chạy."
      }
    ],
    overview: "Để giải quyết áp lực tiến độ khi khối lượng file in mỗi tuần ngày càng lớn cho các chiến dịch bán hàng quốc tế, Tiểu Ngọc đã tự nghiên cứu và viết bộ kịch bản tự động hóa chuyên biệt cho Photoshop.",
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
