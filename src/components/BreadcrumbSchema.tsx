import { useEffect } from 'react';

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

const BASE_URL = 'https://zenbooks4u.com';

/**
 * Injects BreadcrumbList JSON-LD schema into the document head.
 * Usage: <BreadcrumbSchema items={[{ name: 'Blog', path: '/blog' }, { name: 'Article Title', path: '/blog/slug' }]} />
 * Home is always prepended automatically.
 */
export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  useEffect(() => {
    const fullList = [{ name: 'Home', path: '/' }, ...items];

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-breadcrumb-schema', 'true');
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: fullList.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        item: `${BASE_URL}${item.path}`,
      })),
    });

    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [items]);

  return null;
}
