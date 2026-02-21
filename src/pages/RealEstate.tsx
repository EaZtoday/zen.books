import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Building, Briefcase, TrendingUp } from 'lucide-react';

export default function RealEstate() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-stone-50">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-stone-50 to-stone-100"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
            For Real Estate Investors
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-stone-900 mb-6 max-w-4xl mx-auto leading-tight"
          >
            Clear Books for Every Property. <span className="text-blue-800">Zero Stress for You.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We keep your QuickBooks clean for every entity, loan, and expense so you always know your true cash flow and returns.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Book a QuickBooks Clarity Call
            </button>
          </motion.div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">The Pain of Investor Bookkeeping</h2>
            <p className="text-stone-500">Managing a portfolio is hard enough without messy books.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              "I have no idea which property is actually making money.",
              "Is this a capital improvement or a repair? I just guess and hope it’s right.",
              "I have three LLCs and four bank accounts and it’s all a jumbled mess in QuickBooks.",
              "My lender needs a P&L by Friday and I’m scrambling to paste spreadsheets together."
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
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-blue-400"></div>
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
            <h2 className="text-3xl font-bold mb-6">How Zen Books Helps Real Estate Investors</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              { title: "Property-Aware Setup", desc: "We configure QuickBooks Online to track income and expenses by property (class, location, or other structure), so you see exactly how each door is performing." },
              { title: "Entity Management", desc: "Whether you have one LLC or five, we keep intercompany transfers and equity accounts straight so nothing falls through the cracks." },
              { title: "CapEx vs. Repairs", desc: "We correctly categorize major renovations versus simple repairs, saving you confusion and potential trouble at tax time." },
              { title: "Lender-Ready Reports", desc: "Need a Balance Sheet or P&L for a refinance? We keep your books current so you can click “print” and look professional instantly." }
            ].map((item, index) => (
              <div key={index} className="bg-stone-800/50 p-8 rounded-2xl border border-stone-700/50">
                <h3 className="text-xl font-bold text-blue-400 mb-3">{item.title}</h3>
                <p className="text-stone-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 bg-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900">Packages for Investors</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "The Portfolio Cleanup & Setup",
                subtitle: "Best for: Investors who are behind and need a fresh start.",
                features: ["Categorize historical transactions by property/class", "Reconcile mortgages and escrow accounts", "Fix \"mystery\" transfers between entities"],
                cta: "Get Started with Cleanup",
                icon: <Building className="w-6 h-6" />
              },
              {
                title: "Monthly Portfolio Care",
                subtitle: "Best for: Ongoing peace of mind and accurate monthly reports.",
                features: ["Categorize monthly rents and expenses", "Reconcile bank accounts and credit cards", "Deliver monthly P&L by property or portfolio view"],
                cta: "Get Started with Monthly Care",
                icon: <Briefcase className="w-6 h-6" />
              },
              {
                title: "Premium Portfolio Support",
                subtitle: "Best for: Growing portfolios that need deeper insight and strategy.",
                features: ["Everything in Monthly Portfolio Care", "Quarterly calls to review portfolio performance", "Coordinate directly with your property management software data"],
                cta: "Get Started with Premium Support",
                icon: <TrendingUp className="w-6 h-6" />
              }
            ].map((pkg, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-700 mb-6">
                  {pkg.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-1">{pkg.title}</h3>
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-6">{pkg.subtitle}</p>
                <ul className="space-y-4 mb-8 flex-1">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start text-sm text-stone-700">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 rounded-xl border-2 border-blue-100 text-blue-800 font-semibold hover:bg-blue-50 transition-colors">
                  {pkg.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works (Investor) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900">How It Works</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { title: "Portfolio Review", desc: "We map out your entities, properties, and bank accounts to create a clear plan of attack." },
              { title: "The Deep Clean", desc: "We untangle commingled funds and allocate income and expenses to the right properties, so your history is accurate." },
              { title: "Automated Flow", desc: "We set up bank feeds and rules so your QuickBooks stays clean automatically, reducing manual work." },
              { title: "Monthly Clarity", desc: "You get clear reports showing exactly how your portfolio performed this month, giving you confidence to grow." }
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
            <h2 className="text-3xl font-bold text-stone-900">Investor FAQs</h2>
          </div>
          <div className="space-y-8">
            {[
              { q: "I have multiple LLCs. Can you handle that?", a: "Yes. We specialize in multi-entity setups and keep intercompany transactions clean and separate." },
              { q: "Do you work with my CPA?", a: "Absolutely. We prepare the clean, year-end books they need to file your taxes efficiently and accurately." },
              { q: "I’m currently using Excel. Can we move to QuickBooks?", a: "Yes. We’ll set up your QuickBooks Online file from scratch and import your data correctly so you can move forward with confidence." },
              { q: "How do we work together remotely?", a: "We use secure cloud tools to access your QuickBooks and documents. We serve investors across the U.S. from our base in Scranton, PA." }
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
