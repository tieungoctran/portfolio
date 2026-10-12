export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'AI & Product Design' | 'Generative AI & Branding' | 'UI/UX Design';
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
    slug: "aurora-ai-copilot",
    title: "Aurora — Nền tảng AI Copilot & Phân tích Dữ liệu Thông minh",
    subtitle: "Thiết kế giao diện tương tác Người - Máy (Human-AI Interaction) giúp chuyên viên tài chính truy vấn dữ liệu phức tạp bằng ngôn ngữ tự nhiên.",
    category: "AI & Product Design",
    year: "2024",
    client: "Aurora AI Intelligence",
    role: "Lead AI Product Designer (UX/UI, Conversational Patterns, Design System)",
    tools: ["Figma", "Claude 3.5 Sonnet", "v0.dev", "Tokens Studio", "Principle"],
    aiHighlights: [
      "Mô hình đối thoại đa phương thức (Multimodal Conversational UI)",
      "Thiết kế luồng trích dẫn nguồn dữ liệu (Source Citation) để minh bạch hóa suy luận của AI",
      "Xử lý trạng thái tải truyền dẫn trực tiếp (Streaming UI) và giải pháp khắc phục khi AI gặp ảo giác (Hallucination recovery)",
      "Gợi ý câu lệnh thông minh (Proactive Prompt Suggestions) theo ngữ cảnh người dùng"
    ],
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80",
        caption: "Bố cục Dark Mode tập trung cao độ, kết hợp thanh Copilot thông minh và bảng biểu dữ liệu động."
      },
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
        caption: "Trải nghiệm chuyển đổi tức thì từ câu hỏi tự nhiên sang biểu đồ trực quan hóa dữ liệu có thể tương tác."
      },
      {
        url: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1400&q=80",
        caption: "Bộ linh kiện Design System chuyên dụng cho các trạng thái phản hồi của AI: Suy nghĩ, Streaming, Cảnh báo độ tin cậy."
      }
    ],
    overview: "Aurora là nền tảng AI thế hệ mới được phát triển nhằm tự động hóa các thao tác xử lý dữ liệu phức tạp cho chuyên viên phân tích tài chính và nhà quản lý doanh nghiệp thông qua hội thoại ngôn ngữ tự nhiên.",
    challenge: "Thách thức lớn nhất trong trải nghiệm người dùng AI là 'Hộp đen' (Black box) và sự thiếu tin tưởng: Người dùng không biết AI đưa ra số liệu dựa trên cơ sở nào, dễ hoang mang khi AI sinh phản hồi chậm hoặc tạo thông tin sai lệch.",
    solution: "Tiểu Ngọc đã áp dụng hướng dẫn thiết kế Human-AI Interaction (HAII Guidelines): Tách bạch rõ các bước suy luận của mô hình (Chain-of-thought UI), bổ sung tính năng tra cứu nguồn dữ liệu gốc chỉ với 1 click, và thiết kế các micro-interactions cho phép người dùng can thiệp, chỉnh sửa dữ liệu tức thì (Human-in-the-loop).",
    results: [
      "Rút ngắn 68% thời gian phân tích báo cáo tài chính hàng quý",
      "Đạt điểm số hài lòng người dùng (CSAT) 94% về mức độ minh bạch của kết quả do AI trả về",
      "Tiết kiệm 40% thời gian triển khai của đội ngũ Front-end nhờ bản nguyên mẫu tương tác code bằng v0/React"
    ],
    prototypeUrl: "https://figma.com",
    behanceUrl: "https://behance.net",
    featured: true,
  },
  {
    id: "p2",
    slug: "synapse-genai-branding",
    title: "Synapse — Hệ thống Nhận diện Thương hiệu ứng dụng Generative AI",
    subtitle: "Tạo đột phá thị giác với quy trình kết hợp sáng tạo giữa thuật toán Generative AI (Adobe Firefly) và tư duy đồ họa kinh điển.",
    category: "Generative AI & Branding",
    year: "2024",
    client: "Synapse Creative Studio",
    role: "AI Creative Director & Visual Identity Designer",
    tools: ["Adobe Firefly", "Figma AI", "Adobe Illustrator", "Photoshop"],
    aiHighlights: [
      "Khai phá 500+ concept mỹ thuật siêu thực chỉ trong 48 giờ",
      "Xây dựng hệ thống phong cách thị giác độc bản theo chất liệu và bảng màu của thương hiệu",
      "Quy trình lai (Hybrid Creative Pipeline): AI sinh ý tưởng -> Designer chắt lọc và hoàn thiện vector thủ công"
    ],
    coverImage: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1400&q=80",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1400&q=80",
        caption: "Bản vẽ Key Visual đa chiều được tạo sinh bởi Generative AI và tinh chỉnh vector bằng Illustrator."
      },
      {
        url: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1400&q=80",
        caption: "Hệ thống bao bì thông minh với hoa văn thuật toán fractal độc bản cho từng dòng sản phẩm."
      },
      {
        url: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=1400&q=80",
        caption: "Cẩm nang thương hiệu (Brand Guideline) quy định chi tiết cách sử dụng AI Prompt để duy trì tính nhất quán thị giác."
      }
    ],
    overview: "Synapse mong muốn sở hữu một bộ nhận diện thương hiệu truyền tải thông điệp về sự kết nối giữa trí tuệ nhân tạo và tiềm năng vô hạn của tư duy con người.",
    challenge: "Làm sao để ứng dụng Generative AI tạo ra phong cách thị giác mang tính tiên phong, mới lạ nhưng không bị 'vô hồn' hoặc lẫn lộn với những hình ảnh AI đại trà trên mạng xã hội?",
    solution: "Tiểu Ngọc xây dựng quy trình sáng tạo kết hợp 3 bước: 1. Nghiên cứu ngữ cảnh & Prompt Engineering; 2. Tinh chỉnh phong cách nghệ thuật độc bản; 3. Hậu kỳ thủ công, cân chỉnh tỷ lệ vàng và thiết lập quy tắc typo kỷ luật, tạo nên một bộ nhận diện vừa đậm chất công nghệ vừa giàu cảm xúc con người.",
    results: [
      "Giúp khách hàng rút ngắn 60% thời gian giai đoạn Moodboarding & Concepting",
      "Tăng độ nhận diện thương hiệu lên 140% trên các nền tảng truyền thông số",
      "Được vinh danh trong danh mục Thiết kế Nhận diện sáng tạo của năm 2024"
    ],
    behanceUrl: "https://behance.net",
    featured: true,
  },
  {
    id: "p3",
    slug: "lumina-fintech-app",
    title: "Lumina — Ứng dụng Tài chính Cá nhân với Trợ lý Dự báo AI",
    subtitle: "Tối giản hóa quản lý dòng tiền với thuật toán học máy dự đoán xu hướng chi tiêu thông minh.",
    category: "UI/UX Design",
    year: "2023",
    client: "Lumina Labs",
    role: "Product Designer (Design System, AI Predictive UX)",
    tools: ["Figma", "FigJam", "Relume AI", "Protopie"],
    aiHighlights: [
      "Gợi ý ngân sách cá nhân hóa dựa trên phân tích hành vi chi tiêu",
      "Quét và phân loại hóa đơn tự động bằng AI Computer Vision",
      "Giao diện biểu đồ thích ứng thông minh (Adaptive charts)"
    ],
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
        caption: "Màn hình chính dự đoán điểm rủi ro tài chính của tuần kế tiếp."
      },
      {
        url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80",
        caption: "Trải nghiệm chụp hóa đơn và trích xuất số tiền trong chưa đầy 3 giây."
      }
    ],
    overview: "Lumina là ứng dụng quản lý tài chính thế hệ mới ứng dụng thuật toán học máy giúp người dùng chủ động kiểm soát chi tiêu trước khi bị thâm hụt ngân sách.",
    challenge: "Làm sao để hiển thị các dự báo thống kê từ thuật toán một cách trực quan, dễ hiểu mà không khiến người dùng cảm thấy bị phán xét hoặc hoang mang.",
    solution: "Thiết kế thẻ thông tin 'Nudging UX' tinh tế, chỉ đưa ra lời khuyên vào đúng thời điểm người dùng chuẩn bị đưa ra quyết định mua sắm lớn, đồng thời dùng các hình ảnh biểu tượng ấm áp thay cho những cảnh báo đỏ giật gân.",
    results: [
      "Tăng 42% tỷ lệ người dùng quay lại hàng tuần (Weekly Retention)",
      "Giảm thời gian ghi nhận 1 giao dịch từ 45 giây xuống còn 8 giây nhờ tính năng AI Smart Scan",
      "Được bình chọn trong Top ứng dụng phong cách sống tốt nhất năm"
    ],
    prototypeUrl: "https://figma.com",
    behanceUrl: "https://behance.net",
    featured: false,
  }
];
