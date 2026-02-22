import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, HeartHandshake, FileText, ShieldCheck, BarChart3 } from 'lucide-react';
import { BookingSection } from '../components/BookingSection';

export default function Nonprofits() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-stone-50">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-50 via-stone-50 to-stone-100"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-sm font-medium mb-6">
            For Nonprofits
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-stone-900 mb-6 max-w-4xl mx-auto leading-tight"
          >
            Focus on Your Mission. <span className="text-rose-800">We'll Handle the Numbers.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We keep your QuickBooks clean, your restricted funds tracked, and your board reports accurate — so you can spend your energy on the work that matters.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="#book" className="bg-rose-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-rose-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-block">
              Book Your Nonprofit Review
            </a>
          </motion.div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">The Pain of Nonprofit Bookkeeping</h2>
            <p className="text-stone-500">You started this to make a difference, not to reconcile spreadsheets.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Our board asks for financial reports and I scramble to make something look presentable.",
              "I have restricted grants and general donations mixed together and I'm not sure which funds are which.",
              "We had an audit coming and I spent three weekends trying to make the numbers make sense.",
              "I'm terrified we're not tracking things correctly and it could jeopardize our tax-exempt status."
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
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-rose-400"></div>
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
            <h2 className="text-3xl font-bold mb-6">How Zen Books Helps Nonprofits</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              { title: "Fund Tracking", desc: "We set up your QuickBooks to separate restricted grants, general donations, and program-specific funds so you always know exactly where money came from and where it's going.", icon: <HeartHandshake className="w-6 h-6" /> },
              { title: "Board-Ready Reports", desc: "We prepare clean, clear financial statements your board can actually understand — no accounting jargon, just the truth about your organization's financial health.", icon: <BarChart3 className="w-6 h-6" /> },
              { title: "Grant Compliance", desc: "We track grant expenditures against budgets so you can report accurately to funders and never worry about misallocated funds.", icon: <FileText className="w-6 h-6" /> },
              { title: "Audit Preparation", desc: "When audit time comes, your books are already clean. We keep everything organized and documented so auditors get what they need without the panic.", icon: <ShieldCheck className="w-6 h-6" /> }
            ].map((item, index) => (
              <div key={index} className="bg-stone-800/50 p-8 rounded-2xl border border-stone-700/50">
                <h3 className="text-xl font-bold text-rose-400 mb-3">{item.title}</h3>
                <p className="text-stone-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 bg-rose-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900">Packages for Nonprofits</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Nonprofit Cleanup",
                subtitle: "Best for: Organizations that are behind and need a fresh financial start.",
                features: ["Categorize historical transactions by fund/program", "Separate restricted and unrestricted funds", "Reconcile all bank and grant accounts"],
                cta: "Clean Up My Nonprofit Books",
                icon: <HeartHandshake className="w-6 h-6" />
              },
              {
                title: "Monthly Nonprofit Care",
                subtitle: "Best for: Ongoing accuracy and board-ready reporting every month.",
                features: ["Monthly categorization of all donations and expenses", "Reconciliation of all accounts", "Monthly financial statements for your board"],
                cta: "Start Monthly Nonprofit Care",
                icon: <FileText className="w-6 h-6" />
              },
              {
                title: "Premium Nonprofit Support",
                subtitle: "Best for: Grant-funded organizations with complex reporting needs.",
                features: ["Everything in Monthly Nonprofit Care", "Grant budget tracking and compliance reports", "Quarterly review calls with your team or board treasurer"],
                cta: "Get Premium Nonprofit Support",
                icon: <ShieldCheck className="w-6 h-6" />
              }
            ].map((pkg, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col">
                <div className="w-12 h-12 bg-rose-100 rounded-2xl flex items-center justify-center text-rose-700 mb-6">
                  {pkg.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-1">{pkg.title}</h3>
                <p className="text-xs font-semibold text-rose-600 uppercase tracking-wide mb-6">{pkg.subtitle}</p>
                <ul className="space-y-4 mb-8 flex-1">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start text-sm text-stone-700">
                      <CheckCircle className="w-5 h-5 text-rose-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#book" className="w-full py-3 rounded-xl border-2 border-rose-100 text-rose-800 font-semibold hover:bg-rose-50 transition-colors text-center block">
                  {pkg.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900">How It Works</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { title: "Organization Review", desc: "We look at your chart of accounts, funding sources, and reporting requirements to understand your unique structure." },
              { title: "The Cleanup", desc: "We organize historical transactions, separate funds correctly, and reconcile everything so your books reflect reality." },
              { title: "Ongoing Care", desc: "We handle the monthly bookkeeping quietly in the background so your financial statements are always current and accurate." },
              { title: "Board & Audit Ready", desc: "When your board meets or auditors arrive, the numbers are clean, clear, and ready to present." }
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
            <h2 className="text-3xl font-bold text-stone-900">Nonprofit FAQs</h2>
          </div>
          <div className="space-y-8">
            {[
              { q: "We have multiple grants with different reporting requirements. Can you handle that?", a: "Yes. We set up your QuickBooks to track each grant separately so you can pull reports per funder at any time." },
              { q: "Do you understand nonprofit accounting rules (like fund accounting)?", a: "Absolutely. We know the difference between restricted and unrestricted funds and how to present them correctly on your financial statements." },
              { q: "Can you help us get ready for our annual audit?", a: "Yes. We keep your books audit-ready year-round, so when audit season arrives, you hand over clean reports instead of scrambling." },
              { q: "We're small — just a few staff and mostly volunteers. Is this still for us?", a: "Definitely. Many of our nonprofit clients are lean organizations. You don't need a big budget to have clean books." }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-stone-200">
                <h3 className="text-lg font-bold text-stone-900 mb-2">{item.q}</h3>
                <p className="text-stone-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <BookingSection />
    </div>
  );
}
