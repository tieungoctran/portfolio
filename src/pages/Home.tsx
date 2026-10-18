import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { profileData } from '../data/profile';
import { projectsData, type Project } from '../data/projects';
import { articlesData } from '../data/articles';
import { ArrowRight, ArrowUpRight, Mail } from 'lucide-react';
import { Copy, Check } from 'lucide';
import { MorphIcon } from 'morphicons/react';
import { CmykStrip, CropMarks, PenCircle, PenLeader, RegistrationMark } from '../components/print/PrintMarks';
import { usePageMeta } from '../lib/page-meta';
import { useCountUp } from '../lib/motion';
import { Reveal } from '../components/motion/Reveal';
import { CountUp } from '../components/motion/CountUp';

// Measured results only (PRODUCT.md): never add self-scored or unverified numbers here.
const proofSpecs = [
  { value: '~$25K', label: 'Lợi nhuận team D2C trong Q4/2025, dự án 3 thương hiệu E-commerce' },
  { value: '−40%', label: 'Thời gian sản xuất nhờ Photoshop Actions & Scripts tự viết' },
  { value: '<0.4%', label: 'Tỷ lệ hoàn trả do lỗi in trên đơn hàng US/EU' },
  { value: '28%', label: 'Tỷ lệ mở email Klaviyo, cao hơn chuẩn ngành 21%' },
];

const separations = [
  {
    id: 'cyan',
    letter: 'C',
    ink: '#3fa7cf',
    tab: 'Sản phẩm POD & In ấn',
    heading: '5,000+ sản phẩm in, file nào cũng soi màu trước khi ra xưởng',
    body: 'Áo, mũ, cốc, giày, thảm, home & living và poster cho các niche Anime, Racing, Sport, Music, bán cho khách Mỹ và Châu Âu. Mình vẽ hoàn thiện trên Wacom, rồi kiểm tra chế bản kỹ trước khi gửi xưởng.',
    spec: [
      ['Hệ màu', 'CMYK / RGB 300 DPI'],
      ['Tách lớp', 'Halftone cho DTG & All-Over-Print'],
      ['Lỗi in', 'Tỷ lệ hoàn trả dưới 0.4%'],
      ['Thị trường', 'Mỹ (US) & Châu Âu (EU)'],
    ],
  },
  {
    id: 'magenta',
    letter: 'M',
    ink: '#c8467f',
    tab: 'Banner quảng cáo & Email',
    heading: 'Từ feed Facebook đến header email, cùng một bộ nhận diện',
    body: 'Banner Facebook & Google Ads, banner website và header email Klaviyo mình làm chung một bộ, để khách lướt tới đâu cũng nhận ra thương hiệu.',
    spec: [
      ['Quảng cáo', 'Facebook Ads, Google Ads'],
      ['Website', 'Banner cho Shopify, WooCommerce, Etsy, Amazon'],
      ['Email', '15+ mẫu Klaviyo, tỷ lệ mở trung bình 28%'],
      ['Mockup', 'Phối cảnh 2D/3D & POSM'],
    ],
  },
  {
    id: 'yellow',
    letter: 'Y',
    ink: '#e8c547',
    tab: 'AI có gu',
    heading: 'AI lo tốc độ, mình lo cái hồn',
    body: 'AI giúp mình thử moodboard và biến thể nhanh gấp 3 lần. Quyết định thẩm mỹ và nét hoàn thiện cuối cùng thì luôn do tay mình làm trên Wacom, nên sản phẩm vẫn độc bản và an toàn bản quyền.',
    spec: [
      ['Lên ý tưởng', 'Adobe Firefly, ChatGPT Image, Gemini, FLUX.1'],
      ['Trợ lý', 'Claude, AI Agent'],
      ['Tốc độ', 'Nhanh gấp 3 lần'],
      ['Hoàn thiện', 'Thủ công trên bảng vẽ Wacom'],
    ],
  },
  {
    id: 'black',
    letter: 'K',
    ink: '#121212',
    tab: 'Tự động hóa Photoshop',
    heading: 'Việc lặp lại giao cho script, mình giữ phần vẽ',
    body: 'Mình tự viết Photoshop Actions và ExtendScript để ghép mockup 2D/3D hàng loạt, xuất file in 300 DPI và đặt tên theo SKU cho cả team.',
    spec: [
      ['Công cụ', 'Actions (.atn), Scripts (.jsx)'],
      ['Thời gian sản xuất', 'Giảm ~40%'],
      ['Lỗi đặt tên file', 'Giảm 99%'],
      ['Đầu ra', 'File in 300 DPI đặt tên theo SKU'],
    ],
  },
] as const;

const reasons = [
  { title: 'Việc lặp lại giao cho script', text: 'Photoshop Actions & Scripts mình tự viết giúp cả team bớt ~40% thời gian sản xuất, và lỗi đặt tên file giảm 99%.' },
  { title: 'Nét vẽ từ bút Wacom', text: 'Từng chi tiết trên áo, cốc, poster đều vẽ tay trên Wacom, nên sản phẩm có nét riêng, ít bị đụng hàng.' },
  { title: 'File ra xưởng đúng màu', text: 'Mình rành CMYK và tách halftone cho DTG, nên tỷ lệ hoàn trả do lỗi in dưới 0.4%.' },
  { title: 'Thiết kế để khách bấm mua', text: 'Mình bắt đầu từ insight khách hàng rồi mới chọn màu và bố cục. Đẹp mà không ai bấm mua thì mình chưa hài lòng.' },
];

const plateGhosts = [
  { color: '#3fa7cf', x: '-7px', y: '-5px' },
  { color: '#c8467f', x: '8px', y: '-3px' },
  { color: '#e8c547', x: '-4px', y: '7px' },
];

// Keeps hyphenated compounds such as "E-commerce" from breaking at the hyphen
const keepCompounds = (text: string): React.ReactNode =>
  text.split(/(E-commerce|E-Commerce|2D\/3D)/).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="whitespace-nowrap">
        {part}
      </span>
    ) : (
      part
    )
  );

// Mobile: horizontal snap rail that bleeds to the screen edge; from the given breakpoint it becomes a grid
const swipeRail = "flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain gap-4 -mx-4 px-4 pb-3 scroll-px-4 sm:-mx-6 sm:px-6 sm:scroll-px-6";
const swipeItem = "snap-start shrink-0 w-[84%] sm:w-[60%]";

const sectionShell = 'max-w-6xl mx-auto px-4 sm:px-6';

const SectionHead: React.FC<{ id: string; title: string; intro?: string; link?: { to: string; label: string } }> = ({
  id,
  title,
  intro,
  link,
}) => (
  <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-4 items-end mb-8 sm:mb-14">
    <h2 id={id} className="lg:col-span-7 font-heading font-bold text-3xl sm:text-4xl leading-[1.2] sm:leading-[1.2] text-ink dark:text-paper">
      {keepCompounds(title)}
    </h2>
    <div className="lg:col-span-5 space-y-3">
      {intro && <p className="text-[15px] leading-relaxed text-paper-text dark:text-editorial-textDark">{intro}</p>}
      {link && (
        <Link
          to={link.to}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink dark:text-paper underline decoration-brand-500 dark:decoration-brand-300 decoration-2 hover:text-brand-600 dark:hover:text-brand-300"
        >
          {link.label}
          <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  </Reveal>
);

// Stock covers stand in until Ngoc's own mockups arrive; label them so they are never read as her work
const isPlaceholderImage = (url: string) => url.includes('images.unsplash.com');

const ProofCard: React.FC<{ project: Project; lead?: boolean }> = ({ project, lead = false }) => (
  <Link
    to={`/projects/${project.slug}`}
    className={`group grid gap-6 ${lead ? 'lg:grid-cols-12 lg:gap-10 items-center' : 'grid-cols-1'}`}
  >
    <div className={`relative m-5 ${lead ? 'lg:col-span-7' : ''}`}>
      <CropMarks offset={6} length={12} />
      <div className="aspect-[16/10] overflow-hidden bg-paper-beige dark:bg-editorial-cardDark">
        <img
          src={project.coverImage}
          alt={`${project.title}: dự án thiết kế đồ họa E-commerce của Trần Tiểu Ngọc`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <p className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 pt-2 text-[11px] tabular-nums text-paper-muted dark:text-editorial-textDark">
        <span className="inline-flex items-center gap-1.5">
          <RegistrationMark className="w-3 h-3" />
          {project.category} · {project.year}
        </span>
        {isPlaceholderImage(project.coverImage) && <span>Ảnh minh họa tạm thời</span>}
      </p>
    </div>
    <div className={`space-y-3 px-1 ${lead ? 'lg:col-span-5' : ''}`}>
      <h3
        className={`font-heading font-bold leading-snug text-ink dark:text-paper group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors ${
          lead ? "text-2xl sm:text-3xl sm:leading-snug" : "text-xl sm:text-2xl sm:leading-snug"
        }`}
      >
        {keepCompounds(project.title)}
      </h3>
      <p className="text-sm leading-relaxed text-paper-text dark:text-editorial-textDark line-clamp-3">{project.subtitle}</p>
      {project.aiHighlights.length > 0 && (
        <ul className="space-y-1.5 pt-1">
          {project.aiHighlights.slice(0, 2).map((hl) => (
            <li key={hl} className="flex gap-2.5 text-[13px] leading-snug text-paper-text dark:text-editorial-textDark">
              <span aria-hidden="true" className="mt-[5px] w-1.5 h-1.5 flex-shrink-0 bg-brand-500 dark:bg-brand-300" />
              <span>{hl}</span>
            </li>
          ))}
        </ul>
      )}
      <span className="inline-flex items-center gap-1.5 pt-1 text-sm font-semibold text-ink dark:text-paper">
        Xem case study
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </div>
  </Link>
);

export const Home: React.FC = () => {
  usePageMeta(
    'Trần Tiểu Ngọc | Senior Graphic Designer E-commerce, TP.HCM',
    'Trần Tiểu Ngọc, Senior Graphic Designer (E-commerce) tại TP.HCM. Thiết kế sản phẩm Print-on-Demand, banner Facebook & Google Ads, mockup 2D/3D, 5,000+ thiết kế.'
  );
  const featuredProjects = projectsData.filter((p) => p.featured);
  const [leadProject, ...otherProjects] = featuredProjects;
  const recentArticles = articlesData.slice(0, 3);

  const [activePlate, setActivePlate] = useState(0);
  const [plateSwitched, setPlateSwitched] = useState(false);
  // The display numeral counts up while its separations slide into register (same clock as plate-register)
  const heroCount = useCountUp('5,000+', true, { delay: 250, duration: 1100 });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      window.location.href = `mailto:${profileData.email}`;
    }
  };

  const handleTabKey = (event: React.KeyboardEvent, index: number) => {
    const last = separations.length - 1;
    let next: number | null = null;
    if (event.key === 'ArrowRight') next = index === last ? 0 : index + 1;
    if (event.key === 'ArrowLeft') next = index === 0 ? last : index - 1;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = last;
    if (next === null) return;
    event.preventDefault();
    selectPlate(next);
    tabRefs.current[next]?.focus();
  };

  const selectPlate = (index: number) => {
    setActivePlate(index);
    setPlateSwitched(true);
  };

  const plate = separations[activePlate];

  return (
    <div>
      {/* Proof sheet: the measured results printed as the artwork */}
      <section aria-labelledby="hero-title" className="bg-paper-beige dark:bg-editorial-dark overflow-hidden">
        <div className={`${sectionShell} pt-5 pb-16 sm:pb-20`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-paper-text dark:text-editorial-textDark">
            <p className="flex items-center gap-2">
              <span aria-hidden="true" className="w-2 h-2 rounded-full bg-[#3f9a6b]" />
              <span className="font-semibold text-ink dark:text-paper">{profileData.jobPreferences.status}</span>
              <span className="hidden md:inline">· sẵn sàng nhận việc trong 2–4 tuần</span>
            </p>
            <Link to="/contact" className="inline-flex items-center gap-1 font-semibold text-ink dark:text-paper hover:text-brand-600 dark:hover:text-brand-300">
              Liên hệ hợp tác
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="relative mt-9 sm:mt-11 mx-5 sm:mx-8">
            <CropMarks offset={8} length={14} />
            <div className="relative bg-paper dark:bg-editorial-surfaceDark shadow-[0_24px_48px_-28px_rgba(18,18,18,0.45)] dark:shadow-[0_24px_48px_-28px_rgba(0,0,0,0.9)]">
              <CmykStrip className="h-2 lg:hidden" />
              <CmykStrip orientation="vertical" className="hidden lg:flex absolute right-0 inset-y-0 w-2.5" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 px-6 sm:px-10 lg:pr-16 pt-9 sm:pt-12 pb-10">
                <div className="lg:col-span-8 min-w-0">
                  <h1 id="hero-title" className="font-heading font-bold text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.15] tracking-[-0.03em] text-ink dark:text-paper">
                    Trần Tiểu Ngọc
                  </h1>
                  <p className="mt-2 font-heading font-semibold text-base sm:text-lg text-brand-600 dark:text-brand-300">
                    {keepCompounds(profileData.role)}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-paper-text dark:text-editorial-textDark max-w-xl">
                    {profileData.subRole}
                  </p>

                  <div className="mt-10 sm:mt-14">
                    <div className="relative inline-block px-3">
                      <span className="relative block font-heading font-extrabold leading-[0.85] tracking-[-0.04em] tabular-nums text-[clamp(4rem,11vw,6rem)] text-ink dark:text-paper">
                        <span className="invisible" aria-hidden="true">5,000+</span>
                        <span className="absolute left-0 top-0" aria-hidden="true">{heroCount}</span>
                        <span className="sr-only">5,000+</span>
                        {plateGhosts.map((g) => (
                          <span
                            key={g.color}
                            aria-hidden="true"
                            className="plate-ghost absolute inset-0 mix-blend-multiply dark:mix-blend-screen"
                            style={{ color: g.color, ['--plate-x' as string]: g.x, ['--plate-y' as string]: g.y }}
                          >
                            {heroCount}
                          </span>
                        ))}
                      </span>
                      <PenCircle className="absolute -left-5 -top-7 w-[calc(100%+2.5rem)] h-[calc(100%+3.5rem)] text-brand-500 dark:text-brand-300" />
                    </div>
                    <div className="flex items-start gap-1.5 sm:gap-2 mt-2 sm:pl-[min(42%,16rem)]">
                      <PenLeader className="w-9 h-7 sm:w-14 sm:h-10 -mt-2 sm:-mt-3 flex-shrink-0 rotate-180 text-brand-500 dark:text-brand-300" />
                      <p className="pt-3 sm:pt-4 whitespace-nowrap font-hand text-[1.375rem] sm:text-[2rem] leading-none text-brand-600 dark:text-brand-300 -rotate-2 origin-left">
                        từng file đều qua tay mình
                      </p>
                    </div>
                  </div>
                  <p className="mt-6 sm:mt-3 text-[15px] leading-relaxed text-paper-text dark:text-editorial-textDark max-w-md">
                    sản phẩm in POD mình thiết kế cho khách Mỹ và Châu Âu, qua 4+ năm ở Vani Ecommerce.
                  </p>

                  <blockquote className="mt-10 pt-6 border-t border-paper-line dark:border-editorial-borderDark max-w-2xl">
                    <p className="font-quote italic text-lg sm:text-xl leading-snug text-ink dark:text-paper">
                      Dùng AI có gu, tạo sản phẩm có hồn, không rập khuôn.
                    </p>
                    <p className="font-quote italic mt-1 text-sm text-paper-muted dark:text-editorial-textDark">
                      AI with taste, design with soul. Never AI slop.
                    </p>
                  </blockquote>
                </div>

                <div className="lg:col-span-4 flex flex-col lg:border-l border-paper-line dark:border-editorial-borderDark lg:pl-8">
                  <h2 className="font-heading text-sm font-semibold text-ink dark:text-paper">Thông số bản in</h2>
                  <dl className="mt-2 grid grid-cols-2 gap-x-5 lg:grid-cols-1 lg:divide-y divide-paper-line dark:divide-editorial-borderDark">
                    {proofSpecs.map((spec, i) => (
                      <div key={spec.value} className="flex flex-col-reverse justify-end py-3 lg:py-4 border-t border-paper-line dark:border-editorial-borderDark lg:border-t-0">
                        <dt className="mt-1 text-[13px] leading-snug text-paper-text dark:text-editorial-textDark">{keepCompounds(spec.label)}</dt>
                        <dd className="font-heading font-bold text-[1.75rem] lg:text-3xl tracking-[-0.02em] tabular-nums text-ink dark:text-paper">
                          <CountUp value={spec.value} delay={i * 90} />
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-6 lg:mt-auto space-y-3">
                    <a
                      href={profileData.cvRequestUrl}
                      className="flex items-center justify-between gap-3 px-5 py-3.5 rounded-sm bg-ink text-paper dark:bg-paper dark:text-ink font-semibold text-sm hover:bg-brand-600 dark:hover:bg-brand-300 transition-colors"
                    >
                      <span className="inline-flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Xin CV qua email
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <Link
                      to="/projects"
                      className="flex items-center justify-between gap-3 px-5 py-3.5 rounded-sm border border-ink dark:border-paper text-ink dark:text-paper font-semibold text-sm hover:bg-paper-beige dark:hover:bg-editorial-cardDark transition-colors"
                    >
                      Xem dự án & case study
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 text-xs text-paper-text dark:text-editorial-textDark hover:text-ink dark:hover:text-paper"
                    >
                      <MorphIcon icon={copiedEmail ? Check : Copy} size={14} reducedMotion="user" className={copiedEmail ? 'text-[#3f9a6b]' : undefined} />
                      <span aria-live="polite">{copiedEmail ? 'Đã sao chép email' : `Sao chép ${profileData.email}`}</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="border-t border-paper-line dark:border-editorial-borderDark px-6 sm:px-10 lg:pr-16 py-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-[11px] tabular-nums text-paper-muted dark:text-editorial-textDark">
                <span className="inline-flex items-center gap-1.5">
                  <RegistrationMark className="w-3 h-3" />
                  Tờ in thử TN·2026
                </span>
                <span>Vani Ecommerce · 08/2022 – nay</span>
                <span>HCMUTE · Thiết kế Đồ họa 2018 – 2022</span>
                <span>Thủ Đức, TP. Hồ Chí Minh</span>
                <span>CMYK · 300 DPI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separations: four competencies as the four process plates */}
      <section aria-labelledby="separations-title" className={`${sectionShell} py-14 sm:py-28`}>
        <SectionHead
          id="separations-title"
          title="Bốn việc mình làm, chồng khít như bốn bản màu in"
          intro="File in bốn màu thì bản nào cũng có phần việc của nó, lệch một bản là ra bản in xấu. Việc của mình cũng vậy: bốn phần chồng khít vào nhau mới thành sản phẩm vừa đẹp vừa ra đơn."
        />

        <div role="tablist" aria-label="Năng lực theo bản tách màu" className="grid grid-cols-2 lg:grid-cols-4 border-t border-paper-line dark:border-editorial-borderDark">
          {separations.map((sep, i) => {
            const selected = i === activePlate;
            return (
              <button
                key={sep.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                id={`tab-${sep.id}`}
                aria-selected={selected}
                aria-controls={`panel-${sep.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => selectPlate(i)}
                onKeyDown={(e) => handleTabKey(e, i)}
                className={`relative flex items-center gap-3 text-left px-3 sm:px-4 py-4 -mt-px border-t-[3px] transition-colors ${
                  selected
                    ? 'bg-paper-beige dark:bg-editorial-surfaceDark text-ink dark:text-paper'
                    : 'border-transparent text-paper-text dark:text-editorial-textDark hover:bg-paper-beige/60 dark:hover:bg-editorial-surfaceDark/60'
                }`}
                style={{ borderTopColor: selected ? (sep.id === 'black' ? 'currentColor' : sep.ink) : undefined }}
              >
                <span
                  aria-hidden="true"
                  className={`flex-shrink-0 w-7 h-7 grid place-items-center font-heading font-bold text-[13px] ${sep.id === 'black' ? 'dark:ring-1 dark:ring-paper/40' : ''}`}
                  style={{ backgroundColor: sep.ink, color: sep.id === 'yellow' ? '#121212' : '#fdfbf7' }}
                >
                  {sep.letter}
                </span>
                <span className="text-[13px] sm:text-sm font-semibold leading-tight">{sep.tab}</span>
              </button>
            );
          })}
        </div>

        <div
          key={plate.id}
          role="tabpanel"
          id={`panel-${plate.id}`}
          aria-labelledby={`tab-${plate.id}`}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-10 bg-paper-beige dark:bg-editorial-surfaceDark px-6 sm:px-10 py-10 sm:py-12 ${plateSwitched ? 'plate-print' : ''}`}
        >
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-heading font-bold text-2xl sm:text-[1.75rem] leading-snug text-ink dark:text-paper">{plate.heading}</h3>
            <p className="text-[15px] leading-relaxed text-paper-text dark:text-editorial-textDark max-w-[62ch]">{plate.body}</p>
          </div>
          <div className="lg:col-span-5 relative">
            <dl className="relative bg-paper dark:bg-editorial-dark border border-paper-line dark:border-editorial-borderDark divide-y divide-paper-line dark:divide-editorial-borderDark">
              {plate.spec.map(([key, value]) => (
                <div key={key} className="grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-4 px-4 py-3 text-[13px]">
                  <dt className="text-paper-muted dark:text-editorial-textDark">{key}</dt>
                  <dd className="font-semibold text-ink dark:text-paper">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Press run: the workflow as stations on one line */}
      <section aria-labelledby="workflow-title" className="bg-paper-beige dark:bg-editorial-surfaceDark">
        <div className={`${sectionShell} py-14 sm:py-28`}>
          <SectionHead
            id="workflow-title"
            title="Từ ý tưởng đến file in hàng loạt"
            intro="Bốn bước mình đi qua với từng sản phẩm: tìm insight, thử ý tưởng cùng AI, hoàn thiện bằng tay, rồi để script lo phần lặp lại."
          />

          <ol aria-label="Các bước trong quy trình" className={`${swipeRail} lg:grid lg:grid-cols-4 lg:gap-8 lg:overflow-visible lg:mx-0 lg:px-0 lg:pb-0`}>
            {profileData.aiWorkflow.map((step, i) => (
              <Reveal as="li" key={step.phase} delay={i * 90} className={`${swipeItem} lg:w-auto relative pt-10 space-y-2.5`}>
                <span aria-hidden="true" className="press-line absolute left-0 -right-4 lg:-right-8 top-[9px] h-px bg-ink/25 dark:bg-paper/20" />
                <span className="absolute left-0 top-0 bg-paper-beige dark:bg-editorial-surfaceDark">
                  <RegistrationMark className="w-5 h-5 text-ink dark:text-paper" />
                </span>
                <h3 className="font-heading font-bold text-lg leading-snug text-ink dark:text-paper">{step.title}</h3>
                <p className="text-sm leading-relaxed text-paper-text dark:text-editorial-textDark">{step.description}</p>
                <p className="text-xs text-paper-muted dark:text-editorial-textDark">{step.tools.join(' · ')}</p>
              </Reveal>
            ))}
          </ol>

          <Reveal as="figure" className="mt-12 sm:mt-24 pt-10 sm:pt-12 border-t border-ink/15 dark:border-paper/15">
            <blockquote className="font-quote italic text-[clamp(1.35rem,2.6vw,2rem)] leading-snug text-ink dark:text-paper max-w-4xl">
              {profileData.aiPhilosophy.coreBelief}
            </blockquote>
            <figcaption className="mt-4 font-hand text-[2.25rem] leading-none text-brand-600 dark:text-brand-300">Tiểu Ngọc</figcaption>
          </Reveal>

          <div className={`mt-10 sm:mt-14 ${swipeRail} md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:mx-0 md:px-0 md:pb-0`}>
            {profileData.aiPhilosophy.pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 90} className={`${swipeItem} md:w-auto pt-5 border-t border-ink/15 dark:border-paper/15 space-y-2`}>
                <h3 className="font-heading font-bold text-base leading-snug text-ink dark:text-paper">{pillar.title.replace(/^\d+\.\s*/, '')}</h3>
                <p className="text-xs font-semibold text-brand-600 dark:text-brand-300">{pillar.subtitle}</p>
                <p className="text-sm leading-relaxed text-paper-text dark:text-editorial-textDark">{pillar.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approved proofs: featured case studies */}
      <section aria-labelledby="projects-title" className={`${sectionShell} py-14 sm:py-28`}>
        <SectionHead
          id="projects-title"
          title="Dự án E-commerce mình đã làm, kèm con số"
          intro="Mỗi dự án kể lại bài toán, cách mình giải và con số sau cùng."
          link={{ to: '/projects', label: `Tất cả dự án (${projectsData.length})` }}
        />
        <div className={`${swipeRail} md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-20 md:overflow-visible md:mx-0 md:px-0 md:pb-0`}>
          {leadProject && (
            <Reveal className={`${swipeItem} md:w-auto md:col-span-2`}>
              <ProofCard project={leadProject} lead />
            </Reveal>
          )}
          {otherProjects.map((project, i) => (
            <Reveal key={project.id} delay={i * 90} className={`${swipeItem} md:w-auto`}>
              <ProofCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Reading index: latest writing */}
      <section aria-labelledby="journal-title" className={`${sectionShell} pb-14 sm:pb-28`}>
        <SectionHead
          id="journal-title"
          title="Nhật ký làm nghề"
          intro="Chuyện làm E-commerce Design, dùng AI và vài tâm sự của người làm đồ họa, mình viết trên Substack và LinkedIn."
          link={{ to: '/blog', label: 'Đọc tất cả bài viết' }}
        />
        <ul className="border-t border-paper-line dark:border-editorial-borderDark divide-y divide-paper-line dark:divide-editorial-borderDark">
          {recentArticles.map((article, i) => (
            <Reveal as="li" key={article.id} delay={i * 60}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-2 py-5 sm:py-7"
              >
                <p className="order-2 md:order-none md:col-span-2 text-xs tabular-nums text-paper-muted dark:text-editorial-textDark">
                  <span className="font-semibold text-ink dark:text-paper">{article.platform}</span>
                  <span className="md:hidden"> · </span>
                  <span className="md:block md:mt-0.5">{article.date}</span>
                </p>
                <div className="order-1 md:order-none md:col-span-8 space-y-2">
                  <h3 className="font-heading font-semibold text-lg leading-snug text-ink dark:text-paper group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-paper-text dark:text-editorial-textDark hidden sm:block line-clamp-2 max-w-[70ch]">{article.excerpt}</p>
                </div>
                <p className="order-3 md:order-none md:col-span-2 md:text-right text-xs text-paper-muted dark:text-editorial-textDark inline-flex md:justify-end items-start gap-1.5">
                  {article.readTime}
                  <ArrowUpRight className="w-3.5 h-3.5 text-ink dark:text-paper transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  <span className="sr-only">(mở trong tab mới)</span>
                </p>
              </a>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Sign-off: the approval block */}
      <section aria-labelledby="signoff-title" className={sectionShell}>
        <Reveal className="relative bg-ink text-paper dark:bg-editorial-cardDark">
          <CmykStrip className="h-1.5" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 px-5 sm:px-10 lg:px-14 py-10 sm:py-16">
            <div className="lg:col-span-8">
              <h2 id="signoff-title" className="font-heading font-bold text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.2] sm:leading-[1.2]">
                Có brief là mình làm, từ file in đến banner quảng cáo
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-paper/80 max-w-[62ch]">
                Cần một bộ sưu tập POD cho store quốc tế, hay bộ banner cho một thương hiệu mới? Mình nhận cả hai. Mình làm sao cho vừa đẹp vừa ra đơn, và kịp tiến độ mùa sale Q3 đến Q4.
              </p>
              <dl className="mt-8 sm:mt-10 grid grid-cols-2 gap-x-5 sm:gap-x-8 gap-y-6">
                {reasons.map((reason) => (
                  <div key={reason.title} className="pt-4 border-t border-paper/20">
                    <dt className="font-heading font-semibold text-[15px] sm:text-base">{reason.title}</dt>
                    <dd className="mt-1 text-[13px] sm:text-sm leading-relaxed text-paper/75">{reason.text}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a
                  href={profileData.cvRequestUrl}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-paper text-ink font-semibold text-sm hover:bg-brand-300 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Xin CV qua email
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm border border-paper/40 font-semibold text-sm hover:border-paper transition-colors"
                >
                  Liên hệ hợp tác
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <figure className="lg:col-span-4 self-end max-w-[13rem] sm:max-w-xs w-full mx-auto lg:mx-0">
              <div className="relative m-4">
                <CropMarks offset={6} length={12} className="text-paper/50" />
                <img
                  src={profileData.avatarUrl}
                  alt="Chân dung Trần Tiểu Ngọc, Chuyên viên Thiết kế Đồ họa TMĐT"
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              <figcaption className="mt-5 px-4">
                <span className="block font-hand text-[2.75rem] leading-none text-brand-300 -rotate-2">Tiểu Ngọc</span>
                <span className="block mt-2 text-xs text-paper/70">{keepCompounds(profileData.role)}</span>
              </figcaption>
            </figure>
          </div>
        </Reveal>
      </section>
    </div>
  );
};
