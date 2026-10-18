import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { articlesData, type Article } from '../data/articles';
import { profileData } from '../data/profile';
import { ArrowRight, ArrowUpRight, Mail } from 'lucide-react';
import { CmykStrip, RegistrationMark } from '../components/print/PrintMarks';
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

export const Blog: React.FC = () => {
  usePageMeta(
    'Góc chia sẻ nghề thiết kế E-commerce | Trần Tiểu Ngọc',
    'Nhật ký làm nghề của một Graphic Designer E-commerce: thiết kế banner quảng cáo, sản phẩm POD, ứng dụng AI có gu và tự động hóa Photoshop.'
  );
  const [platformFilter, setPlatformFilter] = useState<'All' | 'Substack' | 'LinkedIn'>('All');

  const filteredArticles = articlesData.filter((art: Article) => {
    if (platformFilter === 'All') return true;
    return art.platform === platformFilter;
  });

  return (
    <div className="pb-14 sm:pb-28">
      {/* Proof Sheet Header */}
      <section className="bg-paper-beige dark:bg-editorial-surfaceDark border-b border-paper-line dark:border-editorial-borderDark">
        <div className={`${sectionShell} py-12 sm:py-20`}>
          <Reveal className="flex flex-wrap items-center justify-between gap-2 pb-5 border-b border-paper-line dark:border-editorial-borderDark text-[11px] tabular-nums text-paper-muted dark:text-editorial-textDark">
            <span className="inline-flex items-center gap-2">
              <RegistrationMark className="w-3.5 h-3.5 text-ink dark:text-paper" />
              <span>EDITORIAL INDEX · JOURNAL 01–0{articlesData.length}</span>
            </span>
            <span>SUBSTACK &amp; LINKEDIN ESSAYS · HCMC</span>
          </Reveal>

          <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-8 sm:pt-10">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-300">
                Góc chia sẻ &amp; Nhật ký làm nghề
              </p>
              <h1 className="font-heading font-bold text-3xl sm:text-5xl leading-[1.15] sm:leading-[1.15] tracking-[-0.03em] text-ink dark:text-paper">
                Nhật ký làm nghề của mình
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[15px] leading-relaxed text-paper-text dark:text-editorial-textDark">
                Chỗ mình ghi lại chuyện làm thiết kế E-commerce, cách dùng AI có gu mà vẫn giữ được cái hồn vẽ tay trên Wacom, chuyện tự động hóa Photoshop và vài tâm sự của một designer Song Ngư.
              </p>
            </div>
          </Reveal>

          {/* Official Writing Channels */}
          <Reveal className="mt-10 grid grid-cols-1 md:grid-cols-2 border border-paper-line dark:border-editorial-borderDark divide-y md:divide-y-0 md:divide-x divide-paper-line dark:divide-editorial-borderDark bg-paper dark:bg-editorial-dark">
            <a
              href="https://tieungoc.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 sm:p-8 flex flex-col justify-between gap-4 hover:bg-paper-beige/60 dark:hover:bg-editorial-cardDark transition-colors"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] tabular-nums text-paper-muted dark:text-editorial-textDark">
                  <span>CHANNEL 01 · LONG-FORM</span>
                  <span className="font-semibold text-brand-600 dark:text-brand-300 inline-flex items-center gap-1">
                    Đăng ký nhận bài
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
                <h2 className="font-heading font-bold text-xl sm:text-2xl text-ink dark:text-paper group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">
                  Substack · tieungoc.substack.com
                </h2>
                <p className="text-sm leading-relaxed text-paper-text dark:text-editorial-textDark">
                  Những bài viết dài hơn phân tích quy trình thiết kế sản phẩm POD, kiểm soát màu in CMYK và nhật ký làm nghề thực tế.
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/tieungoc-design"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 sm:p-8 flex flex-col justify-between gap-4 hover:bg-paper-beige/60 dark:hover:bg-editorial-cardDark transition-colors"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] tabular-nums text-paper-muted dark:text-editorial-textDark">
                  <span>CHANNEL 02 · PROFESSIONAL NETWORK</span>
                  <span className="font-semibold text-brand-600 dark:text-brand-300 inline-flex items-center gap-1">
                    Kết nối trên LinkedIn
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
                <h2 className="font-heading font-bold text-xl sm:text-2xl text-ink dark:text-paper group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">
                  LinkedIn · @tieungoc-design
                </h2>
                <p className="text-sm leading-relaxed text-paper-text dark:text-editorial-textDark">
                  Những góc nhìn ngắn gọn về E-commerce Design, tự động hóa Photoshop và nơi mình kết nối với các anh chị làm nghề.
                </p>
              </div>
            </a>
          </Reveal>

          {/* Platform Filter Tabs */}
          <Reveal className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Lọc bài viết theo nền tảng">
              {(['All', 'Substack', 'LinkedIn'] as const).map((tab) => {
                const active = platformFilter === tab;
                const count =
                  tab === 'All'
                    ? articlesData.length
                    : articlesData.filter((a) => a.platform === tab).length;
                return (
                  <button
                    key={tab}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setPlatformFilter(tab)}
                    className={`px-3.5 py-2 rounded-sm text-xs font-semibold transition-colors border ${
                      active
                        ? 'bg-ink text-paper dark:bg-paper dark:text-ink border-ink dark:border-paper'
                        : 'bg-paper dark:bg-editorial-dark text-paper-text dark:text-editorial-textDark border-paper-line dark:border-editorial-borderDark hover:bg-paper-beige dark:hover:bg-editorial-cardDark'
                    }`}
                  >
                    <span>{tab === 'All' ? 'Tất cả bài viết' : tab}</span>
                    <span className="ml-1.5 text-[11px] tabular-nums opacity-70">({count})</span>
                  </button>
                );
              })}
            </div>
            <span className="text-[11px] tabular-nums text-paper-muted dark:text-editorial-textDark">
              HIỂN THỊ {filteredArticles.length} BÀI VIẾT
            </span>
          </Reveal>
        </div>
      </section>

      {/* Editorial Reading Index */}
      <section className={`${sectionShell} pt-10 sm:pt-16`}>
        <ul className="border-t border-paper-line dark:border-editorial-borderDark divide-y divide-paper-line dark:divide-editorial-borderDark">
          {filteredArticles.map((article, i) => (
            <Reveal as="li" key={article.id} delay={i * 60}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-3 py-6 sm:py-9 hover:bg-paper-beige/40 dark:hover:bg-editorial-surfaceDark/50 px-2 sm:px-4 -mx-2 sm:-mx-4 transition-colors"
              >
                <div className="md:col-span-2 text-xs tabular-nums text-paper-muted dark:text-editorial-textDark space-y-1">
                  <span className="inline-flex items-center gap-1.5 font-semibold text-ink dark:text-paper">
                    <span className="w-1.5 h-1.5 bg-brand-500 dark:bg-brand-300" />
                    {article.platform}
                  </span>
                  <span className="block">{article.date}</span>
                </div>

                <div className="md:col-span-8 space-y-2.5">
                  <h2 className="font-heading font-bold text-xl sm:text-2xl leading-snug sm:leading-snug text-ink dark:text-paper group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">
                    {keepCompounds(article.title)}
                  </h2>
                  <p className="text-sm leading-relaxed text-paper-text dark:text-editorial-textDark max-w-[68ch]">
                    {article.excerpt}
                  </p>
                  <div className="pt-1 flex flex-wrap gap-1.5">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2 py-0.5 bg-paper-beige dark:bg-editorial-cardDark text-paper-muted dark:text-editorial-textDark border border-paper-line dark:border-editorial-borderDark"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-2 md:text-right flex md:flex-col justify-between items-center md:items-end text-xs tabular-nums text-paper-muted dark:text-editorial-textDark">
                  <span>{article.readTime}</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-ink dark:text-paper group-hover:text-brand-600 dark:group-hover:text-brand-300">
                    Đọc bài viết
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Sign-Off Block */}
      <section className={`${sectionShell} pt-14 sm:pt-24`}>
        <Reveal className="relative bg-ink text-paper dark:bg-editorial-cardDark">
          <CmykStrip className="h-1.5" />
          <div className="px-5 sm:px-10 lg:px-14 py-10 sm:py-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <p className="text-[11px] tabular-nums uppercase tracking-wider text-brand-300">
                OPEN TO WORK · SENIOR GRAPHIC DESIGNER (E-COMMERCE)
              </p>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl leading-[1.2] sm:leading-[1.2]">
                {keepCompounds('Thích cách mình tư duy sản phẩm và quy trình làm việc?')}
              </h2>
              <p className="text-sm leading-relaxed text-paper/80">
                Mình đang mở cho cơ hội Full-time Senior E-commerce Graphic Designer tại TP.HCM. Nhắn mình để nhận bản CV đầy đủ hoặc trao đổi về vị trí tuyển dụng của team bạn.
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
                Liên hệ hợp tác
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};
