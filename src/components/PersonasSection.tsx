import React from 'react';
import { ArrowRight, Home as HomeIcon, Users, HeartHandshake, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PersonaCard {
  title: string;
  description: string;
  cta: string;
  href: string;
  image: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  accentBg: string;
}

const personas: PersonaCard[] = [
  {
    title: 'Real Estate Investors',
    description: 'Multiple properties, loans, and entities. We keep your books clean by property so you always know your true cash flow.',
    cta: 'See Real Estate Bookkeeping',
    href: '/real-estate-investors',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop',
    icon: <HomeIcon className="w-5 h-5" />,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    accentBg: 'bg-blue-100',
  },
  {
    title: 'Therapists & Consultants',
    description: 'Stay in session, not in spreadsheets. We organize your income and expenses so you know exactly what you\'re taking home.',
    cta: 'See Practice Bookkeeping',
    href: '/therapists-consultants',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop',
    icon: <Users className="w-5 h-5" />,
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    accentBg: 'bg-purple-100',
  },
  {
    title: 'Nonprofits',
    description: 'Board accountability, restricted funds, and grant compliance. Clean, transparent reporting so you can focus on your mission.',
    cta: 'See Nonprofit Bookkeeping',
    href: '/nonprofits',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=800&auto=format&fit=crop',
    icon: <HeartHandshake className="w-5 h-5" />,
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
    accentBg: 'bg-rose-100',
  },
  {
    title: 'Restaurants & Construction',
    description: 'High-volume transactions, vendors, and payroll. We handle the numbers so you can stay on the job site or in the kitchen.',
    cta: 'See Operations Bookkeeping',
    href: '/restaurants-construction',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop',
    icon: <Utensils className="w-5 h-5" />,
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    accentBg: 'bg-amber-100',
  },
];

export function PersonasSection() {
  return (
    <section id="personas" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-sans font-semibold tracking-widest uppercase text-stone-500 mb-4">
            WHO WE HELP
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-stone-900 mb-6">
            Find the bookkeeping plan <br className="hidden md:block" />
            built for your business
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto font-sans">
            Every industry has its own headaches. We built specialized packages for each.
          </p>
        </div>

        {/* 2x2 Card Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {personas.map((persona, i) => (
            <Link
              key={i}
              to={persona.href}
              className="group bg-stone-50 rounded-[2rem] overflow-hidden border border-stone-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 ${persona.accentBg} opacity-20`} />
                <img
                  src={persona.image}
                  alt={persona.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 ${persona.iconBg} ${persona.iconColor} rounded-xl flex items-center justify-center`}>
                    {persona.icon}
                  </div>
                  <h3 className="text-xl font-serif font-medium text-stone-900">{persona.title}</h3>
                </div>

                <p className="text-stone-600 font-sans leading-relaxed mb-6">{persona.description}</p>

                <span className="inline-flex items-center gap-2 text-emerald-700 font-semibold group-hover:gap-3 transition-all">
                  {persona.cta}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
