import React from 'react';
import { ShieldCheck, Heart, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  cta: string;
}

const services: ServiceCard[] = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'One-Time Bookkeeping Cleanup',
    description: 'For when you’re behind and dread opening your finance apps. We categorize every past transaction so your history is accurate.',
    features: [
      'Historical categorization',
      'Reconcile all accounts to the penny',
      'Fix errors & "mystery" balances',
      'Hand us the mess once, we fix it'
    ],
    cta: 'Start Cleanup'
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Monthly Bookkeeping Care',
    description: 'Hand off the monthly chore completely. We keep your books done correctly every single month without you lifting a finger.',
    features: [
      'Monthly categorization',
      'Account reconciliation',
      'Simple monthly reports',
      'You hand it off once. We handle it quietly in the background every month.'
    ],
    cta: 'Start Monthly Care'
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Premium Bookkeeping Support',
    description: 'For growing businesses with complex needs. Think of us as your partner keeping an eye on the numbers so you can focus on growth.',
    features: [
      'Detailed KPI tracking',
      'Regular check-in calls',
      'Coordination with CPA/Payroll',
      'Priority support'
    ],
    cta: 'Get Premium Support'
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-surface-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-sans font-semibold tracking-widest uppercase text-stone-500 mb-4">
            WHAT WE DO
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-stone-900 mb-6">
            Flexible bookkeeping services to get you <br className="hidden md:block" />
            back on track and keep you there
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto font-sans">
            Simple, transparent packages. You hand it off once, we handle it forever.
          </p>
        </div>
        
        {/* 3-card grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((svc, i) => (
            <div 
              key={i} 
              className="bg-white rounded-[2.5rem] p-10 flex flex-col hover:shadow-xl transition-all duration-300 border border-transparent hover:border-emerald-100"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-700 mb-8">
                {svc.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-serif font-medium text-stone-900 mb-4 leading-tight">{svc.title}</h3>
              
              {/* Description */}
              <p className="text-stone-600 leading-relaxed mb-8 font-sans">{svc.description}</p>
              
              {/* Feature list */}
              <ul className="space-y-4 mb-10 flex-1">
                {svc.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-stone-600 font-sans">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              
              {/* Card CTA */}
              <a 
                href="#book" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-emerald-600 text-emerald-700 font-sans font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-200"
              >
                {svc.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
