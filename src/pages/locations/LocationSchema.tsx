import { useEffect } from 'react';
import type { LocationData } from './locationData';

export function LocationSchema({ data }: { data: LocationData }) {
  useEffect(() => {
    const professionalService = document.createElement('script');
    professionalService.type = 'application/ld+json';
    professionalService.setAttribute('data-location-schema', data.slug);
    professionalService.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Zen Books',
      description: `Real estate investor bookkeeping serving ${data.region}`,
      url: `https://zen.books/${data.slug}`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Scranton',
        addressRegion: 'PA',
        addressCountry: 'US',
      },
      areaServed: data.schema.areaServed,
      serviceType: [
        'Real Estate Investor Bookkeeping',
        'QuickBooks Online Setup',
        'Property-Level Financial Reporting',
        'Catch-Up Bookkeeping',
        'Multi-Entity Bookkeeping',
      ],
      priceRange: '$$',
    });

    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.setAttribute('data-location-faq', data.slug);
    faqSchema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: data.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    });

    document.head.appendChild(professionalService);
    document.head.appendChild(faqSchema);

    return () => {
      document.head.removeChild(professionalService);
      document.head.removeChild(faqSchema);
    };
  }, [data]);

  return null;
}
