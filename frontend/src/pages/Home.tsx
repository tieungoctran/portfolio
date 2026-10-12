import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { profileData } from '../data/profile';
import { projectsData } from '../data/projects';
import { articlesData } from '../data/articles';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  FileText, 
  ExternalLink,
  Bot,
  Layers,
  Wand2,
  Copy,
  Check,
  ShieldCheck,
  Zap,
  TrendingUp,
  SlidersHorizontal,
  Code
} from 'lucide-react';

export const Home: React.FC = () => {
  const featuredProjects = projectsData.filter((p) => p.featured);
  const recentArticles = articlesData.slice(0, 3);
  
  // Interactive AI UX Lab state for recruiters to test
  const [activeTab, setActiveTab] = useState<'copilot' | 'tokens' | 'generative'>('copilot');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="space-y-24 md:space-y-36 pb-20 overflow-hidden">
      {/* ----------------- RECRUITER STATUS BAR ----------------- */}
      <aside aria-label="Thông báo tuyển dụng" className="border-b border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-100/60 dark:bg-neutral-900/60 backdrop-blur-sm py-2.5 px-6 text-xs transition-colors">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-2 text-neutral-700 dark:text-neutral-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-neutral-900 dark:text-white">Dành cho Nhà tuyển dụng & Design Lead:</span>
            <span className="hidden md:inline text-neutral-500 dark:text-neutral-400">|</span>
            <span className="hidden md:inline">Sẵn sàng nhận lời mời phỏng vấn vị trí AI Product Designer / Senior UX (Full-time & Remote).</span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={profileData.resumeUrl}
              download
              className="inline-flex items-center space-x-1.5 font-semibold text-neutral-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Tải CV & AI Skills</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-1 font-semibold text-neutral-900 dark:text-white hover:underline"
            >
              <span>Đặt lịch phỏng vấn</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </aside>

      {/* ----------------- HERO SECTION ----------------- */}
      <section className="pt-6 md:pt-14 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Copy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Trần Tiểu Ngọc • AI Product Designer & Creative Technologist</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.12]">
              Thiết kế trải nghiệm số thế hệ mới cho kỷ nguyên <span className="italic font-normal text-amber-700 dark:text-amber-400">Intelligent AI</span>.
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-light leading-relaxed max-w-2xl">
              Định hình cách con người và Trí tuệ Nhân tạo cộng tác nhịp nhàng. Chuyên sâu về <strong className="font-medium text-neutral-900 dark:text-white">Human-AI Interaction (HAII)</strong>, giao diện Copilot đa phương thức, và quy trình <strong className="font-medium text-neutral-900 dark:text-white">Generative Prototyping</strong> giúp rút ngắn 50% thời gian từ ý tưởng đến sản phẩm chạy thực tế.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-semibold text-sm hover:opacity-90 transition-opacity shadow-sm"
              >
                <span>Khám phá AI Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 font-medium text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-colors"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">Đã sao chép email!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-neutral-500" />
                    <span>Copy email: {profileData.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Metrics Bar */}
            <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 grid grid-cols-3 gap-6">
              <div>
                <span className="block text-2xl sm:text-3xl font-serif font-bold text-neutral-900 dark:text-white">x3 Lần</span>
                <span className="text-xs text-neutral-500">Tốc độ thử nghiệm với AI Pipeline</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-serif font-bold text-neutral-900 dark:text-white">94%</span>
                <span className="text-xs text-neutral-500">Độ tin cậy người dùng với Explainable AI UX</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-serif font-bold text-neutral-900 dark:text-white">5+ Năm</span>
                <span className="text-xs text-neutral-500">Kinh nghiệm System & Product UX</span>
              </div>
            </div>
          </div>

          {/* Right Visual Teaser: Interactive AI UX Card */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-3xl bg-neutral-900 text-white dark:bg-[#121316] dark:text-neutral-100 border border-neutral-800 shadow-2xl space-y-6 relative overflow-hidden group">
              {/* Subtle ambient blur */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500" />
                  <span className="w-3 h-3 rounded-full bg-amber-500" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono text-neutral-400 pl-2">Aurora Copilot • v2.4</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Live Preview
                </span>
              </div>

              {/* Prompt box */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                  User Prompt Context
                </span>
                <div className="p-3 rounded-xl bg-neutral-800/80 border border-neutral-700 text-xs font-mono text-neutral-200 flex items-center justify-between">
                  <span>&quot;Phân tích biến động doanh thu Q3 & gợi ý tối ưu chi phí vận hành?&quot;</span>
                  <Zap className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 ml-2" />
                </div>
              </div>

              {/* AI Thought Process UI (HAII Guideline: Explainability) */}
              <div className="p-4 rounded-xl bg-neutral-800/40 border border-neutral-700/60 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center space-x-1.5 text-amber-400 font-mono">
                    <Sparkles className="w-3.5 h-3.5 animate-spin" />
                    <span>Streaming Reasoning Steps...</span>
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400">Độ tin cậy: 98.4%</span>
                </div>

                <div className="space-y-1.5 text-xs text-neutral-300 font-light">
                  <div className="flex items-center space-x-2 text-emerald-400 text-[11px]">
                    <Check className="w-3 h-3" />
                    <span>Đã xác thực 1.240 điểm dữ liệu tài chính từ PostgreSQL</span>
                  </div>
                  <div className="flex items-center space-x-2 text-emerald-400 text-[11px]">
                    <Check className="w-3 h-3" />
                    <span>Lọc bỏ các giá trị dị biệt (outliers) tránh hallucination</span>
                  </div>
                </div>

                {/* Generated Card snippet */}
                <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-700 text-xs space-y-1">
                  <div className="flex justify-between items-center text-neutral-200">
                    <span className="font-semibold">Dự báo biên lợi nhuận Q4:</span>
                    <span className="text-emerald-400 font-mono">+18.5%</span>
                  </div>
                  <p className="text-[11px] text-neutral-400">
                    Khuyến nghị dịch chuyển 15% ngân sách marketing sang kênh Retention.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 text-[11px] text-neutral-400 font-mono">
                <span className="flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Human-in-the-loop ready</span>
                </span>
                <Link
                  to="/projects/aurora-ai-copilot"
                  className="text-amber-400 hover:underline inline-flex items-center space-x-1"
                >
                  <span>Xem Case Study</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- INTERACTIVE AI DESIGN LAB (FOR RECRUITERS) ----------------- */}
      <section className="px-6 max-w-6xl mx-auto space-y-8">
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-200/70 dark:bg-neutral-800 text-xs font-mono text-neutral-700 dark:text-neutral-300">
            <SlidersHorizontal className="w-3.5 h-3.5 text-amber-500" />
            <span>Interactive AI Design Lab</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
            Trải nghiệm Trực tiếp: 3 Trụ cột Thiết kế AI của Tiểu Ngọc
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
            Nhấp chuột vào từng tab bên dưới để khám phá cách Tiểu Ngọc giải quyết các bài toán thiết kế thực tế cho sản phẩm tích hợp Trí tuệ Nhân tạo:
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 max-w-xl">
          {[
            { id: 'copilot', label: '1. Human-AI Interaction', icon: Bot },
            { id: 'tokens', label: '2. AI Design Systems', icon: Layers },
            { id: 'generative', label: '3. Generative Pipeline', icon: Wand2 }
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex-1 min-w-[150px] inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-500' : ''}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121316] shadow-sm transition-all">
          {activeTab === 'copilot' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-6 space-y-4">
                <span className="text-xs uppercase font-mono tracking-wider text-amber-600 dark:text-amber-400 font-semibold">
                  Mẫu hình Tương tác Người - Máy (HAII)
                </span>
                <h3 className="font-serif text-2xl font-bold text-neutral-900 dark:text-white">
                  Xóa bỏ rào cản &quot;Hộp đen&quot; bằng Explainable AI UX
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
                  Người dùng doanh nghiệp không tin vào các câu trả lời chung chung của AI. Thiết kế của Tiểu Ngọc luôn đi kèm:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Source Citation Chips:</strong> Dẫn nguồn đối soát dữ liệu với 1 click.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Confidence Score Visual:</strong> Đo lường mức độ tin cậy của thuật toán.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Human-in-the-loop Editing:</strong> Cho phép người dùng ghi đè hoặc tinh chỉnh trực tiếp.</span>
                  </li>
                </ul>
              </div>

              <div className="md:col-span-6 p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-3 font-mono text-xs">
                <div className="text-neutral-400 text-[11px] pb-2 border-b border-neutral-200 dark:border-neutral-800 flex justify-between">
                  <span>UI Pattern: Citation & Override</span>
                  <span className="text-emerald-500">● Active</span>
                </div>
                <div className="p-3 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 space-y-2">
                  <p className="text-neutral-700 dark:text-neutral-200 font-sans text-xs">
                    &quot;Dựa trên hồ sơ giao dịch tháng 9, chi phí lưu kho tăng 24% so với cùng kỳ.&quot;
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-300 text-[10px] border border-amber-500/30 flex items-center space-x-1">
                      <span>Nguồn: ERP_Inventory_Table.csv</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </span>
                    <button className="px-2 py-0.5 rounded bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-[10px] hover:opacity-80">
                      Chỉnh sửa số liệu ✎
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tokens' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-6 space-y-4">
                <span className="text-xs uppercase font-mono tracking-wider text-amber-600 dark:text-amber-400 font-semibold">
                  Kiến trúc Design Tokens & Linh kiện AI
                </span>
                <h3 className="font-serif text-2xl font-bold text-neutral-900 dark:text-white">
                  Design System chuẩn hóa cho ứng dụng LLM & Copilot
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
                  Ứng dụng AI cần các trạng thái giao diện hoàn toàn mới mà các Design System truyền thống chưa đáp ứng:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Thinking & Token Streaming States:</strong> Hoạt ảnh chờ phản hồi không gây sốt ruột.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Hallucination Fallback:</strong> Giao diện tự phục hồi khi AI không trả lời đúng.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Feedback Loop Components:</strong> Thumbs up/down, cờ gắn cảnh báo để train model.</span>
                  </li>
                </ul>
              </div>

              <div className="md:col-span-6 p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-4 font-mono text-xs">
                <span className="text-neutral-400 text-[11px] block">Trạng thái linh kiện (Tokens Preview):</span>
                <div className="space-y-2">
                  <div className="p-3 rounded-lg bg-neutral-200/60 dark:bg-neutral-800/80 flex items-center justify-between">
                    <span className="text-neutral-700 dark:text-neutral-300 text-[11px]">Thinking Skeleton Pulse</span>
                    <span className="w-16 h-2 rounded bg-amber-400/60 animate-pulse" />
                  </div>
                  <div className="p-3 rounded-lg bg-neutral-200/60 dark:bg-neutral-800/80 flex items-center justify-between">
                    <span className="text-neutral-700 dark:text-neutral-300 text-[11px]">Streaming Indicator Token</span>
                    <span className="inline-block w-2 h-4 bg-amber-500 animate-bounce" />
                  </div>
                  <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-300 text-[11px] flex justify-between items-center">
                    <span>Model Timeout Fallback</span>
                    <span className="underline cursor-pointer">Thử lại (Retry)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'generative' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-6 space-y-4">
                <span className="text-xs uppercase font-mono tracking-wider text-amber-600 dark:text-amber-400 font-semibold">
                  Tốc độ Sáng tạo Đột phá
                </span>
                <h3 className="font-serif text-2xl font-bold text-neutral-900 dark:text-white">
                  Biến 100+ ý tưởng thành Concept chỉ trong 48 giờ
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
                  Thay vì mất nhiều tuần phác thảo thủ công, Tiểu Ngọc sử dụng quy trình Prompt Engineering và Generative AI trực quan để khám phá toàn diện không gian thị giác:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Rapid Iteration:</strong> Thử nghiệm hàng chục phong cách typography và bảng màu.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Human Curation:</strong> Chắt lọc tinh hoa và chuẩn hóa vector bằng Illustrator.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Code-ready Handoff:</strong> Xuất prototype HTML/Tailwind để thử nghiệm với người dùng thật.</span>
                  </li>
                </ul>
              </div>

              <div className="md:col-span-6 p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-3 font-mono text-xs">
                <div className="text-neutral-400 text-[11px] pb-2 border-b border-neutral-200 dark:border-neutral-800 flex justify-between">
                  <span>AI Pipeline Flow</span>
                  <span className="text-amber-500">Adobe Firefly + Claude</span>
                </div>
                <div className="p-3 rounded-lg bg-neutral-900 text-neutral-200 text-[11px] space-y-1">
                  <span className="text-amber-400">&gt; prompt:</span>
                  <p className="font-mono text-neutral-400 italic">
                    &quot;luxury herbal tea packaging, bio-minimalism, terracotta and sage textures, tactile embossing, editorial aesthetic&quot;
                  </p>
                </div>
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 text-[11px] flex items-center justify-between">
                  <span>Hậu kỳ vector thủ công: Đạt độ chính xác 100% khi in ấn</span>
                  <Check className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ----------------- AI-AUGMENTED DESIGN WORKFLOW ----------------- */}
      <section className="bg-neutral-100/70 dark:bg-neutral-900/40 py-20 border-y border-neutral-200 dark:border-neutral-800 transition-colors">
        <div className="max-w-6xl mx-auto px-6 space-y-14">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 font-mono">
              Quy trình phát triển sản phẩm
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
              Quy trình Thiết kế Tăng cường bởi AI (AI-Augmented Workflow)
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
              Cách Tiểu Ngọc kết hợp năng lực tính toán và sáng tạo của các mô hình AI vào từng chặng trong vòng đời phát triển sản phẩm để tạo ra giá trị vượt bậc cho doanh nghiệp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {profileData.aiWorkflow.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#121316] border border-neutral-200 dark:border-neutral-800 space-y-4 relative flex flex-col justify-between hover:border-neutral-400 dark:hover:border-neutral-600 transition-all"
              >
                <div className="space-y-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block font-semibold">
                    {step.phase}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-neutral-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex flex-wrap gap-1.5">
                  {step.tools.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 font-mono text-neutral-600 dark:text-neutral-300 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* AI Tools Suite Grid */}
          <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              Công nghệ & Nền tảng AI thực chiến
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {profileData.aiTools.map((group) => (
                <div
                  key={group.category}
                  className="p-4 rounded-xl bg-white/70 dark:bg-[#141619] border border-neutral-200/80 dark:border-neutral-800/80 space-y-2"
                >
                  <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 block">
                    {group.category}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {group.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[11px] px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- FEATURED AI CASE STUDIES ----------------- */}
      <section className="px-6 max-w-6xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 font-mono">
              Minh chứng thực tế
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
              Dự án Thiết kế & Sản phẩm AI Tiêu biểu
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light max-w-xl">
              Các case study chi tiết chứng minh năng lực thiết kế giao diện tương tác thông minh, giải quyết bài toán nghiệp vụ cho người dùng và khách hàng.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center space-x-1 text-sm font-semibold text-neutral-900 dark:text-white hover:opacity-75 transition-opacity mt-4 md:mt-0"
          >
            <span>Tất cả dự án ({projectsData.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className="group block space-y-4 p-4 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121316] hover:border-neutral-400 dark:hover:border-neutral-600 transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-200 dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-800">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-neutral-900/85 backdrop-blur-md text-amber-300 border border-neutral-700">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-neutral-900 shadow-md">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </div>
              </div>

              <div className="space-y-3 px-2 pb-2">
                <div className="flex items-center justify-between text-xs text-neutral-500 font-mono">
                  <span>{project.client}</span>
                  <span>{project.year}</span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-neutral-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 font-light">
                  {project.subtitle}
                </p>

                {/* AI Highlights Tags */}
                {project.aiHighlights && project.aiHighlights.length > 0 && (
                  <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800/80 space-y-1.5">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 block font-semibold">
                      Điểm nhấn giải pháp AI:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.aiHighlights.slice(0, 2).map((hl, i) => (
                        <span
                          key={i}
                          className="text-[11px] px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-800 dark:text-amber-300 font-medium"
                        >
                          ✦ {hl}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ----------------- ARTICLES ON SUBSTACK & LINKEDIN ----------------- */}
      <section className="px-6 max-w-6xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 font-mono">
              Thought Leadership & Góc nhìn chuyên gia
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
              Góc nhìn về AI & Tương lai Thiết kế
            </h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center space-x-1 text-sm font-semibold text-neutral-900 dark:text-white hover:opacity-75 transition-opacity mt-4 md:mt-0"
          >
            <span>Đọc tất cả bài viết</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentArticles.map((article) => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121316] hover:border-neutral-400 dark:hover:border-neutral-600 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                    article.platform === 'Substack'
                      ? 'bg-amber-100 text-amber-900 dark:bg-amber-950/60 dark:text-amber-300'
                      : 'bg-sky-100 text-sky-900 dark:bg-sky-950/60 dark:text-sky-300'
                  }`}>
                    Đọc trên {article.platform}
                  </span>
                  <span className="text-xs text-neutral-500 font-mono">{article.date}</span>
                </div>

                <h3 className="font-serif text-lg font-bold text-neutral-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-3 leading-relaxed font-light">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs text-neutral-500">
                <span>{article.readTime}</span>
                <span className="inline-flex items-center space-x-1 font-semibold text-neutral-900 dark:text-white group-hover:underline">
                  <span>Mở bài viết</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ----------------- WHY HIRE TRAN TIEU NGOC (RECRUITER PITCH) ----------------- */}
      <section className="px-6 max-w-6xl mx-auto">
        <div className="rounded-3xl p-10 md:p-16 bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest font-mono font-semibold opacity-75">
              Giá trị cốt lõi dành cho Đội ngũ Sản phẩm của bạn
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Tại sao chọn Trần Tiểu Ngọc cho vị trí AI Product Designer?
            </h2>
            <p className="text-sm md:text-base opacity-85 font-light leading-relaxed">
              Dù doanh nghiệp bạn đang xây dựng một ứng dụng AI từ số 0 hay cần tích hợp tính năng Copilot vào hệ sinh thái hiện tại — Tiểu Ngọc đem đến sự kết hợp hiếm có giữa gu thẩm mỹ cao cấp, tư duy sản phẩm và khả năng làm chủ công nghệ.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-neutral-800/80 dark:bg-neutral-200/80 space-y-2">
              <Zap className="w-5 h-5 text-amber-400 dark:text-amber-600" />
              <h4 className="font-serif font-bold text-base">Tăng tốc x3 Chu kỳ</h4>
              <p className="text-xs opacity-80 leading-relaxed font-light">
                Tự động hóa các bước moodboarding và tạo biến thể giao diện bằng AI, giải phóng thời gian cho UX research.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-800/80 dark:bg-neutral-200/80 space-y-2">
              <Bot className="w-5 h-5 text-amber-400 dark:text-amber-600" />
              <h4 className="font-serif font-bold text-base">Làm chủ HAII UX</h4>
              <p className="text-xs opacity-80 leading-relaxed font-light">
                Hiểu sâu sắc cách xây dựng niềm tin cho người dùng khi đối mặt với độ trễ và ảo giác thuật toán.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-800/80 dark:bg-neutral-200/80 space-y-2">
              <Code className="w-5 h-5 text-amber-400 dark:text-amber-600" />
              <h4 className="font-serif font-bold text-base">Code-Ready Prototype</h4>
              <p className="text-xs opacity-80 leading-relaxed font-light">
                Sử dụng v0.dev để tạo nguyên mẫu React tương tác thật, nói chung ngôn ngữ kỹ thuật với lập trình viên.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-800/80 dark:bg-neutral-200/80 space-y-2">
              <TrendingUp className="w-5 h-5 text-amber-400 dark:text-amber-600" />
              <h4 className="font-serif font-bold text-base">Tư duy Hướng Doanh thu</h4>
              <p className="text-xs opacity-80 leading-relaxed font-light">
                Thiết kế không chỉ để đẹp mắt, mà tập trung cải thiện các chỉ số Retention, CSAT và tỷ lệ chuyển đổi.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <span>Đặt lịch phỏng vấn / Trao đổi</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={profileData.resumeUrl}
              download
              className="inline-flex items-center space-x-2 px-6 py-4 rounded-full border border-neutral-700 dark:border-neutral-300 text-white dark:text-neutral-900 font-semibold text-sm hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Tải CV & Portfolio PDF</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
