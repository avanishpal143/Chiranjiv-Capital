import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import DisclaimerPopup from './components/DisclaimerPopup';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Leadership from './pages/Leadership';
import Clientele from './pages/Clientele';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.25 } },
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} variants={pageVariants} initial="initial" animate="animate" exit="exit">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/clientele" element={<Clientele />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function NotFound() {
  return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      paddingTop: 'var(--header-height)', textAlign: 'center', gap: '1.5rem',
      background: 'var(--bg-off-white)'
    }}>
      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '6rem', fontWeight: 800, color: 'var(--border-medium)', lineHeight: 1 }}>
        404
      </div>
      <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-dark)' }}>Page Not Found</h1>
      <p style={{ color: 'var(--text-muted)', maxWidth: '400px' }}>
        The page you're looking for doesn't exist. Let's get you back on track.
      </p>
      <a href="/" className="btn btn-primary">Return Home</a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <DisclaimerPopup />
      <ScrollToTop />
      <Header />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  );
}
