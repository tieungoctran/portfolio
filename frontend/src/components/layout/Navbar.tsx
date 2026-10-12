import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { profileData } from '../../data/profile';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Trang chủ', path: '/' },
    { label: 'Dự án', path: '/projects' },
    { label: 'Về tôi', path: '/about' },
    { label: 'Góc chia sẻ', path: '/blog' },
    { label: 'Liên hệ', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#fbfbfb]/85 dark:bg-[#0c0d0e]/85 border-b border-neutral-200/60 dark:border-neutral-800/60 transition-colors">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo with Avatar */}
        <Link to="/" className="group flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-neutral-300 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 flex-shrink-0">
            <img
              src={profileData.avatarUrl}
              alt={profileData.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              onError={(e) => {
                // Fallback to high-res portrait if local file not placed yet
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80";
              }}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <span className="font-heading font-bold text-lg tracking-tight text-neutral-900 dark:text-neutral-50 group-hover:opacity-75 transition-opacity">
                Trần Tiểu Ngọc
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/20">
                AI Designer
              </span>
            </div>
            <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono tracking-wide">
              tieungoc.site
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors relative py-1 ${
                isActive(link.path)
                  ? 'text-neutral-950 dark:text-white font-semibold'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
              }`}
            >
              {link.label}
              {isActive(link.path) && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-neutral-900 dark:bg-neutral-100 rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center space-x-4">
          {/* Dark / Light Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Chuyển đổi giao diện Sáng / Tối"
            className="p-2 rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition-colors"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-neutral-700" />}
          </button>

          {/* Quick CTA to Contact */}
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center space-x-1 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 hover:opacity-90 transition-opacity"
          >
            <span>Tuyển dụng</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Mở menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-[#fbfbfb] dark:bg-[#0c0d0e] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                  isActive(link.path)
                    ? 'bg-neutral-200/70 dark:bg-neutral-800 text-neutral-950 dark:text-white font-semibold'
                    : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex justify-between items-center">
            <span className="text-xs text-neutral-500 font-mono">tieungoc.site</span>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-1 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
            >
              <span>Liên hệ ngay</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
