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
  Layers,
  Wand2,
  Copy,
  Check,
  Zap,
  TrendingUp,
  SlidersHorizontal,
  Printer,
  Palette
} from 'lucide-react';

export const Home: React.FC = () => {
  const featuredProjects = projectsData.filter((p) => p.featured);
  const recentArticles = articlesData.slice(0, 3);
  
  // Interactive Design Lab state
  const [activeTab, setActiveTab] = useState<'apparel' | 'automation' | 'ai'>('apparel');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="space-y-24 md:space-y-36 pb-20 overflow-hidden">
      {/* ----------------- RECRUITER & CLIENT STATUS BAR ----------------- */}
      <aside aria-label="Thông báo tuyển dụng & hợp tác" className="border-b border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-100/60 dark:bg-neutral-900/60 backdrop-blur-sm py-2.5 px-6 text-xs transition-colors">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-2 text-neutral-700 dark:text-neutral-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-neutral-900 dark:text-white">Dành cho Đối tác & Nhà tuyển dụng:</span>
            <span className="hidden md:inline text-neutral-500 dark:text-neutral-400">|</span>
            <span className="hidden md:inline">Sẵn sàng cho cơ hội Senior Graphic Designer — Brand & E-commerce Visual, Apparel & Merchandise (Full-time & Freelance).</span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={profileData.resumeUrl}
              download
              className="inline-flex items-center space-x-1.5 font-semibold text-neutral-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Tải CV & Portfolio (PDF)</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-1 font-semibold text-neutral-900 dark:text-white hover:underline"
            >
              <span>Liên hệ hợp tác</span>
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
              <span>Trần Tiểu Ngọc (Mắt Gấu 🐻) • Senior Graphic Designer — Brand & E-commerce Visual</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.12]">
              Thiết kế Brand Visual, Apparel & E-commerce <span className="italic font-normal text-amber-700 dark:text-amber-400">bứt phá doanh số</span>.
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-light leading-relaxed max-w-2xl">
              Nữ Senior Designer cung Song Ngư kết hợp gu thẩm mỹ sắc bén cho từng insight khách hàng, nét vẽ Wacom chi tiết, và quy trình đồ họa tăng tốc bởi AI & Photoshop Scripts. Đã thực chiến cùng <strong className="font-medium text-neutral-900 dark:text-white">3500+ sản phẩm thương mại (Brand & E-commerce Visual, Apparel & POSM)</strong> tại Vani Ecommerce và tạo ra bộ sưu tập cán mốc <strong className="font-medium text-neutral-900 dark:text-white">$20,000+ doanh thu</strong> trong một quý.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-semibold text-sm hover:opacity-90 transition-opacity shadow-sm"
              >
                <span>Xem Dự Án & Bộ Sưu Tập</span>
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
                <span className="block text-2xl sm:text-3xl font-serif font-bold text-neutral-900 dark:text-white">3500+</span>
                <span className="text-xs text-neutral-500">Sản phẩm Brand & E-commerce US/EU</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-serif font-bold text-neutral-900 dark:text-white">$20,000+</span>
                <span className="text-xs text-neutral-500">Doanh thu 1 quý từ BST Thời trang</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-serif font-bold text-neutral-900 dark:text-white">-40%</span>
                <span className="text-xs text-neutral-500">Thời gian sản xuất nhờ PS Scripts</span>
              </div>
            </div>
          </div>

          {/* Right Visual Teaser: Showcase Card */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-3xl bg-neutral-900 text-white dark:bg-[#121316] dark:text-neutral-100 border border-neutral-800 shadow-2xl space-y-6 relative overflow-hidden group">
              {/* Subtle ambient blur */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500" />
                  <span className="w-3 h-3 rounded-full bg-amber-500" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono text-neutral-400 pl-2">Anime Streetwear Collection • 300 DPI</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Best Seller
                </span>
              </div>

              {/* Artwork Context */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                  Artwork Specification
                </span>
                <div className="p-3 rounded-xl bg-neutral-800/80 border border-neutral-700 text-xs font-mono text-neutral-200 flex items-center justify-between">
                  <span>&quot;Cyberpunk Neo-Tokyo Samurai Graphic Tee (Oversize Fit)&quot;</span>
                  <Zap className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 ml-2" />
                </div>
              </div>

              {/* Workflow Breakdown */}
              <div className="p-4 rounded-xl bg-neutral-800/40 border border-neutral-700/60 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center space-x-1.5 text-amber-400 font-mono">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Quy trình Thực chiến</span>
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400">In ấn: Chuẩn CMYK</span>
                </div>

                <div className="space-y-1.5 text-xs text-neutral-300 font-light">
                  <div className="flex items-center space-x-2 text-emerald-400 text-[11px]">
                    <Check className="w-3 h-3" />
                    <span>Vẽ minh họa chi tiết tay bằng bảng vẽ Wacom Tablet</span>
                  </div>
                  <div className="flex items-center space-x-2 text-emerald-400 text-[11px]">
                    <Check className="w-3 h-3" />
                    <span>Tự động hóa xuất 50+ file in và mockups bằng PS Script</span>
                  </div>
                </div>

                {/* Performance snippet */}
                <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-700 text-xs space-y-1">
                  <div className="flex justify-between items-center text-neutral-200">
                    <span className="font-semibold">Doanh thu quý 4/2025:</span>
                    <span className="text-emerald-400 font-mono">$20,000+ USD</span>
                  </div>
                  <p className="text-[11px] text-neutral-400">
                    Tỷ lệ đổi trả do lỗi in ấn &lt; 0.4% trên toàn bộ đơn hàng US.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 text-[11px] text-neutral-400 font-mono">
                <span className="flex items-center space-x-1 text-emerald-400">
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print-ready verified</span>
                </span>
                <Link
                  to="/projects/pod-anime-collection"
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

      {/* ----------------- INTERACTIVE DESIGN LAB ----------------- */}
      <section className="px-6 max-w-6xl mx-auto space-y-8">
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-200/70 dark:bg-neutral-800 text-xs font-mono text-neutral-700 dark:text-neutral-300">
            <SlidersHorizontal className="w-3.5 h-3.5 text-amber-500" />
            <span>Interactive Design Lab</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
            3 Trụ cột Năng lực Thực chiến của Tiểu Ngọc
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
            Nhấp chuột vào từng tab bên dưới để khám phá cách Tiểu Ngọc cân bằng giữa tính thẩm mỹ nghệ thuật, tốc độ tự động hóa và hiệu quả kinh doanh:
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 max-w-xl">
          {[
            { id: 'apparel', label: '1. Brand Visual & In ấn', icon: Printer },
            { id: 'automation', label: '2. Tự động hóa Photoshop', icon: Layers },
            { id: 'ai', label: '3. AI-First Workflow', icon: Wand2 }
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
          {activeTab === 'apparel' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-6 space-y-4">
                <span className="text-xs uppercase font-mono tracking-wider text-amber-600 dark:text-amber-400 font-semibold">
                  Chuyên sâu Brand & E-commerce Visual • POSM & In Ấn
                </span>
                <h3 className="font-serif text-2xl font-bold text-neutral-900 dark:text-white">
                  Làm chủ chất lượng in ấn từ file thiết kế đến thành phẩm
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
                  Thiết kế đồ họa thương mại và in ấn đòi hỏi hiểu biết sâu sắc về chất liệu, công nghệ in POSM/Offset/DTG và kiểm soát dải màu:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Chuẩn màu in ấn:</strong> Cân bằng RGB sang CMYK không bị xỉn, đen bệt.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Độ sắc nét 300 DPI:</strong> Vẽ tay Wacom đảm bảo chi tiết sắc sảo trên mọi ấn phẩm.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Đa dạng hạng mục:</strong> Key Visuals, POSM (Poster, Standee, Voucher, Packaging) & Apparel 2D/3D.</span>
                  </li>
                </ul>
              </div>

              <div className="md:col-span-6 p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-3 font-mono text-xs">
                <div className="text-neutral-400 text-[11px] pb-2 border-b border-neutral-200 dark:border-neutral-800 flex justify-between">
                  <span>File Output Checklist</span>
                  <span className="text-emerald-500">● 100% Pass Print QC</span>
                </div>
                <div className="p-3 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 space-y-2">
                  <p className="text-neutral-700 dark:text-neutral-200 font-sans text-xs">
                    &quot;Artwork_Samurai_PrintReady_4500x5400_300DPI.png&quot;
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-300 text-[10px] border border-amber-500/30">
                      Transparency Layer: Clean
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-[10px] border border-emerald-500/30">
                      Underbase Halftone: Ready
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'automation' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-6 space-y-4">
                <span className="text-xs uppercase font-mono tracking-wider text-amber-600 dark:text-amber-400 font-semibold">
                  Tự động hóa Quy trình Đồ họa
                </span>
                <h3 className="font-serif text-2xl font-bold text-neutral-900 dark:text-white">
                  Photoshop Actions & JavaScript Scripts giảm 40% thời gian
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
                  Thay vì tốn thời gian lặp đi lặp lại những thao tác thủ công, Tiểu Ngọc tự viết các script tùy biến để tăng năng suất cho toàn bộ nhóm:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Ghép Mockup 2D/3D hàng loạt:</strong> Tự động render 50+ mẫu lên đa góc độ chỉ trong 3 phút.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Đặt tên theo mã SKU:</strong> Xuất file có cấu trúc chuẩn nhà in không bị nhầm lẫn.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Giải phóng năng lượng sáng tạo:</strong> Dành thời gian tập trung vào ý tưởng và vẽ minh họa.</span>
                  </li>
                </ul>
              </div>

              <div className="md:col-span-6 p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-4 font-mono text-xs">
                <span className="text-neutral-400 text-[11px] block">Kịch bản tự động hóa (Scripts Preview):</span>
                <div className="space-y-2">
                  <div className="p-3 rounded-lg bg-neutral-200/60 dark:bg-neutral-800/80 flex items-center justify-between">
                    <span className="text-neutral-700 dark:text-neutral-300 text-[11px]">Batch_Mockup_Generator.jsx</span>
                    <span className="text-emerald-500 font-semibold">Running (50 items)</span>
                  </div>
                  <div className="p-3 rounded-lg bg-neutral-200/60 dark:bg-neutral-800/80 flex items-center justify-between">
                    <span className="text-neutral-700 dark:text-neutral-300 text-[11px]">Auto_Color_Separator.atn</span>
                    <span className="text-amber-500 font-semibold">Done in 1.2s</span>
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-[11px] flex justify-between items-center">
                    <span>Thời gian tiết kiệm tuần này:</span>
                    <span className="font-bold">~16 giờ làm việc</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ai' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-6 space-y-4">
                <span className="text-xs uppercase font-mono tracking-wider text-amber-600 dark:text-amber-400 font-semibold">
                  Human-Crafted, AI-Accelerated (30% AI — 70% Con người)
                </span>
                <h3 className="font-serif text-2xl font-bold text-neutral-900 dark:text-white">
                  AI tăng tốc 3× khâu ý tưởng, nhưng gu thẩm mỹ con người quyết định doanh số
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
                  Tiểu Ngọc làm chủ hệ sinh thái Adobe Firefly, Generative Fill, FLUX.1, Banana Pro, Topview AI, CapCut Pro và Canva Pro như động cơ trợ lực, nhưng tuyệt đối không để công cụ thay thế gu thẩm mỹ riêng:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Thấu cảm insight con người:</strong> Con người hiểu góc nhìn và cảm xúc của khách hàng sâu sắc hơn mọi thuật toán AI.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Làm chủ công cụ (Chống &quot;AI Slop&quot;):</strong> Dùng AI thử nghiệm nhanh ánh sáng/bố cục, sau đó vẽ tay Wacom 100% nét chính và tinh chỉnh Typography.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Đa kênh thần tốc:</strong> Kết hợp AI Upscaling chuẩn 300 DPI với Topview AI, CapCut Pro & Canva Pro để nhân bản ấn phẩm quảng cáo.</span>
                  </li>
                </ul>
              </div>

              <div className="md:col-span-6 p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-3 font-mono text-xs">
                <div className="text-neutral-400 text-[11px] pb-2 border-b border-neutral-200 dark:border-neutral-800 flex justify-between">
                  <span>Human-in-the-Loop Pipeline</span>
                  <span className="text-amber-500">Firefly / FLUX.1 + Wacom + Topview AI</span>
                </div>
                <div className="p-3 rounded-lg bg-neutral-900 text-neutral-200 text-[11px] space-y-1">
                  <span className="text-amber-400">&gt; Triết lý cốt lõi:</span>
                  <p className="font-sans text-neutral-300 italic leading-relaxed">
                    &quot;{profileData.aiPhilosophy.coreBelief}&quot;
                  </p>
                </div>
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 text-[11px] flex items-center justify-between">
                  <span>Hậu kỳ vẽ tay Wacom, tách lớp 300 DPI & xuất Video Ads: Hoàn tất</span>
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
              Quy trình phát triển sản phẩm • {profileData.aiPhilosophy.ratio}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
              Quy trình Thiết kế Brand & E-commerce Visual Tăng cường bởi AI & Scripts
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
              Cách Tiểu Ngọc kết hợp sự thấu cảm insight khách hàng, nét vẽ Wacom thủ công (70%) cùng hệ sinh thái AI & Tự động hóa (30%) để sản xuất hàng ngàn ấn phẩm thương mại chất lượng cao.
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

          {/* Callout: Why AI Cannot Completely Replace Designers */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#121316] border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200 dark:border-neutral-800 pb-6">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-semibold block">
                  {profileData.aiPhilosophy.badge}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
                  {profileData.aiPhilosophy.headline}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 italic font-serif">
                  &ldquo;{profileData.aiPhilosophy.coreBelief}&rdquo;
                </p>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-semibold hover:opacity-90 transition-opacity self-start md:self-center flex-shrink-0"
              >
                <span>Xem toàn bộ Tech Stack & Hồ sơ</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {profileData.aiPhilosophy.pillars.map((pillar) => (
                <div key={pillar.title} className="space-y-2">
                  <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400 font-semibold block">
                    {pillar.subtitle}
                  </span>
                  <h4 className="font-serif text-base font-bold text-neutral-900 dark:text-white">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- FEATURED CASE STUDIES ----------------- */}
      <section className="px-6 max-w-6xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 font-mono">
              Minh chứng thực tế
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
              Dự Án Brand & E-commerce Visual Tiêu Biểu
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light max-w-xl">
              Những dự án thiết kế thương hiệu, ấn phẩm thương mại và chiến dịch truyền thông mang lại hiệu quả doanh số thực tế.
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

                {/* Highlights Tags */}
                {project.aiHighlights && project.aiHighlights.length > 0 && (
                  <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800/80 space-y-1.5">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 block font-semibold">
                      Điểm nhấn chuyên môn:
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
              Góc Chia Sẻ & Nhật Ký Làm Nghề
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
              Kinh Nghiệm Thực Chiến Brand Visual, AI & Tâm Sự Nghề Đồ Họa
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

      {/* ----------------- WHY WORK WITH TRAN TIEU NGOC ----------------- */}
      <section className="px-6 max-w-6xl mx-auto">
        <div className="rounded-3xl p-10 md:p-16 bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest font-mono font-semibold opacity-75">
              Giá trị cốt lõi mang lại cho Doanh nghiệp & Thương hiệu của bạn
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Tại sao chọn Trần Tiểu Ngọc cho dự án Brand & E-commerce Visual?
            </h2>
            <p className="text-sm md:text-base opacity-85 font-light leading-relaxed">
              Dù bạn là một Store E-commerce quốc tế đang cần bộ sưu tập áo thun bùng nổ doanh số hay một thương hiệu thời trang mới cần xây dựng hệ thống nhận diện độc bản — Tiểu Ngọc mang đến sự kết hợp trọn vẹn giữa gu thẩm mỹ tinh tế, nét vẽ Wacom chi tiết, và tốc độ sản xuất thần tốc nhờ tự động hóa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-neutral-800/80 dark:bg-neutral-200/80 space-y-2">
              <Zap className="w-5 h-5 text-amber-400 dark:text-amber-600" />
              <h4 className="font-serif font-bold text-base">Tốc độ Siêu Nhanh</h4>
              <p className="text-xs opacity-80 leading-relaxed font-light">
                Tự động hóa bằng PS Scripts & AI giúp xuất hàng trăm file in và mockup chỉ trong vài phút.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-800/80 dark:bg-neutral-200/80 space-y-2">
              <Palette className="w-5 h-5 text-amber-400 dark:text-amber-600" />
              <h4 className="font-serif font-bold text-base">Vẽ Tay Wacom Tỉ Mỉ</h4>
              <p className="text-xs opacity-80 leading-relaxed font-light">
                Mỗi chi tiết đều được trau chuốt kỹ lưỡng với nét vẽ sống động, không bị đại trà.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-800/80 dark:bg-neutral-200/80 space-y-2">
              <Printer className="w-5 h-5 text-amber-400 dark:text-amber-600" />
              <h4 className="font-serif font-bold text-base">Chuẩn In Ấn 100%</h4>
              <p className="text-xs opacity-80 leading-relaxed font-light">
                Am hiểu sâu sắc hệ màu CMYK và kỹ thuật in DTG, tỷ lệ hoàn trả do lỗi in dưới 0.4%.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-800/80 dark:bg-neutral-200/80 space-y-2">
              <TrendingUp className="w-5 h-5 text-amber-400 dark:text-amber-600" />
              <h4 className="font-serif font-bold text-base">Tư duy Doanh số</h4>
              <p className="text-xs opacity-80 leading-relaxed font-light">
                Thiết kế không chỉ để trưng bày mà nhắm thẳng vào insight khách hàng để chuyển đổi ra đơn hàng.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <span>Liên hệ Hợp tác ngay</span>
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
