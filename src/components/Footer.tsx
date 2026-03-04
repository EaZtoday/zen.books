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
              <Link to="/about" className="text-xs text-warm-400 hover:text-warm-600 transition-colors">About</Link>
            </div>
          </div>
          <p className="text-xs text-warm-300">
            &copy; {new Date().getFullYear()} Zen Books &middot; Scranton, PA
          </p>
        </div>
      </div>
    </footer>
  );
}
