import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData, isReconstructedVisual, type Project } from '../data/projects';
import { profileData } from '../data/profile';
import { ArrowRight, ArrowUpRight, Mail, Search, X } from 'lucide-react';
import { CmykStrip, CropMarks, RegistrationMark } from '../components/print/PrintMarks';
import { usePageMeta } from '../lib/page-meta';
import { Reveal } from '../components/motion/Reveal';

const keepCompounds = (text: string): React.ReactNode =>
  text.split(/(E-commerce|E-Commerce|2D\/3D|Print-on-Demand)/).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="whitespace-nowrap">
        {part}
      </span>
    ) : (
      part
    )
  );

const sectionShell = 'max-w-6xl mx-auto px-4 sm:px-6';

export const Projects: React.FC = () => {
  usePageMeta(
    'Dự án thiết kế đồ họa E-commerce | Trần Tiểu Ngọc',
    'Case study thiết kế đồ họa thương mại điện tử: file in POD, Ad Creatives cho Meta & Google Ads, email Klaviyo và tự động hóa Photoshop cho thị trường US/EU.'
  );
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'Tất cả',
    'POD & Apparel Design',
    'E-commerce & Email Visual',
    'Brand Visual Identity',
  ];

  const filteredProjects = projectsData.filter((project: Project) => {
    const matchesCategory =
      selectedCategory === 'Tất cả' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (project.aiHighlights &&
        project.aiHighlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase())));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pb-14 sm:pb-28">
      {/* Proof Sheet Header */}
      <section className="bg-paper-beige dark:bg-editorial-surfaceDark border-b border-paper-line dark:border-editorial-borderDark">
        <div className={`${sectionShell} py-12 sm:py-20`}>
          <Reveal className="flex flex-wrap items-center justify-between gap-2 pb-5 border-b border-paper-line dark:border-editorial-borderDark text-[11px] tabular-nums text-paper-muted dark:text-editorial-textDark">
            <span className="inline-flex items-center gap-2">
              <RegistrationMark className="w-3.5 h-3.5 text-ink dark:text-paper" />
              <span>PROOF INDEX · ARCHIVE 01–0{projectsData.length}</span>
            </span>
            <span>US / EU D2C &amp; POD WORK · 300 DPI CMYK</span>
          </Reveal>

          <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-8 sm:pt-10">
            <div className="lg:col-span-8 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-300">
                Case study kèm con số thật
              </p>
              <h1 className="font-heading font-bold text-3xl sm:text-5xl leading-[1.15] sm:leading-[1.15] tracking-[-0.03em] text-ink dark:text-paper">
                {keepCompounds('Dự án E-commerce Design mình đã làm')}
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-[15px] leading-relaxed text-paper-text dark:text-editorial-textDark">
                File in sản phẩm POD, Ad Creatives cho Meta &amp; Google Ads, email Klaviyo và bộ công cụ tự động hóa Photoshop mình đã làm cho khách Mỹ và Châu Âu. Mỗi bản lưu đều ghi rõ bài toán, cách giải và kết quả đo được.
              </p>
            </div>
          </Reveal>

          {/* Filter & Search Bar */}
          <Reveal className="mt-8 sm:mt-12 pt-6 border-t border-paper-line dark:border-editorial-borderDark flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Lọc dự án theo danh mục">
              {categories.map((cat) => {
                const active = selectedCategory === cat;
                const count =
                  cat === 'Tất cả'
                    ? projectsData.length
                    : projectsData.filter((p) => p.category === cat).length;
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-2 rounded-sm text-xs font-semibold transition-colors border ${
                      active
                        ? 'bg-ink text-paper dark:bg-paper dark:text-ink border-ink dark:border-paper'
                        : 'bg-paper dark:bg-editorial-dark text-paper-text dark:text-editorial-textDark border-paper-line dark:border-editorial-borderDark hover:bg-paper-beige dark:hover:bg-editorial-cardDark'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className="ml-1.5 text-[11px] tabular-nums opacity-70">({count})</span>
                  </button>
                );
              })}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-paper-muted dark:text-editorial-textDark absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Tìm theo tên, công cụ, từ khóa..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Tìm kiếm dự án"
                className="w-full pl-9 pr-8 py-2 rounded-sm text-xs bg-paper dark:bg-editorial-dark border border-paper-line dark:border-editorial-borderDark focus:border-brand-600 dark:focus:border-brand-300 outline-none text-ink dark:text-paper placeholder:text-paper-muted dark:placeholder:text-editorial-textDark transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Xóa từ khóa tìm kiếm"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-paper-muted hover:text-ink dark:hover:text-paper"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Projects Proof Grid */}
      <section className={`${sectionShell} pt-12 sm:pt-20`}>
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 sm:gap-y-20">
            {filteredProjects.map((project, i) => (
              <Reveal key={project.id} delay={(i % 2) * 80}>
                <Link
                  to={`/projects/${project.slug}`}
                  className="group flex flex-col h-full justify-between border-b border-paper-line dark:border-editorial-borderDark pb-8"
                >
                  <div>
                    {/* Proof Frame with CropMarks */}
                    <div className="relative m-4 sm:m-5">
                      <CropMarks offset={6} length={12} />
                      <div className="aspect-[16/10] overflow-hidden bg-paper-beige dark:bg-editorial-cardDark">
                        <img
                          src={project.coverImage}
                          alt={`${project.title}: dự án thiết kế đồ họa E-commerce của Trần Tiểu Ngọc`}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        />
                      </div>
                      <p className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 pt-2.5 text-[11px] tabular-nums text-paper-muted dark:text-editorial-textDark">
                        <span className="inline-flex items-center gap-1.5">
                          <RegistrationMark className="w-3 h-3" />
                          <span>
                            SHEET 0{i + 1} · {project.category} · {project.year}
                          </span>
                        </span>
                        {isReconstructedVisual(project.coverImage) && (
                          <span>Bản tái dựng minh họa · NDA</span>
                        )}
                      </p>
                    </div>

                    {/* Proof Content */}
                    <div className="space-y-3 px-1 pt-2">
                      <p className="text-[11px] tabular-nums text-paper-muted dark:text-editorial-textDark">
                        Khách hàng: <span className="font-semibold text-ink dark:text-paper">{project.client}</span>
                      </p>

                      <h2 className="font-heading font-bold text-xl sm:text-2xl leading-snug sm:leading-snug text-ink dark:text-paper group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">
                        {keepCompounds(project.title)}
                      </h2>

                      <p className="text-sm leading-relaxed text-paper-text dark:text-editorial-textDark line-clamp-3">
                        {project.subtitle}
                      </p>

                      {project.aiHighlights && project.aiHighlights.length > 0 && (
                        <ul className="space-y-1.5 pt-2">
                          {project.aiHighlights.slice(0, 2).map((hl) => (
                            <li
                              key={hl}
                              className="flex gap-2.5 text-[13px] leading-snug text-paper-text dark:text-editorial-textDark"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-[6px] w-1.5 h-1.5 flex-shrink-0 bg-brand-500 dark:bg-brand-300"
                              />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* Spec Strip & CTA */}
                  <div className="px-1 pt-5 mt-5 border-t border-paper-line dark:border-editorial-borderDark flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.slice(0, 4).map((tool) => (
                        <span
                          key={tool}
                          className="text-[11px] px-2 py-0.5 bg-paper-beige dark:bg-editorial-cardDark text-paper-text dark:text-editorial-textDark border border-paper-line dark:border-editorial-borderDark"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink dark:text-paper group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">
                      Xem case study
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="py-20 px-6 border border-paper-line dark:border-editorial-borderDark bg-paper-beige dark:bg-editorial-surfaceDark text-center space-y-4">
            <p className="text-xs tabular-nums uppercase tracking-wider text-paper-muted dark:text-editorial-textDark">
              0 KẾT QUẢ PHÙ HỢP
            </p>
            <h2 className="font-heading font-bold text-xl text-ink dark:text-paper">
              Không tìm thấy dự án nào khớp với bộ lọc hiện tại
            </h2>
            <p className="text-sm text-paper-text dark:text-editorial-textDark max-w-md mx-auto">
              Bạn thử đổi từ khóa khác hoặc quay lại danh mục tất cả dự án nhé.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('Tất cả');
                setSearchQuery('');
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-ink text-paper dark:bg-paper dark:text-ink text-xs font-semibold hover:bg-brand-600 dark:hover:bg-brand-300 transition-colors"
            >
              Xem tất cả dự án ({projectsData.length})
            </button>
          </div>
        )}
      </section>

      {/* Recruiter Sign-Off Block */}
      <section className={`${sectionShell} pt-16 sm:pt-24`}>
        <Reveal className="relative bg-ink text-paper dark:bg-editorial-cardDark">
          <CmykStrip className="h-1.5" />
          <div className="px-5 sm:px-10 lg:px-14 py-10 sm:py-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <p className="text-[11px] tabular-nums uppercase tracking-wider text-brand-300">
                PROOF SIGN-OFF · DÀNH CHO NHÀ TUYỂN DỤNG &amp; D2C LEAD
              </p>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl leading-[1.2] sm:leading-[1.2]">
                {keepCompounds('Muốn xem thêm file PSD/AI gốc hoặc bản CV 1 trang A4?')}
              </h2>
              <p className="text-sm leading-relaxed text-paper/80">
                Vì cam kết bảo mật NDA với 3 thương hiệu E-commerce, mình chỉ đăng một phần trên web. Nhắn mình một tiếng để nhận CV đầy đủ và xem trực tiếp bộ mẫu in 300 DPI khi phỏng vấn.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={profileData.cvRequestUrl}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-sm bg-paper text-ink font-semibold text-sm hover:bg-brand-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Nhận CV qua email
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-sm border border-paper/40 text-paper font-semibold text-sm hover:border-paper transition-colors"
              >
                Mời phỏng vấn / Liên hệ
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};
