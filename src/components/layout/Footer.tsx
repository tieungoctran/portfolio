import React from 'react';
import { Link } from 'react-router-dom';
import { profileData } from '../../data/profile';
import { ArrowUp } from 'lucide-react';
import { CmykStrip, RegistrationMark } from '../print/PrintMarks';
import { SocialLinks } from '../SocialLinks';

const footerLinks = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Dự án thiết kế', path: '/projects' },
  { label: 'Về mình', path: '/about' },
  { label: 'Góc chia sẻ', path: '/blog' },
  { label: 'Liên hệ hợp tác', path: '/contact' },
];

const linkClass =
  'text-paper-text dark:text-editorial-textDark hover:text-brand-600 dark:hover:text-brand-300 hover:underline transition-colors';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-24 bg-paper-beige dark:bg-editorial-surfaceDark transition-colors">
      <CmykStrip className="h-1.5" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-6 gap-y-10 md:gap-8 pb-12">
          <div className="col-span-2 md:col-span-6 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <RegistrationMark className="w-5 h-5 text-ink dark:text-paper" />
              <span className="font-heading font-bold text-2xl tracking-tight text-ink dark:text-paper">
                Trần Tiểu Ngọc
              </span>
            </Link>
            <p className="font-quote italic text-sm text-paper-text dark:text-editorial-textDark max-w-md leading-relaxed">
              {profileData.tagline}
            </p>
            <p className="flex items-center gap-2 text-xs text-paper-text dark:text-editorial-textDark">
              <span aria-hidden="true" className="inline-block w-2 h-2 rounded-full bg-[#3f9a6b]" />
              <span>{profileData.jobPreferences.status}</span>
            </p>
            <a href={`mailto:${profileData.email}`} className={`inline-block text-sm ${linkClass}`}>
              {profileData.email}
            </a>
          </div>

          <nav aria-label="Liên kết chân trang" className="md:col-span-3">
            <h2 className="font-heading text-sm font-semibold text-ink dark:text-paper mb-4">Khám phá</h2>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0 md:col-span-3">
            <h2 className="font-heading text-sm font-semibold text-ink dark:text-paper mb-4">Tìm mình ở</h2>
            <SocialLinks />
          </div>
        </div>

        <div className="pt-6 border-t border-paper-line dark:border-editorial-borderDark flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-paper-muted dark:text-editorial-textDark tabular-nums">
          <p>
            © {new Date().getFullYear()} Trần Tiểu Ngọc · tieungoc.site · Thủ Đức, TP. Hồ Chí Minh
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-paper-text dark:text-editorial-textDark hover:text-ink dark:hover:text-paper transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Lên đầu trang</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
