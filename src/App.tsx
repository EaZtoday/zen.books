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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
