import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const pains = [
  "I have no idea how much each property is actually making me.",
  "My bookkeeper doesn't understand that a new roof isn't a 'repair.'",
  "I'm years behind and the thought of tax season makes me sick.",
];

export function ProblemSection() {
  return (
    <section className="py-32 md:py-40 bg-cream-100">
      <div className="max-w-4xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium tracking-widest uppercase text-warm-400 text-center mb-4"
        >
          Sound familiar?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-warm-900 text-center mb-20"
        >
          Investor bookkeeping is broken.
        </motion.h2>
        <div className="space-y-8">
          {pains.map((pain, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-xl md:text-2xl text-warm-400 italic font-serif text-center py-6 border-b border-cream-300 last:border-0"
            >
              "{pain}"
            </motion.p>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a href="#book" className="inline-flex items-center gap-2 text-fern font-medium hover:gap-3 transition-all text-lg">
            We fix this <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
