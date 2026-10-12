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
  role: "AI Product Designer & Creative Technologist",
  subRole: "Chuyên sâu Human-AI Interaction, Generative Workflows & Intelligent Design Systems",
  tagline: "Kiến tạo trải nghiệm số thế hệ mới bằng cách kết hợp tư duy lấy con người làm trung tâm (Human-Centered UX) cùng sức mạnh đột phá của Trí tuệ nhân tạo (AI).",
  avatarUrl: "/images/avatar.jpg",
  petsUrl: "/images/pets.jpg",
  petsBio: "Người bạn bốn chân trung thành và là nguồn cảm hứng tích cực của Tiểu Ngọc sau những giờ tập trung nghiên cứu sản phẩm.",
  recruiterPitch: "Bạn đang tìm kiếm một Designer có thể giúp đội ngũ sản phẩm rút ngắn 50% thời gian từ ý tưởng đến nguyên mẫu thực tế, đồng thời làm chủ các mẫu hình giao diện AI (Copilot, Conversational UI, Adaptive UX)? Hãy cùng trò chuyện!",
  bio: [
    "Xin chào! Mình là Trần Tiểu Ngọc, một Product Designer tiên phong ứng dụng Trí tuệ nhân tạo (AI) vào toàn bộ quy trình thiết kế sản phẩm số và hệ thống nhận diện thương hiệu.",
    "Với sự bùng nổ của Generative AI và mô hình ngôn ngữ lớn (LLM), thiết kế giao diện không còn chỉ dừng lại ở các nút bấm tĩnh và lưới bố cục truyền thống. Mình tập trung nghiên cứu và hiện thực hóa các mẫu thiết kế Tương tác Người - Máy thông minh (Human-AI Interaction): từ giao diện đối thoại (Conversational UI), cơ chế phản hồi streaming, xử lý ảo giác (hallucination UX) cho đến hệ thống Design System thích ứng theo ngữ cảnh người dùng.",
    "Bên cạnh việc làm chủ các công cụ AI thế hệ mới (Claude, ChatGPT, Figma AI, Adobe Firefly, v0.dev, Relume), mình luôn giữ vững nguyên lý cốt lõi: AI là đòn bẩy khuếch đại sáng tạo, còn sự đồng cảm sâu sắc và tư duy giải quyết vấn đề mới là yếu tố quyết định thành bại của sản phẩm."
  ],
  philosophy: "Thiết kế tốt không chỉ là những gì mắt nhìn thấy, mà là cách sản phẩm vận hành mượt mà trong cuộc sống của người dùng.",
  location: "Hà Nội, Việt Nam (Làm việc On-site & Remote toàn cầu)",
  email: "hello@tieungoc.site",
  website: "https://tieungoc.site",
  resumeUrl: "#", // Placeholder file PDF CV của Tiểu Ngọc
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/tieungoctran",
      icon: "github",
      handle: "@tieungoctran",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/tieungoc-designer",
      icon: "linkedin",
      handle: "@tieungoc-designer",
    },
    {
      name: "Substack",
      url: "https://tieungoc.substack.com",
      icon: "bookmark",
      handle: "tieungoc.substack.com",
    },
    {
      name: "Behance",
      url: "https://behance.net/tieungoc",
      icon: "palette",
      handle: "behance.net/tieungoc",
    },
    {
      name: "Dribbble",
      url: "https://dribbble.com/tieungoc",
      icon: "dribbble",
      handle: "dribbble.com/tieungoc",
    },
  ],
  skillCategories: [
    {
      title: "AI & Intelligent UX Design",
      skills: [
        "Human-AI Interaction (HAII Guidelines)",
        "Conversational UI & Copilot UX Patterns",
        "Prompt Engineering for Visual Concepting",
        "Handling AI Latency & Hallucination States",
        "Adaptive & Context-Aware Personalization"
      ]
    },
    {
      title: "Core Product & System Design",
      skills: [
        "End-to-end Product Design (0 to 1)",
        "Scalable Design Systems & Token Architecture",
        "User Research, Personas & Journey Mapping",
        "Rapid Interactive Prototyping",
        "Usability Testing & Conversion Optimization"
      ]
    },
  ],
  aiTools: [
    {
      category: "Generative Visuals & Design AI",
      tools: ["Adobe Firefly", "Figma AI", "Canva Magic Studio", "Krea AI"]
    },
    {
      category: "AI Product & Prototyping",
      tools: ["Figma AI", "v0 by Vercel", "Relume AI", "Framer AI", "Tokens Studio"]
    },
    {
      category: "Cognitive & Research Copilots",
      tools: ["ChatGPT Plus", "Claude 3.5 Sonnet", "Perplexity AI", "Notion AI"]
    },
    {
      category: "Core Design Stack",
      tools: ["Figma", "Adobe Illustrator", "Photoshop", "After Effects", "Webflow"]
    }
  ],
  aiWorkflow: [
    {
      phase: "01. Khám phá & Nghiên cứu",
      title: "AI-Augmented Research",
      tools: ["Claude", "ChatGPT", "Perplexity"],
      description: "Tổng hợp dữ liệu khảo sát người dùng, phân tích đối thủ cạnh tranh và lập ma trận chân dung khách hàng (Personas) trong vài giờ thay vì nhiều ngày."
    },
    {
      phase: "02. Ý tưởng & Khám phá thị giác",
      title: "Generative Moodboarding",
      tools: ["Adobe Firefly", "Figma AI", "Krea"],
      description: "Thử nghiệm hơn 100+ hướng đi thẩm mỹ, chất liệu và phối màu thị giác bằng các prompt chuyên sâu, giúp khách hàng chốt định hướng nhanh chóng."
    },
    {
      phase: "03. Thiết kế & Chuẩn hóa Hệ thống",
      title: "Intelligent UI & Design System",
      tools: ["Figma AI", "Tokens Studio", "Relume"],
      description: "Xây dựng các linh kiện giao diện pixel-perfect, quản lý Design Tokens và chuẩn bị các trạng thái giao diện đặc thù của AI (Loading skeleton, streaming, fallback error)."
    },
    {
      phase: "04. Tạo nguyên mẫu & Handoff Dev",
      title: "Rapid AI Prototyping",
      tools: ["v0.dev", "React / Tailwind", "Principle"],
      description: "Biến bản vẽ thiết kế thành prototype code tương tác thực tế với HTML/Tailwind/React chỉ trong thời gian ngắn, giúp lập trình viên hiểu trọn vẹn ý đồ tương tác."
    }
  ],
  experiences: [
    {
      period: "2023 — Hiện tại",
      role: "Lead AI Product Designer",
      company: "NextGen AI Innovation Lab / Remote",
      description: "Chủ trì thiết kế giao diện và trải nghiệm tương tác cho ứng dụng AI Copilot doanh nghiệp và các nền tảng Generative SaaS. Áp dụng AI Workflow giúp tăng tốc độ bàn giao thiết kế lên 2.5 lần."
    },
    {
      period: "2021 — 2023",
      role: "Senior UI/UX Designer",
      company: "FinTech & E-Commerce Scaleup",
      description: "Thiết kế kiến trúc thông tin và hệ thống Design System phục vụ hơn 500.000 người dùng tích cực. Bắt đầu tích hợp các tính năng AI gợi ý thông minh vào luồng checkout."
    },
    {
      period: "2019 — 2021",
      role: "Product & Visual Designer",
      company: "Digital Studio",
      description: "Tham gia triển khai các dự án nhận diện thương hiệu, thiết kế landing page chuyển đổi cao và tối ưu trải nghiệm người dùng đa nền tảng."
    }
  ]
};
