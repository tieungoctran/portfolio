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
    title: "Thiết kế Giao diện Kỷ nguyên AI: Khi Nút bấm nhường chỗ cho Đối thoại và Agentic UI",
    date: "25 Tháng 11, 2024",
    readTime: "6 phút đọc",
    excerpt: "Giao diện người dùng đang chuyển dịch từ GUI (Graphical User Interface) sang LUI (Language User Interface) và Agentic UX. Nhà thiết kế cần trang bị tư duy gì để không bị lỗi thời trước làn sóng AI Agents?",
    platform: "Substack",
    url: "https://tieungoc.substack.com/p/designing-for-the-agentic-era",
    tags: ["Agentic UX", "Human-AI Interaction", "Conversational UI"],
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "a2",
    title: "Cách Designer làm chủ Generative AI để tăng tốc x3 quy trình từ Ý tưởng đến Prototype có thể chạy được",
    date: "10 Tháng 10, 2024",
    readTime: "5 phút đọc",
    excerpt: "Quy trình thực chiến kết hợp Adobe Firefly, Claude 3.5 Sonnet và v0.dev giúp một Product Designer độc lập có thể hoàn thành khối lượng công việc của một nhóm 3 người trong vài ngày.",
    platform: "LinkedIn",
    url: "https://linkedin.com/in/tieungoc-designer",
    tags: ["AI Workflow", "Rapid Prototyping", "Productivity"],
    thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "a3",
    title: "Giải quyết bài toán Niềm tin và Ảo giác (Hallucination) trong Trải nghiệm Người dùng AI",
    date: "18 Tháng 08, 2024",
    readTime: "7 phút đọc",
    excerpt: "Khi mô hình AI đưa ra thông tin không chính xác, giao diện phản hồi như thế nào để giữ chân khách hàng? 4 mẫu hình UX giúp minh bạch hóa suy luận và xây dựng niềm tin lâu dài.",
    platform: "Substack",
    url: "https://tieungoc.substack.com/p/handling-ai-hallucinations-in-ux",
    tags: ["Trust in AI", "UX Patterns", "Ethical AI"],
    thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "a4",
    title: "Xây dựng Design System thích ứng cho các ứng dụng tích hợp Trợ lý Thông minh LLM",
    date: "05 Tháng 07, 2024",
    readTime: "4 phút đọc",
    excerpt: "Design System cho ứng dụng AI cần những trạng thái linh kiện nào? Từ Thinking Spinner, Streaming Text Tokens cho đến Feedback Thumbs up/down và Source Card preview.",
    platform: "LinkedIn",
    url: "https://linkedin.com/in/tieungoc-designer",
    tags: ["Design System", "LLM UI", "Tokens"],
    thumbnail: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1000&q=80"
  }
];
