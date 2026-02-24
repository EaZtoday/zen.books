import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const industries = [
  { label: 'Real Estate Investors', href: '/real-estate-investors' },
  { label: 'Therapists & Consultants', href: '/therapists-consultants' },
  { label: 'Nonprofits', href: '/nonprofits' },
  { label: 'Restaurants & Construction', href: '/restaurants-construction' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <Link to="/" className="text-lg font-semibold tracking-tight text-stone-900">
            Zen Books
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="/#how-it-works" className="text-[13px] font-medium text-stone-500 hover:text-stone-900 transition-colors">
              How It Works
            </a>

            <div className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-[13px] font-medium text-stone-500 hover:text-stone-900 transition-colors">
                Industries
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <div className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 w-52 transition-all duration-200 ${dropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'}`}>
                <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-stone-200/50 overflow-hidden py-2">
                  {industries.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block px-4 py-2 text-[13px] text-stone-600 hover:bg-stone-50 hover:text-stone-900 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/about" className="text-[13px] font-medium text-stone-500 hover:text-stone-900 transition-colors">
              About
            </Link>

            <a
              href="#book"
              className="bg-stone-900 text-white px-5 py-2 rounded-full text-[13px] font-medium hover:bg-stone-800 transition-all"
            >
              Book a Call
            </a>
          </div>

          <button
            className="md:hidden p-2 text-stone-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-stone-100">
          <div className="px-6 py-6 space-y-1">
            <a href="/#how-it-works" onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm text-stone-600 hover:text-stone-900 transition-colors">
              How It Works
            </a>
            <div className="py-3">
              <p className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-3">Industries</p>
              {industries.map((item) => (
                <Link key={item.label} to={item.href} onClick={() => setMobileOpen(false)}
                  className="block py-2.5 text-sm text-stone-600 hover:text-stone-900 transition-colors pl-3">
                  {item.label}
                </Link>
              ))}
            </div>
            <Link to="/about" onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm text-stone-600 hover:text-stone-900 transition-colors">
              About
            </Link>
            <a href="#book" onClick={() => setMobileOpen(false)}
              className="block mt-4 text-center bg-stone-900 text-white px-5 py-3 rounded-full text-sm font-medium">
              Book a Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
