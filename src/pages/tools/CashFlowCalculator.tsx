import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Calculator, DollarSign, TrendingUp, Home } from 'lucide-react';
import SeoHead from '../../components/SeoHead';
import { BookingSection } from '../../components/BookingSection';

interface Inputs {
  purchasePrice: string;
  downPaymentPct: string;
  interestRate: string;
  loanTermYears: string;
  monthlyRent: string;
  vacancyRatePct: string;
  monthlyExpenses: string;
  propertyTaxMonthly: string;
  insuranceMonthly: string;
  maintenancePct: string;
  managementPct: string;
  closingCostsPct: string;
}

function num(s: string, fallback = 0): number {
  const n = parseFloat(s.replace(/,/g, ''));
  return isNaN(n) ? fallback : n;
}

function fmt(n: number, decimals = 0): string {
  return n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

function pmt(rate: number, nper: number, pv: number): number {
  if (rate === 0) return pv / nper;
  return (pv * rate * Math.pow(1 + rate, nper)) / (Math.pow(1 + rate, nper) - 1);
}

const defaults: Inputs = {
  purchasePrice: '200000',
  downPaymentPct: '25',
  interestRate: '7.5',
  loanTermYears: '30',
  monthlyRent: '1800',
  vacancyRatePct: '5',
  monthlyExpenses: '0',
  propertyTaxMonthly: '250',
  insuranceMonthly: '100',
  maintenancePct: '5',
  managementPct: '0',
  closingCostsPct: '3',
};

export default function CashFlowCalculator() {
  const [inp, setInp] = useState<Inputs>(defaults);

  const set = (key: keyof Inputs) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setInp((prev) => ({ ...prev, [key]: e.target.value }));

  const results = useMemo(() => {
    const price = num(inp.purchasePrice);
    const downPct = num(inp.downPaymentPct) / 100;
    const rate = num(inp.interestRate) / 100 / 12;
    const term = num(inp.loanTermYears) * 12;
    const rent = num(inp.monthlyRent);
    const vacancyPct = num(inp.vacancyRatePct) / 100;
    const propTax = num(inp.propertyTaxMonthly);
    const insurance = num(inp.insuranceMonthly);
    const maintenancePct = num(inp.maintenancePct) / 100;
    const mgmtPct = num(inp.managementPct) / 100;
    const closingPct = num(inp.closingCostsPct) / 100;
    const otherExp = num(inp.monthlyExpenses);

    const downPayment = price * downPct;
    const loanAmount = price - downPayment;
    const closingCosts = price * closingPct;
    const totalCashIn = downPayment + closingCosts;

    const monthlyMortgage = loanAmount > 0 ? pmt(rate, term, loanAmount) : 0;

    const effectiveRent = rent * (1 - vacancyPct);
    const maintenanceMonthly = rent * maintenancePct;
    const managementMonthly = rent * mgmtPct;

    const totalExpenses =
      monthlyMortgage + propTax + insurance + maintenanceMonthly + managementMonthly + otherExp;

    const noi = effectiveRent - (propTax + insurance + maintenanceMonthly + managementMonthly + otherExp);
    const monthlyCashFlow = effectiveRent - totalExpenses;
    const annualCashFlow = monthlyCashFlow * 12;
    const cashOnCash = totalCashIn > 0 ? (annualCashFlow / totalCashIn) * 100 : 0;
    const capRate = price > 0 ? (noi * 12 / price) * 100 : 0;
    const grossRentMultiplier = rent > 0 ? price / (rent * 12) : 0;

    // DSCR: NOI / Annual Debt Service
    const annualDebtService = monthlyMortgage * 12;
    const dscr = annualDebtService > 0 ? (noi * 12) / annualDebtService : 0;

    return {
      downPayment,
      loanAmount,
      closingCosts,
      totalCashIn,
      monthlyMortgage,
      effectiveRent,
      maintenanceMonthly,
      managementMonthly,
      totalExpenses,
      noi,
      monthlyCashFlow,
      annualCashFlow,
      cashOnCash,
      capRate,
      grossRentMultiplier,
      dscr,
    };
  }, [inp]);

  const cashFlowColor =
    results.monthlyCashFlow >= 200
      ? 'text-fern'
      : results.monthlyCashFlow >= 0
      ? 'text-warm-700'
      : 'text-red-600';

  const InputField = ({
    label,
    field,
    prefix,
    suffix,
    help,
  }: {
    label: string;
    field: keyof Inputs;
    prefix?: string;
    suffix?: string;
    help?: string;
  }) => (
    <div>
      <label className="block text-sm font-medium text-warm-700 mb-1">{label}</label>
      {help && <p className="text-xs text-warm-400 mb-2">{help}</p>}
      <div className="relative">
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-warm-400 text-sm">{prefix}</span>
        )}
        <input
          type="number"
          value={inp[field]}
          onChange={set(field)}
          className={`w-full border border-cream-300 rounded-xl py-3 text-warm-900 text-sm focus:outline-none focus:border-fern bg-white ${
            prefix ? 'pl-8 pr-4' : suffix ? 'pl-4 pr-10' : 'px-4'
          }`}
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-warm-400 text-sm">{suffix}</span>
        )}
      </div>
    </div>
  );

  return (
    <>
      <SeoHead
        title="Rental Property Cash Flow Calculator | Free Tool — Zen Books"
        description="Calculate monthly cash flow, cap rate, cash-on-cash return, and DSCR for any rental property. Free tool for real estate investors from Zen Books."
        path="/tools/rental-cash-flow-calculator"
      />

      {/* Hero */}
      <section className="bg-cream pt-28 pb-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-fern-50 text-fern text-sm font-medium px-4 py-2 rounded-full mb-6"
          >
            <Calculator className="w-4 h-4" /> Free Tool
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-medium tracking-tight text-warm-900 mb-4"
          >
            Rental Property Cash Flow Calculator
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-warm-600 max-w-2xl mx-auto"
          >
            Know your numbers before you commit. Monthly cash flow, cap rate, cash-on-cash return, and DSCR — all in one place.
          </motion.p>
        </div>
      </section>

      {/* Calculator */}
      <section className="bg-cream pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Inputs */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl border border-cream-200 p-8 space-y-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <Home className="w-5 h-5 text-fern" />
                <h2 className="text-lg font-serif font-medium text-warm-900">Property Details</h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <InputField label="Purchase Price" field="purchasePrice" prefix="$" />
                <InputField label="Down Payment" field="downPaymentPct" suffix="%" help="Typically 20–25% for investment" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <InputField label="Interest Rate" field="interestRate" suffix="%" />
                <InputField label="Loan Term" field="loanTermYears" suffix="yrs" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <InputField label="Closing Costs" field="closingCostsPct" suffix="%" help="Typically 2–4%" />
                <div />
              </div>

              <hr className="border-cream-200" />

              <div className="flex items-center gap-3">
                <DollarSign className="w-5 h-5 text-fern" />
                <h2 className="text-lg font-serif font-medium text-warm-900">Income & Expenses</h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <InputField label="Monthly Rent" field="monthlyRent" prefix="$" />
                <InputField label="Vacancy Rate" field="vacancyRatePct" suffix="%" help="5–10% is typical" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <InputField label="Property Tax" field="propertyTaxMonthly" prefix="$" help="Monthly" />
                <InputField label="Insurance" field="insuranceMonthly" prefix="$" help="Monthly" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <InputField label="Maintenance" field="maintenancePct" suffix="%" help="% of rent (5–10%)" />
                <InputField label="Management" field="managementPct" suffix="%" help="% of rent (8–12%)" />
              </div>
              <InputField label="Other Monthly Expenses" field="monthlyExpenses" prefix="$" help="HOA, utilities, etc." />
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {/* Monthly Cash Flow — Hero Stat */}
              <div className="bg-forest rounded-3xl p-8 text-center">
                <p className="text-forest-400 text-sm font-medium tracking-widest uppercase mb-2">Monthly Cash Flow</p>
                <p className={`text-6xl font-serif font-medium mb-2 ${results.monthlyCashFlow >= 0 ? 'text-fern-light' : 'text-red-400'}`}>
                  {results.monthlyCashFlow < 0 ? '-' : ''}${fmt(Math.abs(results.monthlyCashFlow))}
                </p>
                <p className="text-forest-400 text-sm">
                  {results.monthlyCashFlow >= 200
                    ? 'Strong cash flow — this deal works.'
                    : results.monthlyCashFlow >= 0
                    ? 'Marginal — not much cushion.'
                    : 'Negative cash flow — this deal costs you monthly.'}
                </p>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    label: 'Annual Cash Flow',
                    value: `${results.annualCashFlow < 0 ? '-' : ''}$${fmt(Math.abs(results.annualCashFlow))}`,
                    icon: <TrendingUp className="w-4 h-4" />,
                    good: results.annualCashFlow > 0,
                  },
                  {
                    label: 'Cash-on-Cash Return',
                    value: `${fmt(results.cashOnCash, 1)}%`,
                    icon: <DollarSign className="w-4 h-4" />,
                    good: results.cashOnCash >= 6,
                  },
                  {
                    label: 'Cap Rate',
                    value: `${fmt(results.capRate, 1)}%`,
                    icon: <Home className="w-4 h-4" />,
                    good: results.capRate >= 5,
                  },
                  {
                    label: 'DSCR',
                    value: fmt(results.dscr, 2),
                    icon: <Calculator className="w-4 h-4" />,
                    good: results.dscr >= 1.25,
                  },
                ].map((metric) => (
                  <div key={metric.label} className="bg-white rounded-2xl border border-cream-200 p-5">
                    <div className="flex items-center gap-2 text-warm-400 mb-2">
                      {metric.icon}
                      <p className="text-xs font-medium tracking-widest uppercase">{metric.label}</p>
                    </div>
                    <p className={`text-2xl font-serif font-medium ${metric.good ? 'text-warm-900' : 'text-red-500'}`}>
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Deal Breakdown */}
              <div className="bg-cream-100 rounded-3xl border border-cream-200 p-6 space-y-3">
                <h3 className="text-sm font-medium text-warm-900 mb-4">Deal Breakdown</h3>
                {[
                  { label: 'Down Payment', value: `$${fmt(results.downPayment)}` },
                  { label: 'Closing Costs', value: `$${fmt(results.closingCosts)}` },
                  { label: 'Total Cash In', value: `$${fmt(results.totalCashIn)}`, bold: true },
                  { label: 'Loan Amount', value: `$${fmt(results.loanAmount)}` },
                  { label: 'Monthly Mortgage (P&I)', value: `$${fmt(results.monthlyMortgage)}` },
                  { label: 'Effective Gross Rent', value: `$${fmt(results.effectiveRent)}` },
                  { label: 'Total Monthly Expenses', value: `$${fmt(results.totalExpenses)}` },
                  { label: 'NOI (Monthly)', value: `$${fmt(results.noi)}` },
                ].map((row) => (
                  <div key={row.label} className={`flex justify-between text-sm ${row.bold ? 'border-t border-cream-200 pt-3 font-semibold text-warm-900' : 'text-warm-600'}`}>
                    <span>{row.label}</span>
                    <span className="font-medium">{row.value}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="bg-fern-50 border border-fern-100 rounded-2xl p-6 text-center">
                <p className="text-warm-700 text-sm leading-relaxed mb-4">
                  <strong className="text-warm-900">Numbers look good?</strong> Make sure your books are set up to track this deal correctly from day one — per-property P&L, CapEx vs. repairs, lender-ready reports.
                </p>
                <a
                  href="#book"
                  className="inline-flex items-center gap-2 bg-fern text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-fern-dark transition-all"
                >
                  Book a Free Portfolio Review
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Read Your Numbers */}
      <section className="bg-cream-100 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-medium text-warm-900 mb-10 text-center">How to read your results</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Monthly Cash Flow',
                body: 'What\'s left after all expenses including the mortgage. Industry standard: aim for $200+/door/month. Under $100 is marginal. Negative means you\'re paying to own it.',
              },
              {
                title: 'Cash-on-Cash Return',
                body: 'Annual cash flow divided by your total cash invested. This is your actual return on capital deployed. 6–8%+ is solid for most markets. Compare it to alternative investments.',
              },
              {
                title: 'Cap Rate',
                body: 'NOI divided by purchase price — ignores financing. Useful for comparing properties regardless of how you\'re financing them. In NEPA, 6–8%+ is a strong deal.',
              },
              {
                title: 'DSCR (Debt Service Coverage Ratio)',
                body: 'NOI divided by annual debt payments. Lenders want 1.25 or higher for a DSCR loan — meaning the property generates 25% more income than it takes to service the debt.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-cream-200">
                <h3 className="font-serif font-medium text-warm-900 mb-2">{item.title}</h3>
                <p className="text-warm-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingSection />
    </>
  );
}
