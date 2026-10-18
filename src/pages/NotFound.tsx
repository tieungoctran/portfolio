import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { CropMarks, RegistrationMark } from '../components/print/PrintMarks';
import { usePageMeta } from '../lib/page-meta';

export const NotFound: React.FC = () => {
  usePageMeta('Không tìm thấy trang | Trần Tiểu Ngọc', 'Trang bạn tìm không tồn tại trên tieungoc.site.', { noindex: true });
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
      <div className="relative m-4 p-8 sm:p-12 border border-paper-line dark:border-editorial-borderDark bg-paper-beige dark:bg-editorial-surfaceDark text-center space-y-6">
        <CropMarks offset={8} length={14} />
        <p className="inline-flex items-center gap-2 text-[11px] tabular-nums uppercase tracking-wider text-paper-muted dark:text-editorial-textDark">
          <RegistrationMark className="w-3.5 h-3.5 text-ink dark:text-paper" />
          <span>404 · MISSING PLATE · TRANG KHÔNG TÌM THẤY</span>
        </p>
        <h1 className="font-heading font-bold text-3xl sm:text-5xl leading-[1.15] sm:leading-[1.15] text-ink dark:text-paper">
          Tờ proof này mình tìm mãi không ra.
        </h1>
        <p className="text-paper-text dark:text-editorial-textDark text-sm leading-relaxed max-w-md mx-auto">
          Đường dẫn có thể đã đổi hoặc gõ nhầm một chữ. Bạn quay về trang chủ hoặc xem danh sách dự án giúp mình nhé.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-ink text-paper dark:bg-paper dark:text-ink text-xs font-semibold hover:bg-brand-600 dark:hover:bg-brand-300 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Về trang chủ</span>
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-sm border border-ink dark:border-paper text-ink dark:text-paper text-xs font-semibold hover:bg-paper dark:hover:bg-editorial-cardDark transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Xem các dự án</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
