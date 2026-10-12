import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData, Project } from '../data/projects';
import { ArrowUpRight, Filter, Search, Sparkles } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'Tất cả',
    'POD & Apparel Design',
    'Brand Visual Identity',
    'E-commerce & Email Visual'
  ];

  const filteredProjects = projectsData.filter((project: Project) => {
    const matchesCategory =
      selectedCategory === 'Tất cả' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (project.aiHighlights && project.aiHighlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase())));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Case Studies & Minh chứng Thực tế</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white">
          Dự án Đồ Họa & Bộ Sưu Tập POD
        </h1>
        <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
          Tổng hợp các bộ sưu tập thời trang thương mại, nhận diện thương hiệu ngách và hệ thống đồ họa e-commerce thực chiến của Trần Tiểu Ngọc.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200 dark:border-neutral-800">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm font-semibold'
                  : 'bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Tìm theo tên, AI tool, từ khóa..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full text-xs bg-neutral-100 dark:bg-neutral-800/70 border border-transparent focus:border-neutral-400 dark:focus:border-neutral-600 outline-none text-neutral-900 dark:text-white transition-colors"
          />
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
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
                <div className="absolute top-4 left-4">
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

              <div className="space-y-2.5 px-2 pb-2">
                <div className="flex items-center justify-between text-xs text-neutral-500 font-mono">
                  <span>Khách hàng: {project.client}</span>
                  <span>{project.year}</span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-neutral-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 font-light">
                  {project.subtitle}
                </p>

                {/* AI Highlights Badges */}
                {project.aiHighlights && project.aiHighlights.length > 0 && (
                  <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800/80 flex flex-wrap gap-1.5">
                    {project.aiHighlights.slice(0, 2).map((hl, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-800 dark:text-amber-300 font-medium"
                      >
                        ✦ {hl}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-24 space-y-4">
          <Filter className="w-8 h-8 text-neutral-400 mx-auto" />
          <h3 className="font-serif text-xl font-bold text-neutral-800 dark:text-neutral-200">
            Không tìm thấy dự án phù hợp
          </h3>
          <p className="text-sm text-neutral-500">
            Hãy thử tìm kiếm với từ khóa khác hoặc đặt lại bộ lọc danh mục.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('Tất cả');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-full text-xs font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
          >
            Xem tất cả dự án
          </button>
        </div>
      )}
    </div>
  );
};
