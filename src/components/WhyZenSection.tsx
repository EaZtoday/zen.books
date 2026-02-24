import React from 'react';
import { ShieldCheck, MessageCircle, Heart, BarChart3 } from 'lucide-react';
import { motion } from 'motion/react';

const differentiators = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'QuickBooks-Only Focus',
    description: 'Deep experts in QuickBooks Online. We know every trick to keep your file clean, fast, and accurate.',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Niche Expertise',
    description: 'We understand escrow, cap ex, retainers, grant funds, and high-volume operations. We speak your language.',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Judgment-Free Zone',
    description: 'Years of missing data? Mixed personal expenses? We fix it without making you feel bad. Ever.',
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: 'Remote, But Personal',
    description: 'Real humans you can talk to. We serve clients across the U.S. securely via the cloud. No bots, no call centers.',
  },
];

export function WhyZenSection() {
  return (
    <section className="py-32 md:py-40 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium tracking-widest uppercase text-warm-400 mb-4"
          >
            Why Zen Books
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-warm-900"
          >
            Built different, on purpose.
          </motion.h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 bg-fern-50 rounded-2xl flex items-center justify-center text-fern mx-auto mb-6">
                {d.icon}
              </div>
              <h3 className="text-lg font-serif font-medium text-warm-900 mb-3">{d.title}</h3>
              <p className="text-warm-600 leading-relaxed">{d.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
