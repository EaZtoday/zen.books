import React from 'react';

export function StatusCard() {
  return (
    <div className="relative w-full max-w-md">
      {/* Floating background shapes */}
      <div className="pointer-events-none absolute -top-6 -right-4 h-24 w-24 rounded-full bg-emerald-200/40 blur-2xl animate-[floatShape_14s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute -bottom-10 -left-8 h-32 w-32 rounded-3xl bg-amber-200/40 blur-3xl animate-[floatShape_18s_ease-in-out_infinite]" />

      {/* Main card */}
      <div
        className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-gradient-to-br
                   from-emerald-100 via-emerald-50 to-amber-50
                   px-8 py-10 shadow-xl shadow-emerald-900/5
                   transition-transform transition-shadow duration-300
                   hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-900/10
                   animate-[pulseOutline_10s_ease-in-out_infinite]"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 shadow-sm backdrop-blur-sm">
            <span className="text-3xl">🪷</span>
          </div>
          <span className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-emerald-800">
            Bookkeeping Status
          </span>
        </div>

        <div className="text-3xl md:text-4xl font-serif font-medium text-stone-900 mb-3 tracking-tight">
          Your books are clean.
        </div>
        <div className="text-lg text-stone-700 font-sans mb-6 leading-relaxed">
          All accounts reconciled. No missing data.
        </div>
        <div className="text-sm text-stone-500 font-sans border-t border-emerald-900/10 pt-4 mt-2 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          Updated automatically every month.
        </div>
      </div>
    </div>
  );
}
