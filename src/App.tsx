import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BuyAndHold from './pages/BuyAndHold';
import FixAndFlip from './pages/FixAndFlip';
import Wholesale from './pages/Wholesale';
import SmallBusinessBookkeeping from './pages/SmallBusinessBookkeeping';
import About from './pages/About';
import ScrantonBookkeeping from './pages/locations/ScrantonBookkeeping';
import WilkesBarreNEPA from './pages/locations/WilkesBarreNEPA';
import PoconosBookkeeping from './pages/locations/PoconosBookkeeping';
import LehighValleyBookkeeping from './pages/locations/LehighValleyBookkeeping';
import ReadingBookkeeping from './pages/locations/ReadingBookkeeping';
import HarrisburgBookkeeping from './pages/locations/HarrisburgBookkeeping';
import PhillySuburbsBookkeeping from './pages/locations/PhillySuburbsBookkeeping';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import CashFlowCalculator from './pages/tools/CashFlowCalculator';
import NotFound from './pages/NotFound';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-warm-900 font-sans">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy-and-hold" element={<BuyAndHold />} />
          <Route path="/fix-and-flip" element={<FixAndFlip />} />
          <Route path="/wholesale" element={<Wholesale />} />
          <Route path="/small-business-bookkeeping" element={<SmallBusinessBookkeeping />} />
          <Route path="/about" element={<About />} />
          <Route path="/scranton-bookkeeping" element={<ScrantonBookkeeping />} />
          <Route path="/wilkes-barre-nepa-bookkeeping" element={<WilkesBarreNEPA />} />
          <Route path="/poconos-bookkeeping" element={<PoconosBookkeeping />} />
          <Route path="/lehigh-valley-bookkeeping" element={<LehighValleyBookkeeping />} />
          <Route path="/reading-bookkeeping" element={<ReadingBookkeeping />} />
          <Route path="/harrisburg-bookkeeping" element={<HarrisburgBookkeeping />} />
          <Route path="/philadelphia-suburbs-bookkeeping" element={<PhillySuburbsBookkeeping />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/tools/rental-cash-flow-calculator" element={<CashFlowCalculator />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
