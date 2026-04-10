import { useEffect } from 'react';
import type { ArticleMeta } from '../lib/blog';

// Schema slug mapping (blog post slug → schema filename)
const SCHEMA_MAPPING: Record<string, string> = {
  'interview-guide': 'interview-guide-schema.json',
  'calculating-opportunity-cost-real-estate': 'opportunity-cost-schema.json',
  'irs-audit-red-flags-real-estate-investors': 'audit-red-flags-schema.json',
  'home-depot-card-trap': 'home-depot-card-schema.json',
  'multi-entity-llc-bookkeeping': 'entity-accounting-schema.json',
};

export default function BlogSchema({ article }: { article: ArticleMeta }) {
  useEffect(() => {
    // Always inject base BlogPosting schema
    const baseScript = document.createElement('script');
    baseScript.type = 'application/ld+json';
    baseScript.setAttribute('data-blog-schema', 'base');
    baseScript.textContent = JSON.stringify({
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
      },
      datePublished: article.date,
      dateModified: article.date,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://zenbooks4u.com/blog/${article.slug}`,
      },
      url: `https://zenbooks4u.com/blog/${article.slug}`,
    });

    document.head.appendChild(baseScript);

    // Load and inject custom schema if available
    const schemaFile = SCHEMA_MAPPING[article.slug];
    if (schemaFile) {
      fetch(`/schema/${schemaFile}`)
        .then((res) => res.json())
        .catch(() => null) // Silently fail if schema not found
        .then((data) => {
          if (!data) return;

          // Inject Article schema
          if (data.article) {
            const articleScript = document.createElement('script');
            articleScript.type = 'application/ld+json';
            articleScript.setAttribute('data-blog-schema', 'article');
            articleScript.textContent = JSON.stringify(data.article);
            document.head.appendChild(articleScript);
          }

          // Inject FAQPage schema
          if (data.faq) {
            const faqScript = document.createElement('script');
            faqScript.type = 'application/ld+json';
            faqScript.setAttribute('data-blog-schema', 'faq');
            faqScript.textContent = JSON.stringify(data.faq);
            document.head.appendChild(faqScript);
          }

          // Inject LocalBusiness schema
          if (data.localBusiness) {
            const businessScript = document.createElement('script');
            businessScript.type = 'application/ld+json';
            businessScript.setAttribute('data-blog-schema', 'localbusiness');
            businessScript.textContent = JSON.stringify(data.localBusiness);
            document.head.appendChild(businessScript);
          }
        });
    }

    return () => {
      document.head.removeChild(baseScript);
    };
  }, [article]);

  return null;
}
