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
}

export interface AiWorkflowStep {
  phase: string;
  title: string;
  tools: string[];
  description: string;
}

export interface ProfileData {
  name: string;
  nickname: string;
  zodiac: string;
  role: string;
  subRole: string;
  tagline: string;
  avatarUrl: string;
  petsUrl: string;
  petsBio: string;
  bio: string[];
  philosophy: string;
  location: string;
  email: string;
  website: string;
  resumeUrl: string;
  recruiterPitch: string;
  socials: SocialLink[];
  skillCategories: SkillCategory[];
  aiTools: {
    category: string;
    tools: string[];
  }[];
  aiWorkflow: AiWorkflowStep[];
  experiences: Experience[];
}

export const profileData: ProfileData = {
  name: "Trần Tiểu Ngọc",
  nickname: "Mắt Gấu 🐻",
  zodiac: "Cung Song Ngư (Pisces) ♓",
  role: "Graphic Designer — POD & Brand Visual",
  subRole: "POD Apparel & Merchandise, E-commerce Visual & Quy trình đồ họa tăng tốc bởi AI / Scripting",
  tagline: "Cô gái Song Ngư thiết kế bằng trực giác thẩm mỹ sắc bén, tối ưu bằng tư duy số liệu thương mại và tự động hóa bằng code & AI.",
  avatarUrl: "/images/avatar.jpg",
  petsUrl: "/images/pets.jpg",
  petsBio: "Người bạn bốn chân trung thành và là nguồn năng lượng chữa lành của Tiểu Ngọc sau những giờ tập trung vẽ Wacom và canh màu in ấn.",
  recruiterPitch: "Bạn đang tìm kiếm một Graphic Designer có gu thẩm mỹ độc đáo, am hiểu sâu sắc thị hiếu khách hàng US/EU, làm chủ quy trình in ấn POD và có khả năng tự động hóa công việc với tốc độ thần tốc? Hãy kết nối với Tiểu Ngọc ngay nhé!",
  bio: [
    "Xin chào! Mình là Tiểu Ngọc (mọi người hay gọi mình là Mắt Gấu 🐻), một Graphic Designer sinh năm 2000, mang tâm hồn mơ mộng của cung Song Ngư nhưng lại cực kỳ thực tế khi đối diện với các chỉ số doanh thu thương mại điện tử.",
    "Hơn 4 năm gắn bó toàn thời gian tại Vani Ecommerce (từ 08/2022 đến nay), mình đã trực tiếp thiết kế hơn 3500+ sản phẩm Print-on-Demand (áo thun 2D/3D, mugs, posters, phụ kiện) phục vụ thị trường Mỹ và Châu Âu. Mình từng chủ trì thiết kế bộ sưu tập POD Anime đạt doanh thu hơn $20,000 chỉ trong một quý (Q4/2025).",
    "Là một Song Ngư chính hiệu, mình đôi khi 'overthinking' — nhưng mình luôn biến sự nhạy cảm đó thành sự tỉ mỉ tuyệt đối đến từng điểm ảnh (pixel), từng đường nét vector trên bảng vẽ Wacom và từng mảng màu in ấn. Để không bị kiệt sức (burnout) trước guồng quay sản xuất hàng ngàn mẫu, mình tự học viết Photoshop Actions và JavaScript Scripts giúp cắt giảm 40% thời gian sản xuất, đồng thời kết hợp linh hoạt các công cụ AI (Firefly, Generative Fill, Banana Pro) để bứt phá tốc độ sáng tạo gấp 3 lần."
  ],
  philosophy: "Thiết kế thương mại đỉnh cao là sự giao thoa hài hòa giữa cảm xúc chân thật, tính thẩm mỹ khắt khe và hiệu quả doanh số thực tế.",
  location: "Thủ Đức, TP. Hồ Chí Minh, Việt Nam",
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
      title: "Hard Skills & Đồ họa In ấn (Print & Apparel)",
      skills: [
        "Adobe Photoshop (90%) & Adobe Illustrator (75%)",
        "POD / Print Design (90%) — T-shirts 2D/3D, Mugs, Posters",
        "Wacom Tablet Illustration & Vẽ chi tiết cao",
        "Color Theory & Typography chuyên sâu cho in ấn chất lượng cao",
        "Brand Identity Design & Xây dựng cẩm nang thương hiệu"
      ]
    },
    {
      title: "Tự động hóa & AI Workflow (Automation & Speed)",
      skills: [
        "Photoshop Actions & JavaScript Scripts (Giảm 40% thời gian sản xuất)",
        "AI-First Workflow (Adobe Firefly, Generative Fill, Banana Pro — Tăng tốc 3×)",
        "Thiết kế Hệ thống Email E-commerce (Klaviyo 28% open rate)",
        "Canva Pro, CapCut Pro & Dựng video social media",
        "Hiểu biết cơ bản về HTML / CSS & Wireframe UI-UX"
      ]
    },
  ],
  aiTools: [
    {
      category: "Công cụ Sáng tạo & Minh họa",
      tools: ["Adobe Photoshop", "Adobe Illustrator", "Bảng vẽ Wacom", "Canva Pro"]
    },
    {
      category: "Trí tuệ Nhân tạo & Tự động hóa",
      tools: ["Adobe Firefly", "Photoshop Generative Fill", "Banana Pro", "PS Scripts & Actions"]
    },
    {
      category: "Kênh Bán hàng & Tiếp thị E-commerce",
      tools: ["Klaviyo Email", "Shopify Mockups", "CapCut Pro", "Social Visuals"]
    }
  ],
  aiWorkflow: [
    {
      phase: "01. Khám phá Niche & Bắt Trend",
      title: "Trend Research & Concepting",
      tools: ["Data Analysis", "Pinterest", "TikTok Trends"],
      description: "Phân tích xu hướng thị trường Âu Mỹ, bóc tách nhu cầu của các cộng đồng đam mê ngách (Anime, Racing, Streetwear) để lên concept visual đúng tệp khách."
    },
    {
      phase: "02. Khám phá Thị giác cùng AI",
      title: "AI-Augmented Visual Ideation",
      tools: ["Adobe Firefly", "Generative Fill", "Banana Pro"],
      description: "Thử nghiệm nhanh hàng chục biến thể mỹ thuật siêu thực, chất liệu và phối màu bằng AI Prompts, rút ngắn thời gian moodboarding từ vài ngày xuống vài giờ."
    },
    {
      phase: "03. Vẽ tay Wacom & Hoàn thiện Vector",
      title: "Precision Artwork & Typography",
      tools: ["Wacom Tablet", "Illustrator", "Photoshop"],
      description: "Chắt lọc những tinh túy từ AI, vẽ minh họa chi tiết tay bằng bảng vẽ Wacom, căn chỉnh typo sắc sảo và phối màu chuẩn in ấn CMYK / RGB 300 DPI."
    },
    {
      phase: "04. Tự động hóa Xuất File & Mockup",
      title: "Scripting & Batch Export",
      tools: ["PS Actions", "JavaScript Scripts"],
      description: "Chạy các script tự động để xuất hàng loạt file in theo size và ghép mockup sản phẩm lên áo thun, cốc thực tế chỉ bằng một phím bấm."
    }
  ],
  experiences: [
    {
      period: "08/2022 — Hiện tại (4+ năm)",
      role: "Graphic Designer — POD & Brand Visual",
      company: "Vani Ecommerce · Toàn thời gian",
      description: "Chủ trì thiết kế 3500+ sản phẩm POD (áo thun 2D/3D, mugs, posters) cho thị trường Mỹ và Châu Âu. Đạt mốc doanh số $20,000+ từ một bộ sưu tập POD Anime trong một quý (Q4/2025). Xây dựng hệ thống nhận diện thương hiệu hoàn chỉnh (logo, palette, typo guidelines). Tự lập trình Photoshop Actions & JS Scripts giúp giảm ~40% thời gian sản xuất cho toàn team. Thiết kế chuỗi email marketing Klaviyo đạt tỷ lệ mở trung bình 28% (chuẩn ngành 21%)."
    }
  ]
};
