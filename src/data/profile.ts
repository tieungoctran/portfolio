export type SocialIconName = 'linkedin' | 'behance' | 'substack' | 'pinterest';

export interface SocialLink {
  name: string;
  url: string;
  icon: SocialIconName;
  handle: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
  highlights?: string[];
}

export interface Education {
  period: string;
  degree: string;
  institution: string;
  description: string;
}

export interface LanguageSkill {
  language: string;
  level: string;
  detail: string;
}

export interface JobPreferences {
  status: string;
  targetRoles: string[];
  workModes: string[];
  availability: string;
  salaryExpectation: string;
}

export interface AiWorkflowStep {
  phase: string;
  title: string;
  tools: string[];
  description: string;
}

export interface AiPhilosophyPillar {
  title: string;
  subtitle: string;
  description: string;
}

export interface AiPhilosophy {
  badge: string;
  headline: string;
  coreBelief: string;
  ratio: string;
  pillars: AiPhilosophyPillar[];
}

export interface ProfileData {
  name: string;
  birthYear: number;
  zodiac: string;
  role: string;
  subRole: string;
  tagline: string;
  avatarUrl: string;
  bio: string[];
  philosophy: string;
  aiPhilosophy: AiPhilosophy;
  location: string;
  phone: string;
  phoneInternational: string;
  email: string;
  website: string;
  cvRequestUrl: string;
  recruiterPitch: string;
  jobPreferences: JobPreferences;
  socials: SocialLink[];
  skillCategories: SkillCategory[];
  softSkills: string[];
  languages: LanguageSkill[];
  aiTools: {
    category: string;
    tools: string[];
  }[];
  aiWorkflow: AiWorkflowStep[];
  experiences: Experience[];
  educations: Education[];
}

export const profileData: ProfileData = {
  name: "Trần Tiểu Ngọc",
  birthYear: 2000,
  zodiac: "Cung Song Ngư (Pisces) ♓",
  role: "Senior Graphic Designer (E-commerce)",
  subRole: "Chuyên viên Thiết kế Đồ họa TMĐT · Sản phẩm Print-on-Demand (POD) · Banner Facebook & Google Ads · Banner Website & Email · Mockup 2D/3D · Tự động hóa Photoshop",
  tagline: "Dùng AI có gu, tạo sản phẩm có hồn, không rập khuôn. AI with taste, design with soul. Never AI slop.",
  avatarUrl: "/images/avatar.jpg",
  recruiterPitch: "Bạn đang tìm kiếm một Senior Graphic Designer chuyên mảng E-commerce có gu thẩm mỹ rõ ràng, thiết kế từ sản phẩm in ấn đến banner quảng cáo Facebook/Google Ads, kiểm soát chất lượng in chuẩn xưởng (<0.4% lỗi) và tự viết Photoshop Actions & Scripts giúp giảm ~40% thời gian sản xuất? Hãy kết nối với Tiểu Ngọc ngay nhé!",
  jobPreferences: {
    status: "Open to Work • Toàn thời gian tại TP. Hồ Chí Minh",
    targetRoles: [
      "Senior Graphic Designer (E-commerce Design)",
      "Product / POD & Marketing Visual Designer",
      "Brand & E-commerce Graphic Designer"
    ],
    workModes: [
      "Toàn thời gian (Full-time tại TP. Hồ Chí Minh)",
      "Hybrid / Remote cho đội ngũ E-commerce & D2C",
      "Freelance Thiết kế & Tự động hóa Photoshop Scripts"
    ],
    availability: "Sẵn sàng nhận việc trong vòng 2–4 tuần (linh hoạt trao đổi khi phỏng vấn)",
    salaryExpectation: "Mong muốn 15–20 triệu VNĐ/tháng"
  },
  bio: [
    "Xin chào! Mình là Tiểu Ngọc, một Senior Graphic Designer sinh năm 2000, tốt nghiệp Cử nhân Thiết kế Đồ họa và Truyền thông tại Trường Đại học Công nghệ Kỹ thuật TP.HCM (HCMUTE). Mình mang tâm hồn giàu cảm xúc của cung Song Ngư nhưng luôn hướng tới hiệu quả thực tế: một thiết kế E-commerce tốt phải làm được hai việc cùng lúc: vừa đẹp, vừa bán được hàng.",
    "Hơn 4 năm gắn bó toàn thời gian tại Vani Ecommerce (từ 08/2022 đến nay), mình đã trực tiếp thiết kế hơn 5,000+ sản phẩm in ấn (POD) cùng toàn bộ hình ảnh bán hàng đi kèm (banner quảng cáo Facebook Ads, Google Ads, banner website, header email Klaviyo và mockup 2D/3D) cho khách hàng Mỹ (US) và Châu Âu (EU). Trong Q3–Q4/2025, mình phụ trách toàn bộ thiết kế cho Dự án D2C gồm 3 thương hiệu E-commerce từ sản phẩm đến quảng cáo, cùng team khép lại Q4/2025 với khoảng $25,000 USD lợi nhuận.",
    "Điểm khác biệt trong cách mình làm việc là phương châm: 'Dùng AI có gu, tạo sản phẩm có hồn, không rập khuôn' (AI with taste, design with soul. Never AI slop). Mình ứng dụng các công cụ AI (Adobe Firefly, ChatGPT Image, Claude, Gemini, AI Agent) để tìm ý tưởng nhanh gấp 3 lần và tự xây dựng Photoshop Actions (.atn) & JS Scripts (.jsx) để cắt giảm ~40% thời gian xử lý việc lặp lại cho cả team, nhưng mọi sản phẩm cuối cùng đều được hoàn thiện thủ công bằng bảng vẽ Wacom và kiểm soát màu in CMYK 300 DPI chuẩn xưởng."
  ],
  philosophy: "Dùng AI có gu, tạo sản phẩm có hồn, không rập khuôn. AI with taste, design with soul. Never AI slop.",
  aiPhilosophy: {
    badge: "Quy trình Làm nghề • Con người dẫn dắt, AI tăng tốc",
    headline: "Dùng AI có gu, tạo sản phẩm có hồn, không rập khuôn.",
    coreBelief: "Con người sẽ luôn có gu thẩm mỹ riêng cho từng insight khách hàng, bởi chỉ có con người mới thực sự thấu hiểu góc nhìn, tâm tư và sự rung động của con người sâu sắc hơn bất kỳ thuật toán AI nào.",
    ratio: "Human-Crafted, AI-Accelerated • AI with taste, design with soul. Never AI slop.",
    pillars: [
      {
        title: "01. Gu thẩm mỹ riêng & Sự thấu cảm con người",
        subtitle: "Human-to-Human Insight vs. 'AI Slop'",
        description: "AI chỉ biết tổng hợp dữ liệu quá khứ nên rất dễ tạo ra những hình ảnh đại trà, vô hồn. Khách hàng chọn mua một sản phẩm không phải vì thuật toán, mà vì họ tìm thấy câu chuyện và cá tính của chính mình trong từng nét vẽ. Chỉ có con người mới hiểu góc nhìn của con người để tạo ra sản phẩm có hồn."
      },
      {
        title: "02. Làm chủ công cụ, hoàn thiện bằng đôi tay Designer",
        subtitle: "Intentional Craftsmanship & Wacom Precision",
        description: "Người Designer điều khiển công cụ chứ không để AI quyết định thẩm mỹ. Sự nhạy cảm và tỉ mỉ giúp Tiểu Ngọc biết chính xác khi nào dùng AI để lên moodboard nhanh, và khi nào tự tay vẽ từng chi tiết trên bảng vẽ Wacom, căn chỉnh Typography và bố cục thị giác."
      },
      {
        title: "03. Tự động hóa việc lặp lại & Chuẩn mực In ấn",
        subtitle: "Photoshop Automation (-40% Time) & Print QC (<0.4% Defect)",
        description: "Mọi thao tác lặp đi lặp lại như ghép mockup 2D/3D, xuất file in 300 DPI và đặt tên theo SKU đều được tự động hóa bằng Photoshop Actions (.atn) & Scripts (.jsx) tự viết. Khâu tách màu CMYK / Halftone DTG được kiểm soát chặt chẽ để giữ tỷ lệ hoàn trả do lỗi in dưới 0.4%."
      }
    ]
  },
  location: "Thủ Đức, TP. Hồ Chí Minh, Việt Nam",
  phone: "0393 258 ###",
  phoneInternational: "+84 393 258 ###",
  email: "ngoctt.design@gmail.com",
  website: "https://tieungoc.site",
  // CV is shared by email on request to keep personal contact details off the public site
  cvRequestUrl: "mailto:ngoctt.design@gmail.com?subject=Xin%20CV%20Tr%E1%BA%A7n%20Ti%E1%BB%83u%20Ng%E1%BB%8Dc",
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tieungoc-design",
      icon: "linkedin",
      handle: "@tieungoc-design",
    },
    {
      name: "Behance",
      url: "https://www.behance.net/tieungoctran",
      icon: "behance",
      handle: "@tieungoctran",
    },
    {
      name: "Substack",
      url: "https://tieungoc.substack.com/",
      icon: "substack",
      handle: "tieungoc.substack.com",
    },
    {
      name: "Pinterest",
      url: "https://www.pinterest.com/tieungoc_design",
      icon: "pinterest",
      handle: "@tieungoc_design",
    },
  ],
  skillCategories: [
    {
      title: "Thiết kế E-commerce, Sản phẩm In ấn (POD), Banner Ads & Mockup 2D/3D",
      skills: [
        "Thiết kế sản phẩm in ấn (POD, 5,000+ sản phẩm): T-shirt, áo, quần, mũ, cốc, giày, thảm, home & living, poster cho thị trường US/EU",
        "Thiết kế Banner quảng cáo chuyển đổi: Facebook Ads, Google Ads, Banner Website & Header Email đồng bộ theo chiến dịch",
        "Phối cảnh Mockup 2D/3D & POSM: Ghép mockup sản phẩm chân thực, Displacement Map, Poster, Standee, Banner, Voucher & Bao bì",
        "Vẽ minh họa kỹ thuật số trên bảng vẽ Wacom Tablet: Line-art, Character/Mascot & hoàn thiện chi tiết thủ công độc bản",
        "Chế bản & Kiểm soát chất lượng in ấn (Print QC): Hệ màu CMYK / RGB 300 DPI, tách lớp Halftone DTG & All-Over-Print (tỷ lệ lỗi <0.4%)",
        "Hỗ trợ thiết kế bộ nhận diện thương hiệu (Logo, bảng màu, Typography) & dàn trang Banner Web/App trên Figma"
      ]
    },
    {
      title: "Thiết kế Ứng dụng AI, Tự động hóa Photoshop & Đa nền tảng E-commerce",
      skills: [
        "Tự động hóa Photoshop: Tự xây dựng Actions (.atn) & JavaScript Scripts (.jsx) giúp giảm ~40% thời gian sản xuất và 99% lỗi đặt tên file theo SKU",
        "Thiết kế ứng dụng AI có chọn lọc: Adobe Firefly, ChatGPT Image, Claude, Gemini, AI Agent, Generative Fill, FLUX.1, Banana Pro (Nhanh gấp 3 lần, không rập khuôn)",
        "Email Marketing & Giữ chân khách hàng: Xây dựng 15+ mẫu email Klaviyo đạt tỷ lệ mở trung bình 28% (cao hơn mức chuẩn 21% của ngành)",
        "Biên tập Video ngắn & Ấn phẩm động: CapCut Pro, Canva Pro, Topview AI & GIF Animation cho chiến dịch quảng cáo đa kênh",
        "Nền tảng E-commerce thực chiến: Thiết kế tối ưu hiển thị và chuyển đổi trên Shopify, WooCommerce, Etsy, Amazon & Klaviyo"
      ]
    },
  ],
  softSkills: [
    "Có gu thẩm mỹ rõ ràng & Thấu cảm insight khách hàng",
    "Tỉ mỉ từng pixel & Kiểm soát chất lượng đầu ra khắt khe",
    "Ứng dụng AI có chọn lọc, tạo sản phẩm có hồn, không rập khuôn",
    "Cam kết đúng deadline trong các mùa sale cao điểm Q3–Q4",
    "Phối hợp nhịp nhàng cùng team D2C, Marketing & Media Buyer",
    "Tư duy tối ưu quy trình & Tự động hóa việc lặp lại bằng Action/Script"
  ],
  languages: [
    {
      language: "Tiếng Việt",
      level: "Bản ngữ (Native)",
      detail: "Diễn đạt, storytelling và phối hợp công việc chuyên sâu cùng đội ngũ nội bộ"
    },
    {
      language: "Tiếng Anh",
      level: "Đọc hiểu & Xử lý Công việc Chuyên ngành",
      detail: "Đọc hiểu tốt tài liệu, design brief tiếng Anh, nghiên cứu xu hướng/slang US-EU, thiết kế Typography tiếng Anh và viết prompt AI phục vụ công việc (không thiên về giao tiếp nói)"
    },
    {
      language: "Tiếng Trung",
      level: "Cơ bản (Elementary)",
      detail: "Đọc hiểu từ vựng cơ bản và tra cứu nguồn tài nguyên thiết kế"
    }
  ],
  aiTools: [
    {
      category: "Thiết kế & Chế bản In",
      tools: [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Bảng vẽ Wacom",
        "Canva Pro",
        "CapCut Pro",
        "Figma",
        "CMYK / RGB 300 DPI"
      ]
    },
    {
      category: "AI (Chọn lọc & Có gu)",
      tools: [
        "Adobe Firefly",
        "ChatGPT Image",
        "Claude",
        "Gemini",
        "AI Agent",
        "Generative Fill",
        "FLUX.1 & Banana Pro"
      ]
    },
    {
      category: "Tự động hóa Quy trình",
      tools: [
        "PS Scripts (.jsx)",
        "Photoshop Actions (.atn)",
        "Batch Mockups",
        "Auto SKU File System"
      ]
    },
    {
      category: "Nền tảng E-commerce",
      tools: [
        "Shopify",
        "WooCommerce",
        "Etsy",
        "Amazon",
        "Klaviyo",
        "Topview AI"
      ]
    }
  ],
  aiWorkflow: [
    {
      phase: "01. Insight & Trend",
      title: "Nghiên cứu Khách hàng & Xu hướng",
      tools: ["ChatGPT / Claude", "Pinterest", "Market Research"],
      description: "Nghiên cứu khách hàng, văn hóa và xu hướng thị trường US/EU/VN. Dùng AI hỗ trợ tổng hợp nhanh dữ liệu nhưng chọn lọc concept bằng trực giác và gu thẩm mỹ của người thiết kế."
    },
    {
      phase: "02. Ý tưởng cùng AI",
      title: "AI Ideation (Có Chọn Lọc)",
      tools: ["Adobe Firefly", "ChatGPT Image", "Gemini", "FLUX.1"],
      description: "Tạo nhanh moodboard, thử nghiệm biến thể ánh sáng và bố cục cho sản phẩm & banner quảng cáo. Chọn lọc khắt khe bằng gu thẩm mỹ để không bao giờ tạo ra sản phẩm rập khuôn."
    },
    {
      phase: "03. Đôi tay Designer",
      title: "Human Craft, Wacom & Print QC",
      tools: ["Wacom Tablet", "Photoshop", "Illustrator", "CMYK 300 DPI"],
      description: "Hoàn thiện thủ công từng sản phẩm bằng bảng vẽ Wacom, căn chỉnh Typography chuẩn xác và kiểm soát tách màu in CMYK / Halftone DTG để giữ tỷ lệ lỗi in dưới 0.4%."
    },
    {
      phase: "04. Tự động hóa",
      title: "Actions & Scripts Hàng Loạt",
      tools: ["PS Scripts (.jsx)", "Actions (.atn)", "Batch Mockups"],
      description: "Đưa Photoshop Actions và Script tự viết vào xử lý các thao tác lặp lại: ghép mockup 2D/3D, xuất file in 300 DPI và đặt tên theo SKU, giúp giảm ~40% thời gian sản xuất cho cả team."
    }
  ],
  experiences: [
    {
      period: "08/2022 – Hiện tại (4+ năm)",
      role: "Senior Graphic Designer (E-commerce)",
      company: "Vani Ecommerce · Toàn thời gian · TP. Hồ Chí Minh",
      description: "Chuyên thiết kế sản phẩm in ấn (POD), banner quảng cáo Facebook Ads & Google Ads, banner website, email Klaviyo và mockup 2D/3D cho thị trường Mỹ (US) và Châu Âu (EU). Áp dụng quy trình 'Con người dẫn dắt, AI tăng tốc': dùng AI có gu kết hợp hoàn thiện thủ công trên Wacom và tự động hóa Photoshop để làm nhanh mà vẫn giữ chất lượng.",
      highlights: [
        "Thiết kế 5,000+ sản phẩm in ấn (POD) cho các niche Anime, Racing, Sport, Music trên nhiều dòng sản phẩm: quần áo, mũ, cốc, giày, thảm, home & living, poster, banner và cover email.",
        "Dự án D2C: 3 thương hiệu E-commerce (Q3–Q4/2025): Phụ trách toàn bộ thiết kế cho 3 thương hiệu, phối hợp cùng team D2C từ sản phẩm in ấn đến visual marketing (banner website, header email Klaviyo, Google Ads & Facebook Ads), đóng góp vào kết quả ~$25,000 USD lợi nhuận team D2C trong Q4/2025.",
        "Tự xây dựng Photoshop Actions (.atn) và Script (.jsx) để tự động hóa việc lặp lại: ghép mockup 2D/3D, xuất file in 300 DPI, đặt tên file theo SKU, giúp giảm ~40% thời gian sản xuất và 99% lỗi đặt tên file cho toàn team.",
        "Ứng dụng AI (Adobe Firefly, ChatGPT Image, Gemini, Claude, AI Agent) vào khâu ý tưởng và visual quảng cáo, sau đó hoàn thiện thủ công từng sản phẩm, tăng tốc độ đầu ra gấp 3 lần mà vẫn độc bản và an toàn bản quyền.",
        "Kiểm soát chất lượng in cho áo, POSM và merchandise (CMYK/RGB 300 DPI, tách Halftone cho DTG & All-Over-Print), giữ tỷ lệ hoàn trả do lỗi in dưới 0.4%.",
        "Xây dựng 15+ mẫu email Klaviyo đạt tỷ lệ mở trung bình 28% (cao hơn chuẩn ngành 21%) và hỗ trợ xây dựng bộ nhận diện thương hiệu (logo, bảng màu, typography)."
      ]
    }
  ],
  educations: [
    {
      period: "2018 – 2022",
      degree: "Cử nhân Thiết kế Đồ họa và Truyền thông",
      institution: "Trường Đại học Công nghệ Kỹ thuật TP.HCM (HCMUTE)",
      description: "Đào tạo bài bản về Mỹ thuật ứng dụng, Lý thuyết màu sắc (Color Theory), Nghệ thuật chữ (Typography), Thiết kế nhận diện thương hiệu, Kỹ thuật chế bản in ấn và Truyền thông đa phương tiện."
    }
  ]
};
