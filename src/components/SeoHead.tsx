import { useEffect } from 'react';

interface SeoHeadProps {
  title: string;
  description: string;
  path: string;
  ogType?: string;
  noindex?: boolean;
}

const BASE_URL = 'https://zenbooks4u.com';

/**
 * Manages per-page SEO meta tags: title, description, canonical, Open Graph, Twitter Card.
 * Cleans up previous values on unmount/route change.
 */
export default function SeoHead({
  title,
  description,
  path,
  ogType = 'website',
  noindex = false,
}: SeoHeadProps) {
  useEffect(() => {
    const url = `${BASE_URL}${path}`;

    // Title
    document.title = title;

    // Helper to set or create a meta tag
    const setMeta = (attr: string, key: string, value: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    // Standard meta
    setMeta('name', 'description', description);

    // Robots
    if (noindex) {
      setMeta('name', 'robots', 'noindex, nofollow');
    } else {
      const robotsEl = document.querySelector('meta[name="robots"]');
      if (robotsEl) robotsEl.remove();
    }

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    // Open Graph
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:locale', 'en_US');

    // Twitter Card
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
  }, [title, description, path, ogType, noindex]);

  return null;
}
