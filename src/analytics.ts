declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export function trackEvent(action: string, category: string, label?: string) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
    });
  }
}

export function trackBookingClick(source: string) {
  trackEvent('booking_click', 'CTA', source);
}

export function trackPageView(pagePath: string, pageTitle: string) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
}
