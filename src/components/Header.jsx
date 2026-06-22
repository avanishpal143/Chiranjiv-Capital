import React, { useState, useEffect, useCallback } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { Menu, X, ChevronDown } from './Icons';
import { COMPANY } from '../data/content';
import styles from './Header.module.css';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Leadership', to: '/leadership' },
  { label: 'Clientele', to: '/clientele' },
  { label: 'Contact', to: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isTransparent = isHomePage && !scrolled;

  return (
    <>
      <header
        className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${isTransparent ? styles.transparent : styles.solid}`}
      >
        <div className={styles.container}>
          {/* Logo */}
          <Link to="/" className={styles.logoLink} aria-label="Chiranjiv Capital Home">
            <Logo variant={isTransparent ? 'light' : 'dark'} size="md" />
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.nav} aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.navLinkActive : ''} ${isTransparent ? styles.navLinkLight : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <div className={styles.actions}>
            <Link
              to="/contact"
              className={`btn ${isTransparent ? 'btn-outline-white' : 'btn-primary'} ${styles.ctaBtn}`}
            >
              Book Consultation
            </Link>

            {/* Mobile toggle */}
            <button
              className={`${styles.mobileToggle} ${isTransparent ? styles.mobileToggleLight : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className={styles.mobileOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className={styles.mobileMenu}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            >
              <div className={styles.mobileMenuHeader}>
                <Logo variant="dark" size="sm" />
                <button
                  className={styles.mobileClose}
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              <nav className={styles.mobileNav}>
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) =>
                        `${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <div className={styles.mobileCta}>
                <Link to="/contact" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                  Book Consultation
                </Link>
                <div className={styles.mobileContact}>
                  <a href={`tel:${COMPANY.phone.replace(/[^0-9+]/g, '')}`}>{COMPANY.phone}</a>
                  <span>·</span>
                  <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
