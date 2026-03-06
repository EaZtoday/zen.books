import React, { useState } from 'react';
import { Send, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { trackEvent } from '../analytics';

export function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investorType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('form_submit', 'booking', formData.investorType);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (submitted) {
    return (
      <section id="book" className="py-32 md:py-40 bg-cream-100">
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-fern-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <Heart className="w-8 h-8 text-fern" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-warm-900 mb-6">
            We got your request.
          </h2>
          <p className="text-lg text-warm-600 leading-relaxed">
            We'll review your info and reach out within 24 hours to schedule your free Portfolio Review. No pressure, no judgment.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="book" className="py-32 md:py-40 bg-forest">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid gap-16 md:grid-cols-2 items-start">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-medium tracking-widest uppercase text-accent mb-4"
            >
              Get Started
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-cream mb-6"
            >
              Book your free<br />Portfolio Review.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-forest-400 leading-relaxed mb-10"
            >
              Tell us about your portfolio. We'll reach out within 24 hours to schedule a no-pressure call.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4 text-forest-400 text-sm"
            >
              <p>No commitment required</p>
              <p>Zero judgment — we've seen it all</p>
              <p>We respond within 24 hours</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10 pt-8 border-t border-forest-200"
            >
              <p className="text-xs font-medium tracking-widest uppercase text-forest-300 mb-4">We specialize in</p>
              <div className="flex flex-wrap gap-2">
                {['Buy & Hold', 'Fix & Flip', 'Wholesale', 'BRRRR', 'Multi-Family'].map((label) => (
                  <span key={label} className="text-xs bg-forest-100 text-forest-400 px-3 py-1.5 rounded-full">
                    {label}
                  </span>
                ))}
              </div>
              <p className="text-forest-400 mt-6 italic font-serif text-sm">
                "We've seen worse. We don't judge."
              </p>
            </motion.div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-forest-500 mb-2">Name</label>
              <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl bg-forest-100 border border-forest-200 text-cream placeholder-forest-300 focus:outline-none focus:ring-2 focus:ring-accent/40 transition-colors"
                placeholder="Jane Smith" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-forest-500 mb-2">Email</label>
              <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl bg-forest-100 border border-forest-200 text-cream placeholder-forest-300 focus:outline-none focus:ring-2 focus:ring-accent/40 transition-colors"
                placeholder="jane@example.com" />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-forest-500 mb-2">
                Phone <span className="text-forest-300">(optional)</span>
              </label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl bg-forest-100 border border-forest-200 text-cream placeholder-forest-300 focus:outline-none focus:ring-2 focus:ring-accent/40 transition-colors"
                placeholder="(555) 123-4567" />
            </div>

            <div>
              <label htmlFor="investorType" className="block text-sm font-medium text-forest-500 mb-2">Investment strategy</label>
              <select id="investorType" name="investorType" required value={formData.investorType} onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl bg-forest-100 border border-forest-200 text-cream focus:outline-none focus:ring-2 focus:ring-accent/40 transition-colors appearance-none">
                <option value="" disabled className="text-forest-300">Select...</option>
                <option value="buy-and-hold" className="text-warm-900">Buy & Hold (Rentals)</option>
                <option value="fix-and-flip" className="text-warm-900">Fix & Flip</option>
                <option value="wholesale" className="text-warm-900">Wholesale</option>
                <option value="brrrr" className="text-warm-900">BRRRR</option>
                <option value="mixed" className="text-warm-900">Multiple Strategies</option>
                <option value="other" className="text-warm-900">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-forest-500 mb-2">
                Tell us about your portfolio <span className="text-forest-300">(optional)</span>
              </label>
              <textarea id="message" name="message" rows={3} value={formData.message} onChange={handleChange}
                className="w-full px-4 py-3.5 rounded-xl bg-forest-100 border border-forest-200 text-cream placeholder-forest-300 focus:outline-none focus:ring-2 focus:ring-accent/40 transition-colors resize-none"
                placeholder="I have 12 doors across 3 LLCs and I'm about 2 years behind..." />
            </div>

            <button type="submit"
              className="w-full mt-4 inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-full text-base font-medium hover:bg-accent-dark transition-all">
              Request Your Free Call
              <Send className="w-4 h-4" />
            </button>

            <p className="text-xs text-forest-300 text-center mt-3">
              We'll never share your information.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
