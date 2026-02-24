import React from 'react';
import { ArrowRight, Home as HomeIcon, Users, HeartHandshake, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const personas = [
  {
    title: 'Real Estate Investors',
    description: 'Multiple properties, loans, and entities — we keep your books clean by property so you always know your true cash flow.',
    href: '/real-estate-investors',
    icon: <HomeIcon className="w-6 h-6" />,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    title: 'Therapists & Consultants',
    description: 'Stay in session, not in spreadsheets. We organize your income and expenses so you know exactly what you\'re taking home.',
    href: '/therapists-consultants',
    icon: <Users className="w-6 h-6" />,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    title: 'Nonprofits',
    description: 'Board accountability, restricted funds, grant compliance. Clean, transparent reporting so you can focus on your mission.',
    href: '/nonprofits',
    icon: <HeartHandshake className="w-6 h-6" />,
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
  {
    title: 'Restaurants & Construction',
    description: 'High-volume transactions, vendors, payroll. We handle the numbers so you can stay on the job site or in the kitchen.',
    href: '/restaurants-construction',
    icon: <Utensils className="w-6 h-6" />,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
];

export function PersonasSection() {
  return (
    <section id="personas" className="py-32 md:py-40 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium tracking-widest uppercase text-stone-400 mb-4"
          >
            Who We Help
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-stone-900"
          >
            Built for your industry.
          </motion.h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {personas.map((persona, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={persona.href}
                className="group block bg-white rounded-3xl p-10 md:p-12 border border-stone-200/60 hover:border-stone-300 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-14 h-14 ${persona.bg} ${persona.color} rounded-2xl flex items-center justify-center mb-8`}>
                  {persona.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-medium text-stone-900 mb-4">
                  {persona.title}
                </h3>
                <p className="text-stone-500 leading-relaxed mb-8 text-lg">
                  {persona.description}
                </p>
                <span className="inline-flex items-center gap-2 text-stone-900 font-medium group-hover:gap-3 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
