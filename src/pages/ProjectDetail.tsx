import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { profileData } from '../data/profile';
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink, Figma, Mail } from 'lucide-react';
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

const isPlaceholderImage = (url: string) => url.includes('images.unsplash.com');

const sectionShell = 'max-w-6xl mx-auto px-4 sm:px-6';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const projectIndex = projectsData.findIndex((p) => p.slug === slug);
  const project = projectsData[projectIndex];

  usePageMeta(
    project ? `${project.title} | Trần Tiểu Ngọc` : 'Dự án | Trần Tiểu Ngọc',
    project ? project.subtitle : 'Case study thiết kế đồ họa E-commerce của Trần Tiểu Ngọc.'
  );

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const nextProjectIndex = (projectIndex + 1) % projectsData.length;
  const nextProject = projectsData[nextProjectIndex];

  return (
    <div className="pb-14 sm:pb-28">
      {/* Case Study Proof Header */}
      <section className="bg-paper-beige dark:bg-editorial-surfaceDark border-b border-paper-line dark:border-editorial-borderDark">
        <div className={`${sectionShell} py-10 sm:py-16`}>
          {/* Top Slug / Breadcrumb */}
          <Reveal className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-paper-line dark:border-editorial-borderDark text-[11px] tabular-nums text-paper-muted dark:text-editorial-textDark">
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 font-semibold text-ink dark:text-paper hover:text-brand-600 dark:hover:text-brand-300 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Quay lại danh sách dự án</span>
            </Link>
            <span className="inline-flex items-center gap-1.5">
              <RegistrationMark className="w-3.5 h-3.5 text-ink dark:text-paper" />
              <span>
                CASE PROOF 0{projectIndex + 1} / 0{projectsData.length} · {project.category} · {project.year}
              </span>
            </span>
          </Reveal>

          {/* Title & Spec Table */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 sm:pt-12 items-start">
            <Reveal className="lg:col-span-7 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-300">
                Case Study thực chiến · {project.year}
              </p>
              <h1 className="font-heading font-bold text-3xl sm:text-5xl leading-[1.15] sm:leading-[1.15] tracking-[-0.03em] text-ink dark:text-paper">
                {keepCompounds(project.title)}
              </h1>
              <p className="text-base sm:text-lg leading-relaxed text-paper-text dark:text-editorial-textDark">
                {keepCompounds(project.subtitle)}
              </p>
            </Reveal>

            {/* Spec Table */}
            <Reveal className="lg:col-span-5" delay={80}>
              <div className="border border-paper-line dark:border-editorial-borderDark bg-paper dark:bg-editorial-dark divide-y divide-paper-line dark:divide-editorial-borderDark text-xs">
                <div className="px-4 py-2.5 bg-paper-beige/70 dark:bg-editorial-cardDark flex items-center justify-between text-[11px] tabular-nums text-paper-muted dark:text-editorial-textDark">
                  <span>JOB TICKET SPECIFICATION</span>
                  <span>300 DPI · CMYK/RGB</span>
                </div>
                <div className="grid grid-cols-3 px-4 py-3 gap-2">
                  <span className="text-paper-muted dark:text-editorial-textDark">Khách hàng</span>
                  <span className="col-span-2 font-semibold text-ink dark:text-paper">{project.client}</span>
                </div>
                <div className="grid grid-cols-3 px-4 py-3 gap-2">
                  <span className="text-paper-muted dark:text-editorial-textDark">Năm thực hiện</span>
                  <span className="col-span-2 font-semibold tabular-nums text-ink dark:text-paper">{project.year}</span>
                </div>
                <div className="grid grid-cols-3 px-4 py-3 gap-2">
                  <span className="text-paper-muted dark:text-editorial-textDark">Vai trò</span>
                  <span className="col-span-2 font-semibold text-ink dark:text-paper">{keepCompounds(project.role)}</span>
                </div>
                <div className="grid grid-cols-3 px-4 py-3 gap-2">
                  <span className="text-paper-muted dark:text-editorial-textDark">Công cụ &amp; AI</span>
                  <span className="col-span-2 font-semibold text-ink dark:text-paper">{project.tools.join(' · ')}</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Main Cover Proof Sheet */}
      <section className={`${sectionShell} pt-10 sm:pt-16`}>
        <Reveal>
          <figure className="relative m-4 sm:m-6">
            <CropMarks offset={8} length={16} />
            <div className="aspect-[16/9] overflow-hidden bg-paper-beige dark:bg-editorial-cardDark border border-paper-line dark:border-editorial-borderDark">
              <img
                src={project.coverImage}
                alt={`${project.title}: ảnh bìa case study của Trần Tiểu Ngọc`}
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="flex flex-wrap items-center justify-between gap-2 pt-3 text-[11px] tabular-nums text-paper-muted dark:text-editorial-textDark">
              <span className="inline-flex items-center gap-1.5">
                <RegistrationMark className="w-3 h-3" />
                <span>COVER PLATE · {project.title}</span>
              </span>
              {isPlaceholderImage(project.coverImage) && (
                <span>Ảnh minh họa tạm thời (sẽ cập nhật mockup thực tế)</span>
              )}
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* Overview & AI/Workflow Highlights */}
      <section className={`${sectionShell} pt-12 sm:pt-20`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <Reveal className="lg:col-span-7 space-y-4">
            <p className="text-[11px] tabular-nums uppercase tracking-wider text-paper-muted dark:text-editorial-textDark">
              00 · TỔNG QUAN DỰ ÁN
            </p>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl leading-[1.2] sm:leading-[1.2] text-ink dark:text-paper">
              Bối cảnh và phạm vi thực hiện
            </h2>
            <p className="text-[15px] leading-relaxed text-paper-text dark:text-editorial-textDark">
              {project.overview}
            </p>
          </Reveal>

          {project.aiHighlights && project.aiHighlights.length > 0 && (
            <Reveal className="lg:col-span-5" delay={90}>
              <div className="border border-paper-line dark:border-editorial-borderDark bg-paper-beige dark:bg-editorial-surfaceDark p-6 sm:p-7 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-paper-line dark:border-editorial-borderDark">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-300">
                    Điểm nhấn quy trình &amp; Kỹ thuật
                  </span>
                  <RegistrationMark className="w-3.5 h-3.5 text-ink dark:text-paper" />
                </div>
                <ul className="space-y-3">
                  {project.aiHighlights.map((hl) => (
                    <li
                      key={hl}
                      className="flex gap-3 text-sm leading-relaxed text-paper-text dark:text-editorial-textDark"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[7px] w-1.5 h-1.5 flex-shrink-0 bg-brand-500 dark:bg-brand-300"
                      />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* The Challenge & The Solution (Two-column Press Plates) */}
      <section className={`${sectionShell} pt-12 sm:pt-20`}>
        <div className="grid grid-cols-1 md:grid-cols-2 border border-paper-line dark:border-editorial-borderDark divide-y md:divide-y-0 md:divide-x divide-paper-line dark:divide-editorial-borderDark bg-paper dark:bg-editorial-dark">
          <Reveal className="p-6 sm:p-10 space-y-4">
            <div className="flex items-center justify-between text-[11px] tabular-nums text-paper-muted dark:text-editorial-textDark">
              <span className="font-semibold text-brand-600 dark:text-brand-300 uppercase tracking-wider">
                01 · BÀI TOÁN THỰC TẾ
              </span>
              <span>PROBLEM STATEMENT</span>
            </div>
            <h3 className="font-heading font-bold text-xl sm:text-2xl leading-snug sm:leading-snug text-ink dark:text-paper">
              Bài toán cần giải quyết
            </h3>
            <p className="text-[15px] leading-relaxed text-paper-text dark:text-editorial-textDark">
              {project.challenge}
            </p>
          </Reveal>

          <Reveal className="p-6 sm:p-10 space-y-4" delay={90}>
            <div className="flex items-center justify-between text-[11px] tabular-nums text-paper-muted dark:text-editorial-textDark">
              <span className="font-semibold text-ink dark:text-paper uppercase tracking-wider">
                02 · CÁCH MÌNH GIẢI
              </span>
              <span>EXECUTION &amp; WORKFLOW</span>
            </div>
            <h3 className="font-heading font-bold text-xl sm:text-2xl leading-snug sm:leading-snug text-ink dark:text-paper">
              Mình đã triển khai thế nào
            </h3>
            <p className="text-[15px] leading-relaxed text-paper-text dark:text-editorial-textDark">
              {project.solution}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Visual Gallery Plates */}
      {project.galleryImages.length > 0 && (
        <section className={`${sectionShell} pt-14 sm:pt-24 space-y-10`}>
          <Reveal className="flex flex-wrap items-end justify-between gap-4 border-b border-paper-line dark:border-editorial-borderDark pb-5">
            <div>
              <p className="text-[11px] tabular-nums uppercase tracking-wider text-paper-muted dark:text-editorial-textDark">
                03 · BẢN IN CHI TIẾT (VISUAL PLATES)
              </p>
              <h2 className="mt-1 font-heading font-bold text-2xl sm:text-3xl leading-[1.2] sm:leading-[1.2] text-ink dark:text-paper">
                Chi tiết giao diện &amp; bản vẽ thiết kế
              </h2>
            </div>
            <span className="text-xs tabular-nums text-paper-muted dark:text-editorial-textDark">
              {project.galleryImages.length} BẢN MINH HỌA
            </span>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {project.galleryImages.map((img, index) => (
              <Reveal
                key={img.url + index}
                delay={(index % 2) * 80}
                className={project.galleryImages.length % 2 === 1 && index === 0 ? 'md:col-span-2' : ''}
              >
                <figure className="relative m-4">
                  <CropMarks offset={6} length={12} />
                  <div className="overflow-hidden bg-paper-beige dark:bg-editorial-cardDark border border-paper-line dark:border-editorial-borderDark">
                    <img
                      src={img.url}
                      alt={img.caption}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="flex flex-wrap items-center justify-between gap-2 pt-2.5 text-xs text-paper-text dark:text-editorial-textDark">
                    <span className="inline-flex items-center gap-1.5">
                      <RegistrationMark className="w-3 h-3 text-paper-muted" />
                      <span>
                        FIG 0{index + 1} · {img.caption}
                      </span>
                    </span>
                    {isPlaceholderImage(img.url) && (
                      <span className="text-[11px] tabular-nums text-paper-muted dark:text-editorial-textDark">
                        Ảnh minh họa tạm thời
                      </span>
                    )}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Measured Results + External Proof Links */}
      <section className={`${sectionShell} pt-14 sm:pt-24`}>
        <Reveal className="border border-paper-line dark:border-editorial-borderDark bg-paper-beige dark:bg-editorial-surfaceDark p-6 sm:p-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-paper-line dark:border-editorial-borderDark">
            <div>
              <p className="text-[11px] tabular-nums uppercase tracking-wider text-brand-600 dark:text-brand-300 font-semibold">
                04 · KẾT QUẢ KIỂM CHỨNG
              </p>
              <h2 className="mt-1 font-heading font-bold text-2xl sm:text-3xl leading-[1.2] sm:leading-[1.2] text-ink dark:text-paper">
                Kết quả bằng con số thật
              </h2>
            </div>
            <RegistrationMark className="w-4 h-4 text-ink dark:text-paper" />
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.results.map((result, idx) => (
              <li
                key={idx}
                className="p-5 bg-paper dark:bg-editorial-dark border border-paper-line dark:border-editorial-borderDark space-y-2"
              >
                <span className="text-[11px] tabular-nums font-semibold text-brand-600 dark:text-brand-300 block">
                  RESULT 0{idx + 1}
                </span>
                <p className="text-sm leading-relaxed text-ink dark:text-paper font-medium">
                  {result}
                </p>
              </li>
            ))}
          </ul>

          {(project.prototypeUrl || project.behanceUrl) && (
            <div className="pt-4 flex flex-wrap items-center gap-3">
              {project.prototypeUrl && (
                <a
                  href={project.prototypeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-ink text-paper dark:bg-paper dark:text-ink text-xs font-semibold hover:bg-brand-600 dark:hover:bg-brand-300 transition-colors"
                >
                  <Figma className="w-4 h-4" />
                  <span>Xem Prototype trên Figma</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.behanceUrl && (
                <a
                  href={project.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-sm border border-ink dark:border-paper text-ink dark:text-paper text-xs font-semibold hover:bg-paper dark:hover:bg-editorial-cardDark transition-colors"
                >
                  <span>Xem Case Study trên Behance</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>
          )}
        </Reveal>
      </section>

      {/* P0 CRO Fix: Recruiter Sign-Off Block right after case study results */}
      <section className={`${sectionShell} pt-12 sm:pt-16`}>
        <Reveal className="relative bg-ink text-paper dark:bg-editorial-cardDark">
          <CmykStrip className="h-1.5" />
          <div className="px-5 sm:px-10 lg:px-14 py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-2.5">
              <p className="text-[11px] tabular-nums uppercase tracking-wider text-brand-300">
                TUYỂN DỤNG &amp; HỢP TÁC · SENIOR GRAPHIC DESIGNER (E-COMMERCE)
              </p>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl leading-[1.2] sm:leading-[1.2]">
                {keepCompounds('Bạn cần người giải bài toán tương tự cho team E-commerce?')}
              </h2>
              <p className="text-sm leading-relaxed text-paper/80 max-w-[60ch]">
                Mình đang tìm vị trí Full-time Senior E-commerce Graphic Designer tại TP.HCM. Nhắn mình để nhận bản CV đầy đủ kèm danh mục sản phẩm thực tế của dự án này.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href={profileData.cvRequestUrl}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-sm bg-paper text-ink font-semibold text-sm hover:bg-brand-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Nhận CV đầy đủ qua email
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

      {/* Next Project Sheet Navigation */}
      <section className={`${sectionShell} pt-10 sm:pt-14`}>
        <Reveal>
          <Link
            to={`/projects/${nextProject.slug}`}
            className="group block p-6 sm:p-8 border border-paper-line dark:border-editorial-borderDark bg-paper dark:bg-editorial-dark hover:bg-paper-beige dark:hover:bg-editorial-surfaceDark transition-colors"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-1.5">
                <span className="text-[11px] tabular-nums uppercase tracking-wider text-paper-muted dark:text-editorial-textDark inline-flex items-center gap-1.5">
                  <RegistrationMark className="w-3 h-3" />
                  <span>TỜ PROOF TIẾP THEO · {nextProject.category} · {nextProject.year}</span>
                </span>
                <h3 className="font-heading font-bold text-xl sm:text-2xl leading-snug sm:leading-snug text-ink dark:text-paper group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">
                  {keepCompounds(nextProject.title)}
                </h3>
              </div>
              <span className="w-11 h-11 shrink-0 rounded-sm bg-ink text-paper dark:bg-paper dark:text-ink flex items-center justify-center group-hover:bg-brand-600 dark:group-hover:bg-brand-300 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </span>
            </div>
          </Link>
        </Reveal>
      </section>
    </div>
  );
};
