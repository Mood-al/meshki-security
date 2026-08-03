'use client';
import { motion } from 'framer-motion';
import { Phone, Mail, ChevronRight, Star, ShieldCheck, Clock } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black" aria-label="Hero Bereich">
      <div className="absolute inset-0 bg-grid" aria-hidden="true" />
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(22,45,87,0.9) 0%, transparent 70%)' }} />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,80,160,0.2) 0%, transparent 70%)' }} />
      {[25, 55, 75].map((top) => (
        <div key={top} className="hero-line pointer-events-none" style={{ top: `${top}%` }} />
      ))}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
        <span className="text-[20vw] font-black tracking-tighter uppercase leading-none" style={{ color: 'rgba(255,255,255,0.02)' }}>SECURITY</span>
      </div>

      <div className="container-custom relative z-10 pt-28 pb-20">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-4xl mx-auto text-center">

          <motion.div variants={fadeUp} className="mb-6">
            <p className="text-sm md:text-base font-semibold tracking-[0.2em] text-steel-400 uppercase flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-steel-400/50"></span>
              Ihr Partner für Sicherheit
              <span className="w-8 h-px bg-steel-400/50"></span>
            </p>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6 italic">
            SICHERHEIT.<br/>VERTRAUEN.<br/>
            <span className="relative inline-block mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-steel-100 to-steel-400">SCHUTZ FÜR DAS,</span>
            </span><br/>
            <span className="text-white">WAS ZÄHLT.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-base sm:text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-2xl mx-auto">
            meshki Industries Security steht für verlässliche Abläufe, kompromisslosen Schutz und einen
            persönlichen Ansprechpartner – für Objekte, Events und Baustellen in Koblenz und ganz Rheinland-Pfalz.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${COMPANY.phone}`} id="hero-cta-primary"
              className="group inline-flex items-center gap-2.5 bg-white text-navy-900 hover:bg-steel-100 px-7 py-4 rounded-2xl font-bold text-base shadow-navy transition-all duration-200 hover:scale-[1.02]">
              <Phone size={18} strokeWidth={2.5} />
              Jetzt absichern
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#kontakt" id="hero-cta-secondary"
              className="inline-flex items-center gap-2.5 border border-white/25 text-white hover:bg-white/10 px-7 py-4 rounded-2xl font-semibold text-base transition-all duration-200 backdrop-blur-sm">
              <Mail size={18} strokeWidth={2} />
              Angebot anfordern
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-steel-400" />
              <span className="text-white/70 text-sm font-medium">Top Diskretion</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/20" />
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-steel-400" />
              <span className="text-white/70 text-sm font-medium">24/7 Bereitschaft</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/20" />
            <div className="flex items-center gap-2">
              <Star size={18} className="text-steel-400" />
              <span className="text-white/70 text-sm font-medium">Premium Qualität</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
          <span className="text-white/30 text-xs tracking-widest uppercase">Scrollen</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <motion.div animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
              className="w-1 h-2 rounded-full bg-white/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
