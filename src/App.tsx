import React, { Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Code-split all page-level components
const Home = React.lazy(() => import('./pages/Home'));
const BuyAndHold = React.lazy(() => import('./pages/BuyAndHold'));
const FixAndFlip = React.lazy(() => import('./pages/FixAndFlip'));
const Wholesale = React.lazy(() => import('./pages/Wholesale'));
const SmallBusinessBookkeeping = React.lazy(() => import('./pages/SmallBusinessBookkeeping'));
const About = React.lazy(() => import('./pages/About'));
const ScrantonBookkeeping = React.lazy(() => import('./pages/locations/ScrantonBookkeeping'));
const WilkesBarreNEPA = React.lazy(() => import('./pages/locations/WilkesBarreNEPA'));
const PoconosBookkeeping = React.lazy(() => import('./pages/locations/PoconosBookkeeping'));
const LehighValleyBookkeeping = React.lazy(() => import('./pages/locations/LehighValleyBookkeeping'));
const ReadingBookkeeping = React.lazy(() => import('./pages/locations/ReadingBookkeeping'));
const HarrisburgBookkeeping = React.lazy(() => import('./pages/locations/HarrisburgBookkeeping'));
const PhillySuburbsBookkeeping = React.lazy(() => import('./pages/locations/PhillySuburbsBookkeeping'));
const ArchbaldBookkeeping = React.lazy(() => import('./pages/locations/ArchbaldBookkeeping'));
const CarbondaleBookkeeping = React.lazy(() => import('./pages/locations/CarbondaleBookkeeping'));
const PittstonBookkeeping = React.lazy(() => import('./pages/locations/PittstonBookkeeping'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-warm-400 text-sm">Loading…</div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-warm-900 font-sans">
      <ScrollToTop />
      <Navbar />
      <main>
        <Suspense fallback={<PageLoader />}>
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
            <Route path="/archbald-bookkeeping" element={<ArchbaldBookkeeping />} />
            <Route path="/carbondale-bookkeeping" element={<CarbondaleBookkeeping />} />
            <Route path="/pittston-bookkeeping" element={<PittstonBookkeeping />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
