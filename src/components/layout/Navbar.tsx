import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { profileData } from '../../data/profile';
import { Mail } from 'lucide-react';
import { Sun, Moon, Menu, X } from 'lucide';
import { MorphIcon } from 'morphicons/react';
import { RegistrationMark } from '../print/PrintMarks';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const navLinks = [
  { label: 'Trang chủ', path: '/' },
  { label: 'Dự án', path: '/projects' },
  { label: 'Về tôi', path: '/about' },
  { label: 'Góc chia sẻ', path: '/blog' },
  { label: 'Liên hệ', path: '/contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 dark:bg-editorial-dark/95 backdrop-blur-sm border-b border-paper-line dark:border-editorial-borderDark transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="group flex items-center gap-2.5 min-w-0">
          <RegistrationMark className="w-5 h-5 flex-shrink-0 text-ink dark:text-paper group-hover:rotate-90 transition-transform duration-500" />
          <span className="flex flex-col leading-tight min-w-0">
            <span className="font-heading font-bold text-[17px] tracking-tight text-ink dark:text-paper">
              Trần Tiểu Ngọc
            </span>
            <span className="hidden sm:block text-[11px] text-paper-muted dark:text-editorial-textDark truncate">
              {profileData.role}
            </span>
          </span>
        </Link>

        <nav aria-label="Điều hướng chính" className="hidden md:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              aria-current={isActive(link.path) ? 'page' : undefined}
              className={`relative py-1.5 transition-colors ${
                isActive(link.path)
                  ? 'text-ink dark:text-paper font-semibold'
                  : 'text-paper-text dark:text-editorial-textDark hover:text-ink dark:hover:text-paper'
              }`}
            >
              {link.label}
              {isActive(link.path) && (
                <span aria-hidden="true" className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-brand-500 dark:bg-brand-300" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'}
            className="p-2 rounded-sm text-ink dark:text-paper hover:bg-paper-beige dark:hover:bg-editorial-cardDark transition-colors"
          >
            <MorphIcon icon={darkMode ? Sun : Moon} size={16} spring="smooth" reducedMotion="user" />
          </button>

          <a
            href={profileData.cvRequestUrl}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-[13px] font-semibold rounded-sm bg-ink text-paper dark:bg-paper dark:text-ink hover:bg-brand-600 dark:hover:bg-brand-300 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Xin CV</span>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-sm text-ink dark:text-paper hover:bg-paper-beige dark:hover:bg-editorial-cardDark transition-colors"
            aria-label={isOpen ? 'Đóng menu' : 'Mở menu'}
            aria-expanded={isOpen}
          >
            <MorphIcon icon={isOpen ? X : Menu} size={20} reducedMotion="user" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-paper-line dark:border-editorial-borderDark bg-paper dark:bg-editorial-dark px-4 py-4">
          <nav aria-label="Điều hướng di động" className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                aria-current={isActive(link.path) ? 'page' : undefined}
                className={`flex items-center justify-between py-3 border-b border-paper-line dark:border-editorial-borderDark text-base ${
                  isActive(link.path)
                    ? 'text-ink dark:text-paper font-semibold'
                    : 'text-paper-text dark:text-editorial-textDark'
                }`}
              >
                {link.label}
                {isActive(link.path) && <span aria-hidden="true" className="w-2 h-2 bg-brand-500 dark:bg-brand-300" />}
              </Link>
            ))}
          </nav>
          <a
            href={profileData.cvRequestUrl}
            className="mt-4 flex items-center justify-center gap-2 py-3 text-sm font-semibold rounded-sm bg-ink text-paper dark:bg-paper dark:text-ink"
          >
            <Mail className="w-4 h-4" />
            <span>Xin CV qua email</span>
          </a>
        </div>
      )}
    </header>
  );
};
