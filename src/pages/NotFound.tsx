import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { usePageMeta } from '../lib/page-meta';

export const NotFound: React.FC = () => {
  usePageMeta('Không tìm thấy trang | Trần Tiểu Ngọc', 'Trang bạn tìm không tồn tại trên tieungoc.site.', { noindex: true });
  return (
    <div className="max-w-2xl mx-auto px-6 py-28 text-center space-y-6">
      <span className="text-xs uppercase tracking-widest font-mono text-neutral-400">
        404 • Trang không tìm thấy
      </span>
      <h1 className="font-serif text-5xl sm:text-6xl font-bold text-neutral-900 dark:text-white">
        File này mình tìm mãi không ra.
      </h1>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed max-w-md mx-auto">
        Đường dẫn có thể đã đổi, hoặc gõ nhầm một chữ. Bạn về trang chủ hay xem dự án giúp mình nhé.
      </p>
      <div className="pt-4 flex items-center justify-center space-x-4">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-semibold hover:opacity-90 transition-opacity"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Về trang chủ</span>
        </Link>
        <Link
          to="/projects"
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 text-xs font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Xem các dự án</span>
        </Link>
      </div>
    </div>
  );
};
