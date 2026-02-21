import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'About', href: '/about' },
];

const industries = [
  { label: 'Real Estate Investors', href: '/real-estate-investors' },
  { label: 'Therapists & Consultants', href: '/therapists-consultants' },
  { label: 'Nonprofits', href: '/#personas' },
  { label: 'Restaurants & Construction', href: '/#personas' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-semibold tracking-tight text-emerald-900 flex items-center gap-2">
            {/* Lotus Icon Placeholder */}
            <span className="text-2xl">🪷</span> 
            Zen Books
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/#how-it-works" className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors">
              How It Works
            </a>
            
            {/* Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center gap-1 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors focus:outline-none"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                Who We Work With
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <div 
                className={`absolute left-0 top-full pt-2 w-56 transition-all duration-200 ${dropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <div className="bg-white rounded-xl shadow-lg border border-stone-100 overflow-hidden py-1">
                  {industries.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block px-4 py-2.5 text-sm text-stone-600 hover:bg-emerald-50 hover:text-emerald-900 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/about" className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors">
              About
            </Link>

            <a
              href="#book"
              className="inline-flex items-center bg-emerald-700 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-emerald-800 transition-all shadow-sm hover:shadow-md hover:-translate-y-px"
            >
              Book a Clarity Call
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-stone-600 hover:text-stone-900"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-stone-100 bg-white">
          <div className="px-4 py-4 space-y-1">
            <a
              href="/#how-it-works"
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 text-sm font-medium text-stone-600 hover:text-emerald-700 transition-colors"
            >
              How It Works
            </a>
            
            <div className="py-2">
              <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">Who We Work With</p>
              {industries.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-sm font-medium text-stone-600 hover:text-emerald-700 transition-colors pl-2 border-l-2 border-transparent hover:border-emerald-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link
              to="/about"
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 text-sm font-medium text-stone-600 hover:text-emerald-700 transition-colors"
            >
              About
            </Link>
            
            <a
              href="#book"
              onClick={() => setMobileOpen(false)}
              className="block mt-3 text-center bg-emerald-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-emerald-800 transition-colors"
            >
              Book a Clarity Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
