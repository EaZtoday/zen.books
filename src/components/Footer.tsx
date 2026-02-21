import React from 'react';
import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'About', href: '/about' },
  { label: 'Real Estate', href: '/real-estate-investors' },
  { label: 'Therapists', href: '/therapists-consultants' },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone-200/60 bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Brand */}
          <div>
            <span className="text-xl font-semibold tracking-tight text-emerald-900">
              Zen Books
            </span>
            <p className="text-sm text-stone-400 mt-1">
              Calm, judgment-free bookkeeping (done in QuickBooks Online).
            </p>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-stone-500 hover:text-stone-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-400">
            &copy; {new Date().getFullYear()} Zen Books. All rights reserved.
          </p>
          <p className="text-xs text-stone-400">
            Scranton, PA &middot; Serving clients remotely across the U.S.
          </p>
        </div>
      </div>
    </footer>
  );
}
