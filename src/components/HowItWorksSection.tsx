import React from 'react';

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'The No-Judgment Review',
    description: 'We hop on a quick call to look at your current setup. No shame, just a clear plan.',
  },
  {
    number: '02',
    title: 'The Cleanup & Setup',
    description: 'We organize the chaos, reconcile the accounts, and build a QuickBooks system that actually works for you.',
  },
  {
    number: '03',
    title: 'Monthly Zen',
    description: 'You get simple, clear reports and ongoing support. You stop worrying about tax time and start trusting your numbers.',
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-sm font-medium tracking-wide uppercase text-emerald-700 mb-3">
            Getting Started
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-900 mb-4">
            How It Works
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto">
            From messy to managed in three simple steps.
          </p>
        </div>
        
        {/* Steps */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <div key={i} className="relative text-center md:text-left">
              {/* Step number */}
              <div className="text-4xl font-bold text-emerald-100 mb-3">{step.number}</div>
              
              {/* Connector line (desktop only, between cards) - Adjusted logic for 3 items */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-5 left-[calc(100%+0.5rem)] w-[calc(100%-1rem)] h-px bg-stone-200 -z-10" />
              )}
              
              {/* Title */}
              <h3 className="text-base font-bold text-stone-900 mb-2">{step.title}</h3>
              
              {/* Description */}
              <p className="text-sm text-stone-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <a 
            href="#book" 
            className="inline-flex items-center justify-center bg-emerald-700 text-white px-6 py-3.5 rounded-lg text-sm font-semibold hover:bg-emerald-800 transition-all shadow-sm hover:shadow-md hover:-translate-y-px"
          >
            Book a QuickBooks Clarity Call
          </a>
        </div>
      </div>
    </section>
  );
}
