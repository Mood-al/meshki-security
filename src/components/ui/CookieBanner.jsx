'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", bounce: 0, duration: 0.6 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 pointer-events-none"
        >
          <div className="max-w-4xl mx-auto bg-navy-950/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 pointer-events-auto flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-white font-bold text-lg mb-2">Wir verwenden Cookies</h3>
              <p className="text-steel-400 text-sm leading-relaxed">
                Um unsere Webseite für Sie optimal zu gestalten und die Nutzung von externen Diensten (wie Google Maps) zu ermöglichen, verwenden wir Cookies. Weitere Informationen finden Sie in unserer <Link href="/datenschutz" className="text-white underline underline-offset-2 hover:text-steel-200">Datenschutzerklärung</Link>.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <button onClick={decline} className="px-6 py-3 rounded-xl border border-white/10 text-white text-sm font-semibold hover:bg-white/5 transition-colors w-full sm:w-auto">
                Ablehnen
              </button>
              <button onClick={accept} className="px-6 py-3 rounded-xl bg-white text-navy-900 text-sm font-bold hover:bg-steel-100 transition-colors w-full sm:w-auto shadow-lg shadow-white/10">
                Akzeptieren
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
