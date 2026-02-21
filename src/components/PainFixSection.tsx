import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PainFix {
  pain: string;
  fix: string;
}

const items: PainFix[] = [
  { pain: "My QuickBooks and bank never match.", fix: "We reconcile your accounts line by line and fix beginning balances so your numbers finally tell the truth." },
  { pain: "I have a shoebox of receipts I’m ignoring.", fix: "We categorize every single transaction, turning that pile of stress into organized data." },
  { pain: "I’m terrified of handing this over to my accountant.", fix: "We prepare clean, accurate monthly reports that your accountant will love, so tax season is boring instead of scary." },
  { pain: "I don't understand what these reports mean.", fix: "We walk you through your Profit & Loss and Balance Sheet in plain English so you actually know where your money is going." },
  { pain: "I’m behind. Like, years behind.", fix: "We specialize in judgment-free catch-up work. We’ll go back, clean it up, and get you current—no lectures." }
];

export function PainFixSection() {
  return (
    <section className="py-20 md:py-28 bg-stone-900 text-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-sm font-medium tracking-wide uppercase text-emerald-400 mb-3">
            From Chaos to Calm
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            When your books feel overwhelming
          </h2>
          <p className="text-stone-400 leading-relaxed">
            We are bookkeeping and QuickBooks specialists who take the weight off your shoulders. You handle the business; we’ll handle the numbers (and we’ll never judge the mess).
          </p>
        </div>
        
        {/* Pain/Fix cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <div 
              key={i} 
              className="bg-stone-800/60 border border-stone-700/40 rounded-2xl p-7 hover:border-emerald-500/30 transition-colors duration-200"
            >
              {/* Pain quote */}
              <p className="text-red-300/80 italic text-sm mb-4">"{item.pain}"</p>
              
              {/* Divider arrow */}
              <div className="flex items-center gap-2 text-emerald-400 mb-3">
                <ArrowRight className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">The Fix</span>
              </div>
              
              {/* Fix text */}
              <p className="text-stone-300 text-sm leading-relaxed">{item.fix}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
