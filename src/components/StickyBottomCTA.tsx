import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export function StickyBottomCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const bookSection = document.getElementById('book');
      const bookTop = bookSection?.getBoundingClientRect().top ?? Infinity;
      setVisible(window.scrollY > 600 && bookTop > window.innerHeight * 0.5);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 bg-forest/95 backdrop-blur-sm border-t border-forest-200 transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <p className="hidden sm:block text-sm text-forest-500">
          Free 30-minute Clarity Call — no commitment, no judgment
        </p>
        <a
          href="#book"
          className="inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-accent-dark transition-all whitespace-nowrap ml-auto"
        >
          Book Your Free Call
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
