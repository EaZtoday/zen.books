import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { StatusCard } from './StatusCard';

export function HeroSection() {
  return (
    <section className="relative bg-surface-secondary pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/50 via-surface-secondary to-emerald-50/20" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 md:gap-16 md:grid-cols-2 items-center">
        {/* Left: Copy */}
        <div>
          <motion.p 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-sans font-semibold tracking-widest uppercase text-stone-500 mb-6"
          >
            Bookkeeping for Small Business
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-[4rem] font-serif font-medium tracking-tight text-stone-900 leading-[1.1] mb-8"
          >
            Stop Drowning in Your Books. <br className="hidden lg:block" />
            <span className="text-emerald-800 italic">We Bring Calm to Your Numbers.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-600 leading-relaxed mb-10 max-w-lg font-sans"
          >
            Zen Books handles the messy, ongoing bookkeeping for busy investors, therapists, nonprofits, and operations-heavy businesses.
            <br /><br />
            You hand it off once; we keep it clean every month in QuickBooks Online so you can almost forget bookkeeping exists.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* Primary CTA */}
            <a 
              href="#book" 
              className="inline-flex items-center justify-center gap-2 bg-emerald-800 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-emerald-900 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Book a Clarity Call
              <ArrowRight className="w-4 h-4" />
            </a>
            
            {/* Secondary CTA */}
            <a 
              href="#services" 
              className="inline-flex items-center justify-center gap-2 border-2 border-stone-300 text-stone-700 px-8 py-4 rounded-full text-base font-semibold hover:border-stone-400 hover:bg-stone-100 transition-all"
            >
              See Our Services
            </a>
          </motion.div>
        </div>
        
        {/* Right: Status Card Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center items-center relative h-full min-h-[300px] md:min-h-[400px] w-full"
        >
           {/* Decorative background blob */}
           <div className="absolute inset-0 bg-emerald-100/30 rounded-full blur-3xl transform scale-75 translate-y-10 -z-10"></div>
           
           <StatusCard />
        </motion.div>
      </div>
    </section>
  );
}
