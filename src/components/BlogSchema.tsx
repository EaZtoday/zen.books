import { useEffect } from 'react';
import type { ArticleMeta } from '../lib/blog';

export default function BlogSchema({ article }: { article: ArticleMeta }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-blog-schema', article.slug);
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: article.title,
      description: article.description,
      keywords: article.keywords.join(', '),
      author: {
        '@type': 'Person',
        name: article.author,
        url: 'https://zenbooks4u.com/about',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Zen Books',
        url: 'https://zenbooks4u.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://zenbooks4u.com/logo.png',
        },
      },
      datePublished: article.date,
      dateModified: article.date,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://zenbooks4u.com/blog/${article.slug}`,
      },
      url: `https://zenbooks4u.com/blog/${article.slug}`,
    });

    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [article]);

  return null;
}
