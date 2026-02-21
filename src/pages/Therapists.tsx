import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Heart, Users, Calendar } from 'lucide-react';

export default function Therapists() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-stone-50">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-50 via-stone-50 to-stone-100"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
            For Therapists & Consultants
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-stone-900 mb-6 max-w-4xl mx-auto leading-tight"
          >
            Stay in Session, <span className="text-purple-800">Not in Spreadsheets.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We organize your income, expenses, and payouts in QuickBooks so you know exactly what you’re taking home—and can focus on your clients instead of your books.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Book a QuickBooks Clarity Call
            </button>
          </motion.div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">The Pain of Practice Bookkeeping</h2>
            <p className="text-stone-500">You didn't start your practice to become an accountant.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              "I dread the end of the month because I have to log all these sessions and copays.",
              "I don't know what I can actually write off, so I probably miss deductions.",
              "I’m embarrassed that my business finances are mixed up with my personal spending.",
              "I want to hire an admin or raise my rates, but I don't know if the numbers work."
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start p-6 rounded-2xl bg-stone-50 border border-stone-100"
              >
                <div className="flex-shrink-0 mr-4">
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-purple-400"></div>
                </div>
                <p className="text-stone-700 italic">"{item}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Zen Books Helps */}
      <section className="py-24 bg-stone-900 text-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">How Zen Books Helps Therapists & Consultants</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              { title: "Clean Income Tracking", desc: "We match deposits in your bank to reports from your client or practice management software (like SimplePractice, TherapyNotes, etc.), so your revenue is accurate." },
              { title: "Expense Clarity", desc: "We categorize supervision fees, trainings, rent, software, and all other expenses so you can see your true overhead and margins." },
              { title: "Tax Peace of Mind", desc: "We keep your books ready for estimated taxes and year-end, so you’re not surprised by a bill or scrambling for reports." },
              { title: "Profit & Owner’s Pay", desc: "We separate true business expenses from owner’s pay so you can finally see what you’re really taking home." }
            ].map((item, index) => (
              <div key={index} className="bg-stone-800/50 p-8 rounded-2xl border border-stone-700/50">
                <h3 className="text-xl font-bold text-purple-400 mb-3">{item.title}</h3>
                <p className="text-stone-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 bg-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900">Packages for Pros</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Practice Cleanup",
                subtitle: "Best for: When you’ve fallen behind and need a fresh start.",
                features: ["Categorize past income and expenses", "Separate personal from business transactions", "Reconcile your business checking (and credit cards if applicable)"],
                cta: "Get Started with Cleanup",
                icon: <Calendar className="w-6 h-6" />
              },
              {
                title: "Steady Practice Care",
                subtitle: "Best for: A calm, organized practice month after month.",
                features: ["Monthly categorization of all transactions", "Reconciliation of bank and credit card accounts", "Quarterly P&L review with simple explanations"],
                cta: "Get Started with Steady Care",
                icon: <Heart className="w-6 h-6" />
              },
              {
                title: "Premium Practice Support",
                subtitle: "Best for: Group practices or busy consultants.",
                features: ["Monthly P&L and Balance Sheet", "Payroll support and contractor (1099) tracking", "Monthly check-in calls to review your numbers"],
                cta: "Get Started with Premium Support",
                icon: <Users className="w-6 h-6" />
              }
            ].map((pkg, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-700 mb-6">
                  {pkg.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-1">{pkg.title}</h3>
                <p className="text-xs font-semibold text-purple-600 uppercase tracking-wide mb-6">{pkg.subtitle}</p>
                <ul className="space-y-4 mb-8 flex-1">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start text-sm text-stone-700">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 rounded-xl border-2 border-purple-100 text-purple-800 font-semibold hover:bg-purple-50 transition-colors">
                  {pkg.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works (Pro) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900">How It Works</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { title: "Practice Review", desc: "We look at how you bill clients, collect payments, and pay expenses to understand your unique flow." },
              { title: "The Setup", desc: "We connect your bank feeds, clean up your chart of accounts, and organize your QuickBooks file for clarity." },
              { title: "Ongoing Care", desc: "We handle the bookkeeping quietly in the background so your books stay accurate and up to date without you lifting a finger." },
              { title: "Tax Time Zen", desc: "You hand clean reports to your accountant and breathe easy, knowing everything is correct." }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto bg-stone-900 text-white rounded-full flex items-center justify-center text-lg font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="font-bold text-stone-900 mb-2">{step.title}</h3>
                <p className="text-stone-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900">Practice FAQs</h2>
          </div>
          <div className="space-y-8">
            {[
              { q: "I accidentally used my business card for groceries. Is that okay?", a: "It happens. We’ll flag it as an owner’s draw so your business expenses stay accurate and your books stay clean." },
              { q: "I use SimplePractice/TherapyNotes. Do you work with that?", a: "Yes. We match the deposits hitting your bank account to the reports from your practice management software for seamless tracking." },
              { q: "I'm not in Scranton. Can we still work together?", a: "Yes. We are a remote-first firm and work with professionals across the country securely and efficiently." }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-stone-200">
                <h3 className="text-lg font-bold text-stone-900 mb-2">{item.q}</h3>
                <p className="text-stone-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
