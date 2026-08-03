'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

export default function CtaBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <section className="section-padding bg-steel-50" ref={ref}>
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 30, scale: 0.98 }} animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl bg-navy-gradient overflow-hidden">
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(37,80,160,0.4) 0%, transparent 70%)' }} />
          <div className="relative z-10 px-8 md:px-14 py-14 md:py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-3 py-1 text-xs font-semibold text-white/70 tracking-wider uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Alles geregelt – mit einem System
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight mb-4">
                Damit Sicherheit und Ordnung{' '}
                <span className="text-white/60">kein Zufall sind.</span>
              </h2>
              <p className="text-white/60 text-base leading-relaxed">
                Ob Schutz, Objektpflege oder Veranstaltung – wir sorgen mit klaren Abläufen, festen Ansprechpartnern und zuverlässiger Umsetzung dafür, dass alles läuft.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0 w-full lg:w-auto">
              <a href={`tel:${COMPANY.phone}`} id="cta-banner-call-btn"
                className="group flex items-center justify-center gap-2.5 bg-white text-navy-900 px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-steel-100 transition-all hover:scale-[1.02] shadow-navy">
                <Phone size={16} strokeWidth={2.5} />Experten kontaktieren
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#kontakt" id="cta-banner-email-btn"
                className="flex items-center justify-center gap-2.5 border border-white/25 text-white px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/10 hover:border-white/40 transition-all">
                <Mail size={16} strokeWidth={2} />Angebot per Mail
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
