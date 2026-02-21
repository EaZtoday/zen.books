import React from 'react';
import { ArrowRight, Home as HomeIcon, Users, Briefcase, HeartHandshake, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PersonaCard {
  title: string;
  description: string;
  href: string;
  image: string;
  illustration?: React.ReactNode;
}

const personas: PersonaCard[] = [
  {
    title: 'Real Estate Investors',
    description: 'You juggle multiple properties, loans, and entities. We keep your books clean by property so you always know your true cash flow.',
    href: '/real-estate-investors',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop', // Modern property/architectural feel
  },
  {
    title: 'Therapists & Consultants',
    description: 'You want to stay in session, not in spreadsheets. We organize your income and expenses so you know exactly what you’re taking home.',
    href: '/therapists-consultants',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop', // Professional, calm consultant
  },
  {
    title: 'Nonprofits',
    description: 'You answer to a board and manage restricted funds. We provide the clean, transparent reporting you need for compliance and confidence.',
    href: '#book', // Changed to anchor to booking
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Restaurants & Construction',
    description: 'Your operations are intense. We handle the high volume of transactions so you can stay on the job site or in the kitchen.',
    href: '#book', // Changed to anchor to booking
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop',
  },
];

export function PersonasSection() {
  return (
    <section id="personas" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-sm font-sans font-semibold tracking-widest uppercase text-stone-500 mb-4">
            WHO WE HELP
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-stone-900 mb-6">
            For busy owners and organizations ready to <br className="hidden md:block" />
            ditch the books and do what they’re best at
          </h2>
        </div>
        
        {/* Alternating Grid Layout */}
        <div className="space-y-24">
          {/* Row 1: Image Left, Text Right */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-emerald-100 rounded-[2.5rem] rotate-3 group-hover:rotate-6 transition-transform duration-500 -z-10" />
              <img 
                src={personas[0].image} 
                alt={personas[0].title}
                className="w-full aspect-[4/3] object-cover rounded-[2.5rem] shadow-xl"
              />
            </div>
            <div className="md:pl-10 text-center md:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl mb-6">
                <HomeIcon className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-serif font-medium text-stone-900 mb-4">{personas[0].title}</h3>
              <p className="text-lg text-stone-600 font-sans leading-relaxed mb-8">{personas[0].description}</p>
              <Link to={personas[0].href} className="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-800 transition-colors group">
                Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Row 2: Text Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 md:pr-10 text-center md:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-serif font-medium text-stone-900 mb-4">{personas[1].title}</h3>
              <p className="text-lg text-stone-600 font-sans leading-relaxed mb-8">{personas[1].description}</p>
              <Link to={personas[1].href} className="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-800 transition-colors group">
                Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="order-1 md:order-2 relative group">
              <div className="absolute inset-0 bg-purple-100 rounded-[2.5rem] -rotate-3 group-hover:-rotate-6 transition-transform duration-500 -z-10" />
              <img 
                src={personas[1].image} 
                alt={personas[1].title}
                className="w-full aspect-[4/3] object-cover rounded-[2.5rem] shadow-xl"
              />
            </div>
          </div>

          {/* Row 3: Image Left, Text Right */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-rose-100 rounded-[2.5rem] rotate-3 group-hover:rotate-6 transition-transform duration-500 -z-10" />
              <img 
                src={personas[2].image} 
                alt={personas[2].title}
                className="w-full aspect-[4/3] object-cover rounded-[2.5rem] shadow-xl"
              />
            </div>
            <div className="md:pl-10 text-center md:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-rose-50 text-rose-600 rounded-2xl mb-6">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-serif font-medium text-stone-900 mb-4">{personas[2].title}</h3>
              <p className="text-lg text-stone-600 font-sans leading-relaxed mb-8">{personas[2].description}</p>
              <Link to={personas[2].href} className="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-800 transition-colors group">
                Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Row 4: Text Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 md:pr-10 text-center md:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl mb-6">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-serif font-medium text-stone-900 mb-4">{personas[3].title}</h3>
              <p className="text-lg text-stone-600 font-sans leading-relaxed mb-8">{personas[3].description}</p>
              <Link to={personas[3].href} className="inline-flex items-center text-emerald-700 font-semibold hover:text-emerald-800 transition-colors group">
                Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="order-1 md:order-2 relative group">
              <div className="absolute inset-0 bg-amber-100 rounded-[2.5rem] -rotate-3 group-hover:-rotate-6 transition-transform duration-500 -z-10" />
              <img 
                src={personas[3].image} 
                alt={personas[3].title}
                className="w-full aspect-[4/3] object-cover rounded-[2.5rem] shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}