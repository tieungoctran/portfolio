import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://tieungoc.site';

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.content = content;
}

// The SPA ships one index.html, so each route sets its own title, description and canonical URL
export function usePageMeta(title: string, description: string, options: { noindex?: boolean } = {}) {
  const { pathname } = useLocation();
  const { noindex = false } = options;

  useEffect(() => {
    const url = `${SITE_URL}${pathname === '/' ? '/' : pathname.replace(/\/$/, '')}`;
    document.title = title;
    setMeta('name', 'description', description);
    setMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow');
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [title, description, pathname, noindex]);
}
