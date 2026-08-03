'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, COMPANY } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const headerBg  = scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-steel-200/50' : 'bg-transparent';
  const linkColor = scrolled ? 'text-steel-700 hover:text-navy-900' : 'text-white/90 hover:text-white';
  const ctaBg     = scrolled ? 'bg-navy-900 text-white hover:bg-navy-800' : 'bg-white/10 text-white border border-white/30 hover:bg-white/20';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0 h-12 md:h-14 w-auto" aria-label="meshki Industries Security – Startseite">
              <img src="/logo-icon.png" alt="meshki Industries Security Logo" className="h-full w-auto object-contain" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${linkColor}`}>
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:block">
              <a href={`tel:${COMPANY.phone}`} id="header-cta-btn"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${ctaBg}`}>
                <Phone size={15} strokeWidth={2.5} />
                Jetzt absichern
              </a>
            </div>

            {/* Hamburger */}
            <button
              className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-navy-900 hover:bg-steel-100' : 'text-white hover:bg-white/10'}`}
              onClick={() => setMobileOpen(true)} aria-label="Menü öffnen">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div key="backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }} className="fixed inset-0 z-[60] bg-navy-950/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)} />
            <motion.div key="drawer" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-80 bg-white shadow-2xl flex flex-col">
              <div className="flex items-center justify-between px-6 py-5 border-b border-steel-100">
                <span className="font-black text-navy-900 text-sm tracking-wider uppercase">meshki Security</span>
                <button onClick={() => setMobileOpen(false)} className="p-2 rounded-lg text-steel-500 hover:bg-steel-100">
                  <X size={20} />
                </button>
              </div>
              <nav className="flex-1 px-4 py-6 space-y-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a key={link.href} href={link.href}
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center px-4 py-3 text-steel-700 hover:text-navy-900 hover:bg-steel-50 rounded-xl font-medium transition-all">
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <div className="px-6 py-6 border-t border-steel-100 space-y-3">
                <a href={`tel:${COMPANY.phone}`}
                  className="flex items-center justify-center gap-2 w-full bg-navy-900 text-white px-5 py-3.5 rounded-xl font-semibold hover:bg-navy-800 transition-colors">
                  <Phone size={16} />{COMPANY.phoneDisplay}
                </a>
                <a href="#kontakt" onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full border border-steel-200 text-steel-700 px-5 py-3 rounded-xl font-medium hover:border-navy-900 hover:text-navy-900 transition-colors">
                  Angebot anfordern
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
