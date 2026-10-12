import React from 'react';
import { Link } from 'react-router-dom';
import { profileData } from '../../data/profile';
import { ArrowUp, ArrowUpRight, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-[#f7f7f7] dark:bg-[#08090a] transition-colors mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Bio & Brand */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-serif font-bold text-2xl tracking-tight text-neutral-900 dark:text-white">
                Trần Tiểu Ngọc
              </span>
            </Link>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed">
              {profileData.tagline}
            </p>
            <div className="pt-2 flex items-center space-x-2 text-xs text-neutral-500 font-mono">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Sẵn sàng cho cơ hội AI Product Designer (Full-time & Remote)</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4">
              Khám phá
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Dự án thiết kế
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Về tôi & Kỹ năng
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Góc chia sẻ (Substack & LinkedIn)
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Liên hệ hợp tác
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Writing Channels */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4">
              Kênh kết nối
            </h4>
            <ul className="space-y-2.5 text-sm">
              {profileData.socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors group"
                  >
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${profileData.email}`}
                  className="inline-flex items-center space-x-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors group"
                >
                  <span>Email: {profileData.email}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-neutral-200/80 dark:border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <span>© {new Date().getFullYear()} Trần Tiểu Ngọc. Tất cả quyền được bảo lưu.</span>
            <span>•</span>
            <span className="font-mono text-neutral-400">tieungoc.site</span>
          </div>

          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1">
              <span>Được xây dựng với</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span>cho cộng đồng sáng tạo</span>
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
              aria-label="Lên đầu trang"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
