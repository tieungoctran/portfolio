export interface SocialLink {
  name: string;
  url: string;
  icon: string;
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
  nickname: string;
  birthYear: number;
  zodiac: string;
  role: string;
  subRole: string;
  tagline: string;
  avatarUrl: string;
  petsUrl: string;
  petsBio: string;
  bio: string[];
  philosophy: string;
  aiPhilosophy: AiPhilosophy;
  location: string;
  phone: string;
  phoneInternational: string;
  email: string;
  website: string;
  resumeUrl: string;
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
  nickname: "Mắt Gấu 🐻",
  birthYear: 2000,
  zodiac: "Cung Song Ngư (Pisces) ♓",
  role: "Senior Graphic Designer — Brand & E-commerce Visual | AI-Powered Workflow",
  subRole: "Brand Identity, E-commerce & Omnichannel Campaign Visuals, Quy trình đồ họa AI-First tăng tốc bằng Scripting Tự động",
  tagline: "Cô gái Song Ngư thiết kế bằng trực giác thẩm mỹ sắc bén, thấu cảm sâu sắc insight khách hàng và nhân bội năng suất bằng AI & Scripting tự động.",
  avatarUrl: "/images/avatar.jpg",
  petsUrl: "/images/pets.jpg",
  petsBio: "Người bạn bốn chân trung thành và là nguồn năng lượng chữa lành của Tiểu Ngọc sau những giờ tập trung vẽ Wacom và canh màu in ấn.",
  recruiterPitch: "Bạn đang tìm kiếm một Senior Graphic Designer có gu thẩm mỹ sắc bén cho Brand & E-commerce Visual, làm chủ kỹ thuật chế bản in ấn chuẩn xưởng (<0.4% lỗi) và biết điều khiển AI kết hợp Automation để tối ưu 40% thời gian sản xuất mà không tạo ra 'AI slop'? Hãy kết nối với Tiểu Ngọc ngay nhé!",
  jobPreferences: {
    status: "Open to Work • Sẵn sàng nhận lời mời phỏng vấn",
    targetRoles: [
      "Senior Graphic Designer (Brand & E-commerce Visual)",
      "Brand & Creative Marketing Designer",
      "AI-Powered Creative Specialist / DesignOps"
    ],
    workModes: [
      "Full-time On-site / Hybrid (TP. Hồ Chí Minh)",
      "Remote Global (US / EU / APAC Brands & Agencies)",
      "Freelance & Tư vấn Tự động hóa Quy trình Thiết kế"
    ],
    availability: "Sẵn sàng nhận việc trong vòng 2–4 tuần (linh hoạt trao đổi khi phỏng vấn)",
    salaryExpectation: "Thỏa thuận theo năng lực (Negotiable)"
  },
  bio: [
    "Xin chào! Mình là Tiểu Ngọc (mọi người hay gọi mình là Mắt Gấu 🐻), một Senior Graphic Designer sinh năm 2000, tốt nghiệp chuyên ngành Thiết kế Đồ họa và Truyền thông tại Trường Đại học Công nghệ Kỹ thuật TP.HCM (HCMUTE). Mình mang tâm hồn giàu cảm xúc của cung Song Ngư nhưng lại cực kỳ thực tế khi đối diện với các chỉ số chuyển đổi thương hiệu và doanh thu thương mại điện tử.",
    "Hơn 4 năm gắn bó toàn thời gian tại Vani Ecommerce (từ 08/2022 đến nay), mình đã trực tiếp thiết kế hơn 3500+ sản phẩm thương mại và ấn phẩm chiến dịch Brand & E-commerce Visual đa kênh phục vụ thị trường quốc tế (US, EU) và Việt Nam. Mình từng chủ trì thiết kế bộ sưu tập thời trang Anime đạt doanh thu hơn $20,000 USD chỉ trong một quý (Q4/2025).",
    "Mình luôn tâm niệm: AI không bao giờ có thể thay thế hoàn toàn người Designer, bởi con người có gu thẩm mỹ riêng cho từng insight khách hàng và chỉ có con người mới thực sự thấu hiểu góc nhìn của con người. Mình dùng AI (Adobe Firefly, Generative Fill, FLUX.1, Banana Pro, Topview AI) và Photoshop JS Scripts như một động cơ trợ lực giúp tăng tốc khâu ý tưởng gấp 3 lần và giảm 40% thời gian xuất file, nhưng chính đôi tay vẽ Wacom, sự cầu toàn trong từng nét chữ và kỹ thuật tách màu in ấn chuẩn xưởng mới là linh hồn tạo nên sản phẩm triệu view."
  ],
  philosophy: "AI là động cơ tăng tốc 3× ở khâu ý tưởng, nhưng gu thẩm mỹ riêng cho từng insight khách hàng, sự thấu cảm giữa con người với con người và kỹ thuật chế bản chuẩn xưởng mới là thứ tạo ra chiến dịch thương hiệu $20,000+ doanh thu.",
  aiPhilosophy: {
    badge: "Triết lý Làm nghề • Human-Crafted, AI-Accelerated",
    headline: "Vì sao AI không thể thay thế hoàn toàn người Thiết kế?",
    coreBelief: "Con người sẽ luôn có gu thẩm mỹ riêng cho từng insight khách hàng — bởi chỉ có con người mới thực sự thấu hiểu góc nhìn, tâm tư và sự rung động của con người sâu sắc hơn bất kỳ thuật toán AI nào.",
    ratio: "30% AI & Automation Trợ Lực Tốc Độ — 70% Tư Duy, Đôi Tay & Gu Thẩm Mỹ Con Người Quyết Định",
    pillars: [
      {
        title: "01. Gu thẩm mỹ riêng & Sự thấu cảm con người",
        subtitle: "Human-to-Human Insight vs. 'AI Slop'",
        description: "AI chỉ biết tổng hợp dữ liệu quá khứ nên rất dễ tạo ra những hình ảnh trung bình cộng vô hồn. Khách hàng yêu thích một thương hiệu không phải vì thuật toán, mà vì họ tìm thấy câu chuyện và cá tính của chính mình trong từng nét vẽ. Chỉ có con người mới hiểu góc nhìn của con người để tạo ra xu hướng mới từ sự rung động thật."
      },
      {
        title: "02. Làm chủ công cụ, không để công cụ dẫn dắt",
        subtitle: "Intentional Craftsmanship & Wacom Precision",
        description: "Người Designer điều khiển công cụ chứ không để AI quyết định thẩm mỹ. Sự nhạy cảm và cầu toàn của một cô gái Song Ngư giúp Tiểu Ngọc biết chính xác khi nào cần dừng AI lại để tự tay vẽ từng lọn tóc, ánh mắt nhân vật trên bảng vẽ Wacom, tinh chỉnh từng khoảng cách chữ (kerning) và bố cục thị giác."
      },
      {
        title: "03. Chuẩn mực Chế bản In ấn & An toàn Bản quyền",
        subtitle: "Physical Print QC (<0.4% Defect) & DMCA Safety",
        description: "Một bức ảnh trông bắt mắt trên màn hình AI khác hoàn toàn một file in thương mại 300 DPI. AI không thể tự tách layer (Line-art, Base color, Halftone), không thể kiểm soát độ sụt màu CMYK trên các chất liệu thực tế hay dựng chuẩn kích thước POSM để cam kết tỷ lệ lỗi in dưới 0.4% và bảo vệ thương hiệu khỏi rủi ro bản quyền."
      }
    ]
  },
  location: "Thủ Đức, TP. Hồ Chí Minh, Việt Nam",
  phone: "0393 258 ###",
  phoneInternational: "+84 393 258 ###",
  email: "ngoctt.design@gmail.com",
  website: "https://tieungoc.site",
  resumeUrl: "/Tran-Tieu-Ngoc-Resume.pdf",
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
      icon: "palette",
      handle: "@tieungoctran",
    },
    {
      name: "Substack",
      url: "https://tieungoc.substack.com/",
      icon: "bookmark",
      handle: "tieungoc.substack.com",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/trantieungoc.matgau",
      icon: "facebook",
      handle: "@trantieungoc.matgau",
    },
    {
      name: "Pinterest",
      url: "https://www.pinterest.com/tieungoc_design",
      icon: "pin",
      handle: "@tieungoc_design",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@tran.tieungoc",
      icon: "youtube",
      handle: "@tran.tieungoc",
    },
  ],
  skillCategories: [
    {
      title: "Hard Skills, Brand Visual, POSM/Print & Phối cảnh 2D/3D",
      skills: [
        "Adobe Photoshop (90%) & Adobe Illustrator (75%) — Chế bản, Key Visual & Vector",
        "Brand & E-commerce Visual / POSM Print (90%) — Key Visuals, Poster, Standee, Banner OOH, Brochure, Voucher, Packaging, Apparel 2D/3D",
        "Phối cảnh Mockup 2D/3D chuyên nghiệp — Gian hàng sự kiện, vật phẩm thương hiệu (Merchandise) & Displacement Map",
        "Wacom Tablet Digital Illustration (85%) — Vẽ tay chi tiết cao, Mascot/Character & Line-art độc bản",
        "Color Separation & Print QC (CMYK / RGB 300 DPI, Halftone — Tỷ lệ lỗi <0.4%) & Product Photography Art Direction",
        "Brand Identity Design (80%) & UI/UX Wireframing, App/Web Banner trên Figma / HTML-CSS (65%)"
      ]
    },
    {
      title: "AI-First Workflow 2026, Video Marketing & Tự động hóa (DesignOps)",
      skills: [
        "Photoshop Actions (.atn) & JavaScript Scripts (.jsx) (85% — Giảm 40% thời gian sản xuất hàng loạt)",
        "Hệ sinh thái AI Visual 2026 (85%) — Adobe Firefly, Generative Fill, FLUX.1, Banana Pro, AI Upscaling 300 DPI",
        "AI Research & Prompting — ChatGPT, Claude (Phân tích insight văn hóa & hỗ trợ lên Moodboard x3 tốc độ)",
        "Short-form Video Ads & GIF Animation (80%) — CapCut Pro, Motion cơ bản, Topview AI, Canva Pro",
        "E-commerce & Retention Visuals (80%) — Klaviyo Email Marketing (28% Open Rate), App Notification Banner, Shopify"
      ]
    },
  ],
  softSkills: [
    "Thấu cảm sâu sắc insight khách hàng & Gu thẩm mỹ định hướng con người (Human-Centric Aesthetic)",
    "Tư duy phản biện & Tỉ mỉ chi tiết (Critical Thinking & High Attention to Detail)",
    "Làm chủ công cụ AI có chọn lọc, chống 'AI Slop' (Curated AI Direction)",
    "Thực thi tốc độ cao & Cam kết tiến độ mùa cao điểm Q4 (Fast & Deadline-driven)",
    "Phối hợp đa phòng ban Marketing & E-commerce (Cross-functional Collaboration)",
    "Tự học công nghệ & Tư duy hệ thống hóa quy trình (Self-learning & DesignOps)"
  ],
  languages: [
    {
      language: "Tiếng Việt",
      level: "Bản ngữ (Native)",
      detail: "Diễn đạt, storytelling và trình bày ý tưởng thiết kế chuyên sâu"
    },
    {
      language: "Tiếng Anh",
      level: "Đọc hiểu & Nghiên cứu Chuyên ngành (Working Proficiency in Design & AI Prompting)",
      detail: "Thành thạo đọc brief quốc tế, nghiên cứu văn hóa/slang US-EU, thiết kế Typography tiếng Anh và viết AI Prompts chuyên sâu"
    },
    {
      language: "Tiếng Trung",
      level: "Giao tiếp cơ bản (Elementary)",
      detail: "Đọc hiểu từ vựng cơ bản và tra cứu nguồn tài nguyên thiết kế"
    }
  ],
  aiTools: [
    {
      category: "Đồ họa Cốt lõi & Chế bản In",
      tools: [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Bảng vẽ Wacom",
        "Displacement Map",
        "CMYK / RGB 300 DPI"
      ]
    },
    {
      category: "AI Tạo sinh & Nâng cấp Chi tiết",
      tools: [
        "Adobe Firefly",
        "Photoshop Generative Fill",
        "FLUX.1",
        "Banana Pro",
        "Topaz / Magnific / Upscayl",
        "ChatGPT & Claude"
      ]
    },
    {
      category: "Tự động hóa Quy trình (DesignOps)",
      tools: [
        "PS JavaScript Scripts (.jsx)",
        "Photoshop Actions (.atn)",
        "Batch Mockup Generator",
        "Auto SKU File System"
      ]
    },
    {
      category: "Video AI, E-commerce & Quản lý",
      tools: [
        "Topview AI",
        "CapCut Pro",
        "Canva Pro",
        "Klaviyo Email",
        "Shopify",
        "Figma",
        "Notion / Trello / Lark"
      ]
    }
  ],
  aiWorkflow: [
    {
      phase: "01. Thấu cảm Insight & Bắt Trend",
      title: "Human Insight & Trend Research",
      tools: ["ChatGPT / Claude", "Pinterest", "TikTok Trends"],
      description: "Đặt mình vào góc nhìn của khách hàng để thấu hiểu văn hóa thị giác. Dùng AI hỗ trợ phân tích từ khóa, nhưng chọn lọc concept bằng trực giác và gu thẩm mỹ riêng của người thiết kế."
    },
    {
      phase: "02. Khám phá Thị giác cùng AI (30%)",
      title: "AI-Augmented Visual Ideation",
      tools: ["Adobe Firefly", "Generative Fill", "FLUX.1", "Banana Pro"],
      description: "Thử nghiệm nhanh hàng chục biến thể ánh sáng, chất liệu và bố cục bằng AI, rút ngắn thời gian moodboarding từ vài ngày xuống vài giờ mà không bị phụ thuộc rập khuôn vào máy móc."
    },
    {
      phase: "03. Vẽ tay Wacom & Chế bản (70%)",
      title: "Human Craft, Wacom & Print QC",
      tools: ["Wacom Tablet", "Illustrator", "Photoshop", "AI Upscaling"],
      description: "Khâu quyết định mà AI không thể thay thế: Vẽ tay chi tiết bằng Wacom để tạo hồn riêng, căn chỉnh Typography chuẩn xác, nâng cấp 300 DPI và tách lớp màu CMYK / RGB chuẩn in ấn (tỷ lệ lỗi <0.4%)."
    },
    {
      phase: "04. Tự động hóa Mockup & Video Ads",
      title: "Scripting & Multi-Channel Output",
      tools: ["PS Scripts (.jsx)", "Topview AI", "CapCut Pro", "Canva Pro"],
      description: "Chạy script tự động ghép hàng loạt mockup 2D/3D chân thực và sản xuất nhanh ấn phẩm quảng cáo / video thương mại đa kênh bằng Topview AI, CapCut Pro và Canva Pro."
    }
  ],
  experiences: [
    {
      period: "08/2022 — Hiện tại (4+ năm)",
      role: "Senior Graphic Designer — Brand & E-commerce Visual",
      company: "Vani Ecommerce · Toàn thời gian",
      description: "Chủ trì thiết kế 3500+ sản phẩm thương mại và ấn phẩm truyền thông Brand & E-commerce Visual đa kênh (Key Visuals, Social Ads, POSM, Posters, Banners, Apparel & Merchandise) cho thị trường quốc tế (US/EU). Áp dụng triết lý 'Human-Crafted, AI-Accelerated': lấy gu thẩm mỹ con người và nét vẽ Wacom làm cốt lõi (70%), kết hợp AI và Photoshop Scripts làm động cơ tăng tốc (30%).",
      highlights: [
        "Đạt mốc doanh thu $20,000+ USD chỉ trong một quý (Q4/2025) từ bộ sưu tập 50+ thiết kế chủ đề Anime thông qua việc thấu hiểu sâu sắc insight khách hàng, vẽ tay Wacom chi tiết cao và kỹ thuật chế bản in ấn chuẩn 300 DPI.",
        "Cắt giảm ~40% thời gian sản xuất và ghép phối cảnh mockup 2D/3D hàng loạt cho hơn 3,500+ mã sản phẩm (SKUs) bằng cách tự lập trình hệ thống Photoshop Actions (.atn) và JavaScript Scripts (.jsx), giảm 99% sai sót mã file nhà in.",
        "Tăng tốc độ lên ý tưởng và sản xuất visual/video quảng cáo gấp 3 lần nhờ kết hợp có chọn lọc hệ sinh thái AI & Creative Tools (Adobe Firefly, Generative Fill, FLUX.1, Banana Pro, Topview AI, CapCut Pro, Canva Pro) mà vẫn giữ trọn tính độc bản.",
        "Kiểm soát chất lượng chế bản in ấn chuẩn xưởng (CMYK/RGB 300 DPI, POSM & Merchandise), duy trì tỷ lệ hoàn trả sản phẩm do lỗi in ấn ở mức cực thấp dưới 0.4%.",
        "Xây dựng trọn bộ hệ thống nhận diện thương hiệu (Logo, Color Palette, Typography Guidelines, Figma Banners) và thiết kế 15+ mẫu email marketing Klaviyo chuẩn responsive đạt tỷ lệ mở trung bình 28% (vượt mức chuẩn 21% của ngành e-commerce)."
      ]
    }
  ],
  educations: [
    {
      period: "2018 — 2022",
      degree: "Cử nhân Thiết kế Đồ họa và Truyền thông",
      institution: "Trường Đại học Công nghệ Kỹ thuật TP.HCM (HCMUTE)",
      description: "Đào tạo bài bản về Mỹ thuật ứng dụng, Lý thuyết màu sắc (Color Theory), Nghệ thuật chữ (Typography), Thiết kế nhận diện thương hiệu, Kỹ thuật chế bản in ấn và Truyền thông đa phương tiện."
    }
  ]
};
