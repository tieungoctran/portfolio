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
  // Split of work shown on the About page: what AI or scripts handle vs. what the designer decides
  aiRole: string;
  humanRole: string;
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
  summary: string;
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
  caseStudyRequestUrl: string;
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
  role: "E-commerce Graphic Designer",
  summary: "Thiết kế hình ảnh sản phẩm và quảng cáo cho thương mại điện tử.",
  subRole: "Meta & Google Ad Creatives · Website & Email Design · POD Artwork",
  tagline: "Gu dẫn lối. AI tiếp sức. Thiết kế có hồn. Taste leads. AI empowers. Design has soul.",
  avatarUrl: "/images/avatar.jpg",
  recruiterPitch: "Graphic Designer 4+ năm tại Vani Ecommerce (cross-border Print-on-Demand, US/EU), ứng tuyển vị trí E-commerce Graphic Designer. Ứng dụng AI vào quy trình thiết kế hằng ngày. Thế mạnh: Ad Creatives cho Meta & Google Ads, thiết kế website & email, POD artwork. Nổi bật nhất: dự án D2C 3 thương hiệu, góp vào ~$25K lợi nhuận team Q4/2025. Nhận việc full-time tại TP.HCM sau 2–4 tuần.",
  jobPreferences: {
    status: "Open to Work • Toàn thời gian tại TP. Hồ Chí Minh",
    targetRoles: [
      "E-commerce Graphic Designer",
      "E-commerce Visual & Ad Creative Designer",
      "Brand & E-commerce Graphic Designer"
    ],
    workModes: [
      "Toàn thời gian (Full-time tại TP. Hồ Chí Minh)",
      "Hybrid / Remote cho đội ngũ E-commerce & D2C",
      "Freelance Thiết kế & Tự động hóa Photoshop Scripts"
    ],
    availability: "Nhận việc sau 2–4 tuần, có thể trao đổi thêm khi phỏng vấn",
    salaryExpectation: "Thỏa thuận trong quá trình phỏng vấn"
  },
  bio: [
    "Mình là Trần Tiểu Ngọc, Graphic Designer với 4+ năm toàn thời gian tại Vani Ecommerce, công ty cross-border theo mô hình Print-on-Demand bán cho khách Mỹ và Châu Âu trên Amazon, Etsy, Shopify và WooCommerce. Việc chính của mình là làm file in sản phẩm cho đơn hàng của các team D2C, Etsy và Amazon, gồm thiết kế mới và re-design, cho các niche Anime, Racing, Sport, Music. Tính cả file in, Ad Creatives, banner và mockup, 4 năm qua mình đã làm hơn 6,500 thiết kế, trung bình hơn 1,500 file mỗi năm. Đi kèm là hình ảnh bán hàng: Ad Creatives cho Meta & Google Ads, cover email Klaviyo, hero banner và banner quảng cáo cho website, shop Etsy, Amazon.",
    "AI có mặt trong quy trình của mình ngay từ khâu đầu. Claude, ChatGPT và Gemini giúp mình đọc nhanh xu hướng và gom insight khách hàng. Adobe Firefly, ChatGPT Image và FLUX.1 cho mình thử nhiều hướng moodboard, ánh sáng, bố cục trước khi đặt bút. Nhờ vậy khâu lên ý tưởng nhanh gấp 3 lần. Còn chọn hướng nào, sửa nét nào, đặt chữ ở đâu thì mình quyết, và bản cuối luôn được hoàn thiện bằng tay trên Wacom.",
    "Việc lặp lại thì mình giao cho máy theo cách khác: tự viết Photoshop Actions (.atn) và Scripts (.jsx) để ghép mockup, xuất file in 300 DPI, đặt tên theo SKU. Cả team giảm ~40% thời gian sản xuất và giảm 99% lỗi đặt tên file. Thành tích mình tự hào nhất trong 4 năm là dự án D2C gồm 3 thương hiệu E-commerce: Q3–Q4/2025 mình phụ trách toàn bộ thiết kế, góp vào khoảng $25,000 USD lợi nhuận của team D2C trong Q4/2025.",
    "Mình sinh năm 2000, Song Ngư, tốt nghiệp Thiết kế Đồ họa và Truyền thông ở HCMUTE. Hay nghĩ nhiều thật, nhưng cũng nhờ vậy mà mình soi file rất kỹ trước khi gửi xưởng: tỷ lệ hoàn trả do lỗi in dưới 0.4%."
  ],
  philosophy: "Gu dẫn lối. AI tiếp sức. Thiết kế có hồn. Taste leads. AI empowers. Design has soul.",
  aiPhilosophy: {
    badge: "Cách mình làm • Con người dẫn dắt, AI tăng tốc",
    headline: "Gu dẫn lối. AI tiếp sức. Thiết kế có hồn.",
    coreBelief: "Gu thẩm mỹ cho từng insight khách hàng là của con người. Chỉ con người mới hiểu sâu góc nhìn, tâm tư và sự rung động của con người, hơn bất kỳ thuật toán nào.",
    ratio: "Human-Crafted, AI-Accelerated • Taste leads. AI empowers. Design has soul.",
    pillars: [
      {
        title: "01. AI gom dữ liệu cũ, còn gu là của mình",
        subtitle: "Human-to-Human Insight vs. 'AI Slop'",
        description: "AI chỉ tổng hợp dữ liệu quá khứ nên rất dễ ra những hình đại trà, vô hồn. Người ta mua một chiếc áo hay cái cốc vì thấy câu chuyện và cá tính của chính mình trong từng nét vẽ, không phải vì thuật toán. Hiểu góc nhìn của một con người thì cần một con người khác."
      },
      {
        title: "02. Mình cầm lái, AI ngồi ghế phụ",
        subtitle: "Intentional Craftsmanship & Wacom Precision",
        description: "Mình điều khiển công cụ, không để AI quyết định thẩm mỹ. Sự nhạy cảm và tỉ mỉ giúp mình biết lúc nào nên nhờ AI lên moodboard cho nhanh, lúc nào cầm bút Wacom vẽ tay từng chi tiết, chỉnh typography và bố cục."
      },
      {
        title: "03. Việc lặp lại cho script, màu in thì mình soi",
        subtitle: "Photoshop Automation (-40% Time) & Print QC (<0.4% Defect)",
        description: "Ghép mockup 2D/3D, xuất file in 300 DPI, đặt tên theo SKU: những việc lặp đi lặp lại này đều chạy bằng Photoshop Actions (.atn) & Scripts (.jsx) mình tự viết. Phần tách màu CMYK / Halftone DTG thì mình kiểm tra kỹ bằng tay, để tỷ lệ hoàn trả do lỗi in dưới 0.4%."
      }
    ]
  },
  location: "Thủ Đức, TP. Hồ Chí Minh, Việt Nam",
  phone: "0393 258 ###",
  phoneInternational: "+84 393 258 ###",
  email: "ngoctt.design@gmail.com",
  website: "https://tieungoc.site",
  // CV is shared by email on request to keep personal contact details off the public site
  cvRequestUrl: "mailto:ngoctt.design@gmail.com?subject=Nh%E1%BA%ADn%20CV%20Tr%E1%BA%A7n%20Ti%E1%BB%83u%20Ng%E1%BB%8Dc",
  // The long-form case studies live on the private noindex CV site and are sent on request
  caseStudyRequestUrl: "mailto:ngoctt.design@gmail.com?subject=Nh%E1%BA%ADn%20case%20study%20chi%20ti%E1%BA%BFt%20Tr%E1%BA%A7n%20Ti%E1%BB%83u%20Ng%E1%BB%8Dc",
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
      title: "Ad Creatives, E-commerce Visuals, POD Artwork & Mockup 2D/3D",
      skills: [
        "Thiết kế Ad Creatives cho Meta & Google Ads, cover hero email Klaviyo, hero banner & banner quảng cáo cho website, shop Etsy, Amazon",
        "POD Artwork: file in sản phẩm (thiết kế mới & re-design) cho T-shirt, áo, quần, mũ, cốc, giày, thảm, home & living, poster theo đơn hàng US/EU",
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
        "Ứng dụng AI vào thiết kế: Adobe Firefly, ChatGPT Image, FLUX.1, Banana Pro, Generative Fill cho ý tưởng và visual; Claude, Gemini, ChatGPT cho nghiên cứu xu hướng và insight. Lên ý tưởng nhanh gấp 3 lần, thành phẩm vẫn hoàn thiện tay",
        "Email Marketing & Giữ chân khách hàng: Xây dựng 15+ mẫu email Klaviyo đạt tỷ lệ mở trung bình 28% (cao hơn mức chuẩn 21% của ngành)",
        "Biên tập Video ngắn & Ấn phẩm động: CapCut Pro, Canva Pro, Topview AI & GIF Animation cho chiến dịch quảng cáo đa kênh",
        "Nền tảng E-commerce thực chiến: Thiết kế tối ưu hiển thị và chuyển đổi trên Shopify, WooCommerce, Etsy, Amazon & Klaviyo"
      ]
    },
  ],
  softSkills: [
    "Có gu thẩm mỹ rõ ràng, hiểu insight khách hàng",
    "Tỉ mỉ từng pixel, soi chất lượng đầu ra rất kỹ",
    "Dùng AI có chọn lọc để sản phẩm vẫn có hồn, không rập khuôn",
    "Giữ đúng deadline trong mùa sale cao điểm Q3–Q4",
    "Làm việc ăn ý với team D2C, Marketing và Media Buyer",
    "Hay tìm cách tối ưu quy trình, việc lặp lại thì viết Action/Script"
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
      title: "Đọc khách hàng và xu hướng",
      tools: ["ChatGPT / Claude", "Pinterest", "Market Research"],
      description: "Mình tìm hiểu khách hàng, văn hóa và xu hướng thị trường US/EU/VN. AI giúp tổng hợp dữ liệu nhanh, còn chọn concept nào thì mình dựa vào trực giác và gu của người làm thiết kế.",
      aiRole: "Claude, ChatGPT, Gemini tổng hợp nhanh xu hướng, slang và thị hiếu thị trường US/EU",
      humanRole: "Chọn concept hợp với người mua và với thương hiệu"
    },
    {
      phase: "02. Ý tưởng cùng AI",
      title: "Thử ý tưởng cùng AI",
      tools: ["Adobe Firefly", "ChatGPT Image", "Gemini", "FLUX.1"],
      description: "Lên nhanh moodboard, thử biến thể ánh sáng và bố cục cho sản phẩm và banner quảng cáo. Mình chọn lọc khắt khe bằng gu, để không ra sản phẩm rập khuôn.",
      aiRole: "Adobe Firefly, ChatGPT Image, FLUX.1, Banana Pro ra nhiều biến thể ánh sáng, bố cục, phong cách để so sánh",
      humanRole: "Loại phương án đại trà, chốt một hướng có cá tính"
    },
    {
      phase: "03. Đôi tay Designer",
      title: "Vẽ tay trên Wacom, soi màu in",
      tools: ["Wacom Tablet", "Photoshop", "Illustrator", "CMYK 300 DPI"],
      description: "Từng sản phẩm mình hoàn thiện bằng bảng vẽ Wacom, chỉnh typography cho chuẩn, rồi kiểm tra tách màu CMYK / Halftone DTG để tỷ lệ lỗi in dưới 0.4%.",
      aiRole: "Generative Fill trong Photoshop hỗ trợ chỉnh sửa ảnh",
      humanRole: "Vẽ tay trên Wacom, chỉnh typography, tách màu CMYK / Halftone cho DTG"
    },
    {
      phase: "04. Tự động hóa",
      title: "Để script chạy hàng loạt",
      tools: ["PS Scripts (.jsx)", "Actions (.atn)", "Batch Mockups"],
      description: "Photoshop Actions và Script mình tự viết lo phần lặp lại: ghép mockup 2D/3D, xuất file in 300 DPI, đặt tên theo SKU. Cả team giảm ~40% thời gian sản xuất.",
      aiRole: "Photoshop Actions & Scripts mình tự viết: ghép mockup 2D/3D, xuất 300 DPI, đặt tên theo SKU",
      humanRole: "Soát từng file trước khi gửi xưởng"
    }
  ],
  experiences: [
    {
      period: "08/2022 – Hiện tại (4+ năm)",
      role: "Graphic Designer",
      company: "Vani Ecommerce · Cross-border Print-on-Demand · Toàn thời gian · TP. Hồ Chí Minh",
      description: "Vani Ecommerce bán sản phẩm in ấn theo mô hình Print-on-Demand cho khách Mỹ và Châu Âu trên Amazon, Etsy, Shopify và WooCommerce. Mình vào làm ngay sau khi tốt nghiệp. Việc chính: nhận yêu cầu từ đơn hàng của các team D2C, Etsy, Amazon, làm file in 300 DPI bằng Photoshop và Illustrator, chuyển cho xưởng và vendor, đồng thời đưa thiết kế lên mockup để khách duyệt trước khi in. Đi kèm là Ad Creatives cho Meta & Google Ads, cover email Klaviyo, hero banner và banner quảng cáo cho website, shop Etsy, Amazon.",
      highlights: [
        "Dự án D2C: 3 thương hiệu E-commerce (Q3–Q4/2025): Phụ trách toàn bộ thiết kế cho 3 thương hiệu, phối hợp cùng team D2C từ sản phẩm in ấn đến visual marketing (Ad Creatives cho Meta & Google Ads, banner website, header email Klaviyo), đóng góp vào kết quả ~$25,000 USD lợi nhuận team D2C trong Q4/2025.",
        "Thiết kế Ad Creatives cho Meta & Google Ads, hero banner và banner quảng cáo cho website, shop Etsy, Amazon, cùng 15+ mẫu email Klaviyo đạt tỷ lệ mở trung bình 28% (cao hơn chuẩn ngành 21%).",
        "Hơn 6,500 thiết kế trong 4+ năm (file in, Ad Creatives, banner, mockup), trung bình hơn 1,500 file mỗi năm. Phần lớn là file in sản phẩm (thiết kế mới và re-design) cho đơn hàng của các team D2C, Etsy, Amazon, thuộc các niche Anime, Racing, Sport, Music trên quần áo, mũ, cốc, giày, thảm, home & living và poster.",
        "Ứng dụng AI (Adobe Firefly, ChatGPT Image, Gemini, Claude, AI Agent) vào khâu ý tưởng và visual quảng cáo, sau đó hoàn thiện thủ công từng sản phẩm, tăng tốc độ đầu ra gấp 3 lần mà vẫn độc bản và an toàn bản quyền.",
        "Tự xây dựng Photoshop Actions (.atn) và Script (.jsx) để tự động hóa việc lặp lại: ghép mockup 2D/3D, xuất file in 300 DPI, đặt tên file theo SKU, giúp giảm ~40% thời gian sản xuất và 99% lỗi đặt tên file cho toàn team.",
        "Kiểm soát chất lượng in cho áo, POSM và merchandise (CMYK/RGB 300 DPI, tách Halftone cho DTG & All-Over-Print), giữ tỷ lệ hoàn trả do lỗi in dưới 0.4%."
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
