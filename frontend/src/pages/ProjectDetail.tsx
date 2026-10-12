import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Figma, ExternalLink, Sparkles, Cpu } from 'lucide-react';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const projectIndex = projectsData.findIndex((p) => p.slug === slug);
  const project = projectsData[projectIndex];

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  // Next project logic
  const nextProjectIndex = (projectIndex + 1) % projectsData.length;
  const nextProject = projectsData[nextProjectIndex];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-16">
      {/* Top Navigation / Breadcrumbs */}
      <div className="flex items-center justify-between text-xs text-neutral-500 font-mono">
        <Link
          to="/projects"
          className="inline-flex items-center space-x-1.5 hover:text-neutral-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Quay lại danh sách dự án</span>
        </Link>
        <span className="uppercase text-amber-600 dark:text-amber-400 font-semibold">{project.category}</span>
      </div>

      {/* Hero Header */}
      <div className="space-y-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-neutral-200/70 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
          <Sparkles className="w-3 h-3 text-amber-500" />
          <span>Case Study • {project.year}</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white leading-tight">
          {project.title}
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
          {project.subtitle}
        </p>
      </div>

      {/* Metadata Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-y border-neutral-200 dark:border-neutral-800 text-sm">
        <div>
          <span className="block text-xs uppercase tracking-wider text-neutral-400 font-mono">Khách hàng</span>
          <span className="font-semibold text-neutral-900 dark:text-white">{project.client}</span>
        </div>
        <div>
          <span className="block text-xs uppercase tracking-wider text-neutral-400 font-mono">Năm thực hiện</span>
          <span className="font-semibold text-neutral-900 dark:text-white">{project.year}</span>
        </div>
        <div>
          <span className="block text-xs uppercase tracking-wider text-neutral-400 font-mono">Vai trò</span>
          <span className="font-semibold text-neutral-900 dark:text-white">{project.role}</span>
        </div>
        <div>
          <span className="block text-xs uppercase tracking-wider text-neutral-400 font-mono">Công cụ & AI</span>
          <span className="font-semibold text-neutral-900 dark:text-white">{project.tools.join(', ')}</span>
        </div>
      </div>

      {/* AI Key Solutions Box (for Recruiters) */}
      {project.aiHighlights && project.aiHighlights.length > 0 && (
        <div className="p-8 rounded-3xl bg-amber-500/10 dark:bg-amber-950/20 border border-amber-300/60 dark:border-amber-900/50 space-y-4">
          <div className="flex items-center space-x-2 text-amber-800 dark:text-amber-300 font-semibold text-sm">
            <Cpu className="w-5 h-5 text-amber-500" />
            <span>Năng lực AI & Trải nghiệm Tương tác Người - Máy (Human-AI UX):</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
            {project.aiHighlights.map((hl, i) => (
              <div key={i} className="flex items-start space-x-2">
                <span className="text-amber-600 dark:text-amber-400 font-bold">✦</span>
                <span>{hl}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Cover Image */}
      <div className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Project Overview */}
      <div className="space-y-4">
        <h2 className="font-serif text-2xl font-bold text-neutral-900 dark:text-white">
          Tổng quan dự án
        </h2>
        <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
          {project.overview}
        </p>
      </div>

      {/* The Challenge & The Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        <div className="p-8 rounded-2xl bg-neutral-100/80 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 space-y-4">
          <span className="text-xs uppercase tracking-wider text-rose-500 font-mono font-bold">
            01. Vấn đề & Rào cản Trải nghiệm
          </span>
          <h3 className="font-serif text-xl font-bold text-neutral-900 dark:text-white">
            Bài toán cần giải quyết
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
            {project.challenge}
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-neutral-100/80 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 space-y-4">
          <span className="text-xs uppercase tracking-wider text-emerald-500 font-mono font-bold">
            02. Tư duy & Giải pháp Thiết kế
          </span>
          <h3 className="font-serif text-xl font-bold text-neutral-900 dark:text-white">
            Giải pháp của Tiểu Ngọc
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
            {project.solution}
          </p>
        </div>
      </div>

      {/* Visual Gallery */}
      <div className="space-y-8 pt-6">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
            Trưng bày tác phẩm
          </span>
          <h2 className="font-serif text-2xl font-bold text-neutral-900 dark:text-white">
            Chi tiết Giao diện & Bản vẽ Thiết kế
          </h2>
        </div>

        <div className="space-y-8">
          {project.galleryImages.map((img, index) => (
            <div
              key={index}
              className="space-y-3 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900/50 p-2 sm:p-4"
            >
              <img
                src={img.url}
                alt={img.caption}
                className="w-full rounded-xl object-cover"
                loading="lazy"
              />
              <p className="text-xs text-center text-neutral-500 font-mono py-1">
                {img.caption}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Results */}
      <div className="p-8 rounded-3xl bg-neutral-900 text-white dark:bg-[#15171a] dark:text-neutral-100 border border-neutral-800 space-y-6">
        <h3 className="font-serif text-2xl font-bold">
          Hiệu quả & Tác động Kinh doanh (Business Impact)
        </h3>
        <div className="space-y-3">
          {project.results.map((result, idx) => (
            <div key={idx} className="flex items-start space-x-3 text-sm text-neutral-300">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>{result}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Links */}
      <div className="flex flex-wrap items-center gap-4 pt-4">
        {project.prototypeUrl && (
          <a
            href={project.prototypeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-sm font-semibold hover:opacity-90 transition-opacity"
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
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 text-sm font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <span>Xem Case Study trên Behance</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        )}
      </div>

      {/* Next Project Footer */}
      <div className="pt-12 border-t border-neutral-200 dark:border-neutral-800">
        <Link
          to={`/projects/${nextProject.slug}`}
          className="group block p-8 rounded-2xl bg-neutral-100/70 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all"
        >
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                Dự án tiếp theo
              </span>
              <h4 className="font-serif text-2xl font-bold text-neutral-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                {nextProject.title}
              </h4>
              <p className="text-xs text-neutral-500 font-mono">
                {nextProject.category} • {nextProject.year}
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
