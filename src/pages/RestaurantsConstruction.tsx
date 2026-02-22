import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Utensils, Truck, Receipt, Users } from 'lucide-react';
import { BookingSection } from '../components/BookingSection';

export default function RestaurantsConstruction() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-stone-50">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-50 via-stone-50 to-stone-100"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-6">
            For Restaurants & Construction
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-stone-900 mb-6 max-w-4xl mx-auto leading-tight"
          >
            Stay on the Job. <span className="text-amber-800">We'll Track Every Dollar.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We manage the high volume of transactions, vendor payments, and payroll records in QuickBooks so you can focus on running your operation — not reconciling receipts.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="#book" className="bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-block">
              Book Your Operations Review
            </a>
          </motion.div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">The Pain of Operations Bookkeeping</h2>
            <p className="text-stone-500">Your days are intense enough without fighting QuickBooks at midnight.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              "I have a pile of vendor invoices and receipts that I keep meaning to enter into QuickBooks but never do.",
              "Payroll, tips, and sales tax are all jumbled together and I have no idea what my actual profit is.",
              "I have subcontractors I need to 1099 at year-end and I'm not tracking their payments correctly.",
              "My accountant keeps asking for reports and I just send them my bank statements because my books are a mess."
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
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-amber-400"></div>
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
            <h2 className="text-3xl font-bold mb-6">How Zen Books Helps Restaurants & Construction</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              { title: "High-Volume Transaction Management", desc: "Whether it's daily POS sales or weekly material purchases, we categorize and reconcile the high volume of transactions that operations-heavy businesses generate." },
              { title: "Vendor & Subcontractor Tracking", desc: "We track every vendor payment and subcontractor expense so you know exactly what you owe, what you've paid, and who needs a 1099 at year-end." },
              { title: "Payroll Coordination", desc: "We reconcile payroll entries, tips, and employment taxes in QuickBooks so your labor costs are always accurate and your reports make sense." },
              { title: "Job Costing & Profit Clarity", desc: "We help you see the true cost and profit of each project, location, or menu line — so you know what's actually making money." }
            ].map((item, index) => (
              <div key={index} className="bg-stone-800/50 p-8 rounded-2xl border border-stone-700/50">
                <h3 className="text-xl font-bold text-amber-400 mb-3">{item.title}</h3>
                <p className="text-stone-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 bg-amber-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900">Packages for Operations-Heavy Businesses</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Operations Cleanup",
                subtitle: "Best for: Businesses that are behind and need their books caught up.",
                features: ["Categorize historical transactions and vendor payments", "Reconcile all bank accounts and credit cards", "Organize subcontractor records for 1099 compliance"],
                cta: "Clean Up My Operations",
                icon: <Utensils className="w-6 h-6" />
              },
              {
                title: "Monthly Operations Care",
                subtitle: "Best for: Ongoing accuracy in a high-transaction business.",
                features: ["Monthly categorization of all income and expenses", "Payroll and tip reconciliation", "Monthly P&L and vendor payment reports"],
                cta: "Start Monthly Operations Care",
                icon: <Truck className="w-6 h-6" />
              },
              {
                title: "Premium Operations Support",
                subtitle: "Best for: Multi-location or multi-project businesses that need deeper insight.",
                features: ["Everything in Monthly Operations Care", "Job costing or location-based profit tracking", "Quarterly review calls to analyze performance"],
                cta: "Get Premium Operations Support",
                icon: <Receipt className="w-6 h-6" />
              }
            ].map((pkg, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col">
                <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-700 mb-6">
                  {pkg.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-1">{pkg.title}</h3>
                <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-6">{pkg.subtitle}</p>
                <ul className="space-y-4 mb-8 flex-1">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start text-sm text-stone-700">
                      <CheckCircle className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#book" className="w-full py-3 rounded-xl border-2 border-amber-100 text-amber-800 font-semibold hover:bg-amber-50 transition-colors text-center block">
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
              { title: "Operations Review", desc: "We map out your vendors, bank accounts, payroll setup, and transaction flow to understand your business." },
              { title: "The Cleanup", desc: "We catch up on backlogged transactions, organize vendor records, and reconcile everything so your books are accurate." },
              { title: "Automated Flow", desc: "We set up bank feeds, vendor rules, and categorization shortcuts to handle the daily transaction volume efficiently." },
              { title: "Monthly Clarity", desc: "You get clear reports showing exactly how your operations performed — profit by project, location, or overall." }
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
            <h2 className="text-3xl font-bold text-stone-900">Operations FAQs</h2>
          </div>
          <div className="space-y-8">
            {[
              { q: "I have hundreds of transactions per month. Can you handle that volume?", a: "Yes. High-volume bookkeeping is one of our specialties. We use bank feeds, rules, and batch processing to handle the volume efficiently and accurately." },
              { q: "I use a POS system like Toast or Square. Does that integrate with QuickBooks?", a: "Yes. We connect your POS system to QuickBooks so sales and tips flow in automatically. We then reconcile to make sure everything matches your bank deposits." },
              { q: "I need to track costs per job or per project. Can you do that?", a: "Absolutely. We set up job costing or class tracking in QuickBooks so you can see the true profit on each project or location." },
              { q: "I have subcontractors who need 1099s. Can you handle that?", a: "Yes. We track all subcontractor payments throughout the year and prepare the records you need for 1099 filing." }
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
