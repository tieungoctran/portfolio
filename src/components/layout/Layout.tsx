import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollProofStrip } from '../motion/ScrollProofStrip';
import { prefersReducedMotion } from '../../lib/motion';

export const Layout: React.FC = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Check saved preference or system preference; storage can be blocked (private mode, embeds)
    try {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
    } catch {
      // fall through to the system preference
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    try {
      localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    } catch {
      // preference simply is not remembered when storage is blocked
    }
  }, [darkMode]);

  // Entrance motion only hides content once JS runs and the visitor allows motion
  useEffect(() => {
    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') return;
    document.documentElement.classList.add('motion-ready');
    return () => document.documentElement.classList.remove('motion-ready');
  }, []);

  // Scroll to top whenever the URL path changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-paper dark:bg-editorial-dark text-ink dark:text-paper transition-colors duration-200">
      <ScrollProofStrip />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="flex-grow">
        <div key={location.pathname} className="page-enter">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};
