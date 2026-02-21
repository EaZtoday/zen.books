import React from 'react';
import { ShieldCheck, MessageCircle, Heart, BarChart3 } from 'lucide-react';

interface Differentiator {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const differentiators: Differentiator[] = [
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: 'QuickBooks-Only Focus',
    description: 'We don\'t dabble in Xero or Wave. We are deep experts in QuickBooks Online, meaning we know every trick to keep your file clean, fast, and accurate.',
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: 'Niche Expertise',
    description: 'We understand the specific headaches of real estate (escrow, cap ex) and professional services (retainers, commingled funds). We speak your language.',
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: 'Judgment-Free Zone',
    description: 'We’ve seen it all—years of missing data, mixed personal expenses, negative balances. We fix it without making you feel bad. Ever.',
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    title: 'Remote, But Personal',
    description: 'We serve clients across the U.S. securely via the cloud, but we’re real humans you can talk to. No bots, no offshore call centers.',
  },
];

export function WhyZenSection() {
  return (
    <section className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-sm font-medium tracking-wide uppercase text-emerald-700 mb-3">
            Why Zen Books
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-900 mb-4">
            Why Clients Choose Zen Books
          </h2>
        </div>
        
        {/* 4-card grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((d, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl border border-stone-200/60 p-7 hover:shadow-md hover:border-stone-300/60 transition-all duration-200"
            >
              {/* Icon */}
              <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-700 mb-4">
                {d.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-base font-bold text-stone-900 mb-2">{d.title}</h3>
              
              {/* Description */}
              <p className="text-sm text-stone-500 leading-relaxed">{d.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
