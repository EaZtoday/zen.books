import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-cream-300 bg-cream py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <span className="text-sm font-semibold text-warm-900">Zen Books</span>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="/#how-it-works" className="text-xs text-warm-400 hover:text-warm-600 transition-colors">How It Works</a>
              <Link to="/buy-and-hold" className="text-xs text-warm-400 hover:text-warm-600 transition-colors">Buy & Hold</Link>
              <Link to="/fix-and-flip" className="text-xs text-warm-400 hover:text-warm-600 transition-colors">Fix & Flip</Link>
              <Link to="/wholesale" className="text-xs text-warm-400 hover:text-warm-600 transition-colors">Wholesale</Link>
              <Link to="/blog" className="text-xs text-warm-400 hover:text-warm-600 transition-colors">Blog</Link>
              <Link to="/tools/rental-cash-flow-calculator" className="text-xs text-warm-400 hover:text-warm-600 transition-colors">Calculator</Link>
              <Link to="/about" className="text-xs text-warm-400 hover:text-warm-600 transition-colors">About</Link>
            </div>
          </div>
          <p className="text-xs text-warm-300">
            &copy; {new Date().getFullYear()} Zen Books &middot; Scranton, PA
          </p>
        </div>
        <div className="mt-6 pt-6 border-t border-cream-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xs text-warm-400 font-medium">Service Areas</span>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/scranton-bookkeeping" className="text-xs text-warm-400 hover:text-warm-600 transition-colors">Scranton</Link>
            <Link to="/wilkes-barre-nepa-bookkeeping" className="text-xs text-warm-400 hover:text-warm-600 transition-colors">Wilkes-Barre & NEPA</Link>
            <Link to="/poconos-bookkeeping" className="text-xs text-warm-400 hover:text-warm-600 transition-colors">Poconos</Link>
            <Link to="/lehigh-valley-bookkeeping" className="text-xs text-warm-400 hover:text-warm-600 transition-colors">Lehigh Valley</Link>
            <Link to="/reading-bookkeeping" className="text-xs text-warm-400 hover:text-warm-600 transition-colors">Reading</Link>
            <Link to="/harrisburg-bookkeeping" className="text-xs text-warm-400 hover:text-warm-600 transition-colors">Harrisburg</Link>
            <Link to="/philadelphia-suburbs-bookkeeping" className="text-xs text-warm-400 hover:text-warm-600 transition-colors">Philly Suburbs</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
