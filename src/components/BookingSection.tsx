import React, { useState } from 'react';
import { Send, ShieldCheck, Clock, Heart } from 'lucide-react';

export function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show success state.
    // TODO: Connect to backend endpoint or Calendly.
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (submitted) {
    return (
      <section id="book" className="py-24 md:py-32 bg-emerald-50">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-emerald-700" />
          </div>
          <h2 className="text-3xl font-serif font-medium text-stone-900 mb-4">
            We got your request!
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            We'll review your information and reach out within 24 hours to schedule your free Clarity Call. No pressure, no judgment — just a conversation about your books.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="book" className="py-24 md:py-32 bg-stone-900 text-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 md:grid-cols-2 items-start">
          {/* Left: Copy */}
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-emerald-400 mb-4">
              GET STARTED
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight text-white mb-6">
              Book Your Free <br className="hidden md:block" />
              QuickBooks Clarity Call
            </h2>
            <p className="text-stone-400 leading-relaxed mb-10 text-lg">
              Tell us a little about your situation. We'll reach out within 24 hours to schedule a no-pressure call where we look at your QuickBooks together and build a clear plan.
            </p>

            {/* Trust signals */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-stone-400">
                <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-sm">No commitment required</span>
              </div>
              <div className="flex items-center gap-3 text-stone-400">
                <Heart className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-sm">Zero judgment — we've seen it all</span>
              </div>
              <div className="flex items-center gap-3 text-stone-400">
                <Clock className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-sm">We respond within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit} className="bg-stone-800/60 rounded-3xl p-8 md:p-10 border border-stone-700/40">
            <div className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-300 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-stone-700/50 border border-stone-600/50 text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-colors"
                  placeholder="Jane Smith"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-300 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-stone-700/50 border border-stone-600/50 text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-colors"
                  placeholder="jane@example.com"
                />
              </div>

              {/* Phone (optional) */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-stone-300 mb-1.5">
                  Phone <span className="text-stone-500">(optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-stone-700/50 border border-stone-600/50 text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>

              {/* Business Type */}
              <div>
                <label htmlFor="businessType" className="block text-sm font-medium text-stone-300 mb-1.5">
                  Which best describes you?
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  required
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-stone-700/50 border border-stone-600/50 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-colors appearance-none"
                >
                  <option value="" disabled className="text-stone-500">Select your business type...</option>
                  <option value="real-estate" className="text-stone-900">Real Estate Investor</option>
                  <option value="therapist" className="text-stone-900">Therapist or Consultant</option>
                  <option value="nonprofit" className="text-stone-900">Nonprofit Organization</option>
                  <option value="restaurant-construction" className="text-stone-900">Restaurant or Construction</option>
                  <option value="other" className="text-stone-900">Other Small Business</option>
                </select>
              </div>

              {/* Message (optional) */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-300 mb-1.5">
                  Tell us about your situation <span className="text-stone-500">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-stone-700/50 border border-stone-600/50 text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-colors resize-none"
                  placeholder="E.g., I'm about 2 years behind on my bookkeeping..."
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-8 inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-emerald-500 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Request Your Free Clarity Call
              <Send className="w-4 h-4" />
            </button>

            <p className="text-xs text-stone-500 text-center mt-4">
              We'll never share your information. Takes 30 seconds.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
