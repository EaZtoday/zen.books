import { useEffect } from 'react';

interface FAQ {
  q: string;
  a: string;
}

interface ServiceSchemaProps {
  serviceName: string;
  serviceDescription: string;
  path: string;
  faqs: FAQ[];
}

export default function ServiceSchema({ serviceName, serviceDescription, path, faqs }: ServiceSchemaProps) {
  useEffect(() => {
    const serviceScript = document.createElement('script');
    serviceScript.type = 'application/ld+json';
    serviceScript.setAttribute('data-service-schema', path);
    serviceScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: serviceName,
      description: serviceDescription,
      provider: {
        '@type': 'ProfessionalService',
        name: 'Zen Books',
        url: 'https://zen.books',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Scranton',
          addressRegion: 'PA',
          addressCountry: 'US',
        },
      },
      areaServed: {
        '@type': 'State',
        name: 'Pennsylvania',
      },
      url: `https://zen.books${path}`,
    });

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.setAttribute('data-service-faq', path);
    faqScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    });

    document.head.appendChild(serviceScript);
    document.head.appendChild(faqScript);

    return () => {
      document.head.removeChild(serviceScript);
      document.head.removeChild(faqScript);
    };
  }, [serviceName, serviceDescription, path, faqs]);

  return null;
}
