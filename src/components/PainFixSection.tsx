import React from 'react';
import { motion } from 'motion/react';

const items = [
  { pain: "My QuickBooks and bank never match.", fix: "We reconcile your accounts line by line so your numbers finally tell the truth." },
  { pain: "I have a shoebox of receipts I'm ignoring.", fix: "We categorize every transaction, turning that pile of stress into organized data." },
  { pain: "I'm terrified of handing this to my accountant.", fix: "We prepare clean, accurate reports your accountant will love. Tax season becomes boring." },
  { pain: "I don't understand what these reports mean.", fix: "We explain your P&L and Balance Sheet in plain English so you know where your money goes." },
  { pain: "I'm behind. Like, years behind.", fix: "We specialize in judgment-free catch-up. We go back, clean it up, and get you current." },
];

export function PainFixSection() {
  return (
    <section className="py-32 md:py-40 bg-stone-900">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium tracking-widest uppercase text-emerald-400 mb-4"
          >
            From Chaos to Calm
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white"
          >
            Sound familiar?
          </motion.h2>
        </div>

        <div className="space-y-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="grid md:grid-cols-2 gap-8 md:gap-16 py-8 border-b border-stone-800 last:border-0"
            >
              <p className="text-xl md:text-2xl text-stone-400 italic font-serif">
                "{item.pain}"
              </p>
              <p className="text-lg text-stone-300 leading-relaxed">
                {item.fix}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
