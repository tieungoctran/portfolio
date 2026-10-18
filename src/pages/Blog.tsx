import React, { useState } from 'react';
import { articlesData, Article } from '../data/articles';
import { ArrowUpRight, BookOpen, Linkedin, ExternalLink } from 'lucide-react';
import { usePageMeta } from '../lib/page-meta';

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
    <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 font-mono">
          Góc chia sẻ
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white">
          Nhật ký làm nghề của mình
        </h1>
        <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
          Chỗ mình ghi lại chuyện làm thiết kế E-commerce, cách dùng AI mà vẫn giữ được cái hồn, và vài tâm sự của một designer Song Ngư.
        </p>
      </div>

      {/* Featured Channel CTAs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Substack Card */}
        <a
          href="https://tieungoc.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-6 rounded-2xl bg-brand-500/10 dark:bg-brand-950/20 border border-brand-200/80 dark:border-brand-900/50 hover:border-brand-400 dark:hover:border-brand-700 transition-all space-y-3"
        >
          <div className="flex items-center justify-between">
            <span className="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center text-brand-600 dark:text-brand-400">
              <BookOpen className="w-5 h-5" />
            </span>
            <span className="inline-flex items-center space-x-1 text-xs font-semibold text-brand-700 dark:text-brand-300 group-hover:underline">
              <span>Đăng ký nhận bài</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
          <h3 className="font-serif text-xl font-bold text-neutral-900 dark:text-white">
            Substack
          </h3>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Những bài viết dài hơn về quy trình thiết kế và bài học làm nghề.
          </p>
        </a>

        {/* LinkedIn Card */}
        <a
          href="https://www.linkedin.com/in/tieungoc-design"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-6 rounded-2xl bg-sky-500/10 dark:bg-sky-950/20 border border-sky-200/80 dark:border-sky-900/50 hover:border-sky-400 dark:hover:border-sky-700 transition-all space-y-3"
        >
          <div className="flex items-center justify-between">
            <span className="w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center text-sky-600 dark:text-sky-400">
              <Linkedin className="w-5 h-5" />
            </span>
            <span className="inline-flex items-center space-x-1 text-xs font-semibold text-sky-700 dark:text-sky-300 group-hover:underline">
              <span>Kết nối trên LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
          <h3 className="font-serif text-xl font-bold text-neutral-900 dark:text-white">
            LinkedIn
          </h3>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Những ý ngắn về nghề, và chỗ mình trò chuyện với các bạn làm Design và E-commerce.
          </p>
        </a>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center space-x-2 pb-4 border-b border-neutral-200 dark:border-neutral-800">
        {(['All', 'Substack', 'LinkedIn'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setPlatformFilter(tab)}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
              platformFilter === tab
                ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm'
                : 'bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
            }`}
          >
            {tab === 'All' ? 'Tất cả bài viết' : `${tab}`}
          </button>
        ))}
      </div>

      {/* Articles Feed */}
      <div className="space-y-8">
        {filteredArticles.map((article) => (
          <a
            key={article.id}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-editorial-surfaceDark hover:border-neutral-400 dark:hover:border-neutral-600 transition-all space-y-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                article.platform === 'Substack'
                  ? 'bg-brand-100 text-brand-900 dark:bg-brand-950/60 dark:text-brand-300'
                  : 'bg-sky-100 text-sky-900 dark:bg-sky-950/60 dark:text-sky-300'
              }`}>
                Đọc trên {article.platform}
              </span>

              <div className="flex items-center space-x-3 text-xs text-neutral-500 font-mono">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-bold text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
                {article.excerpt}
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-500"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <span className="inline-flex items-center space-x-1 text-xs font-semibold text-neutral-900 dark:text-white group-hover:underline">
                <span>Mở bài viết gốc</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
