'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Euro, GraduationCap, CalendarCheck, Users, TrendingUp, Shirt, ArrowRight } from 'lucide-react';
import { CAREER_BENEFITS, COMPANY } from '@/lib/constants';
import SectionLabel from '@/components/ui/SectionLabel';

const iconMap = { Euro, GraduationCap, CalendarCheck, Users, TrendingUp, Shirt };

export default function CareerSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <section id="karriere" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.65 }}>
            <SectionLabel text="Karriere" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy-900 mt-4 mb-5 tracking-tight leading-tight">
              Werden Sie Teil <span className="text-navy-600">unseres Teams.</span>
            </h2>
            <p className="text-steel-500 text-base leading-relaxed mb-5">
              Wir suchen zuverlässige Sicherheitskräfte, die mit Verantwortung und Professionalität arbeiten. Ob Quereinsteiger mit §34a-Schein oder erfahrene Fachkraft – bei meshki Security sind Sie mehr als eine Nummer.
            </p>
            <p className="text-steel-500 text-base leading-relaxed mb-10">
              Flache Hierarchien, ein familiäres Team und faire Bedingungen – das ist unser Versprechen an Sie.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {CAREER_BENEFITS.map((b) => {
                const Icon = iconMap[b.icon] || Users;
                return (
                  <li key={b.text} className="flex items-center gap-3 bg-steel-50 border border-steel-200/60 rounded-2xl px-4 py-3.5 text-sm font-medium text-navy-900">
                    <div className="w-8 h-8 rounded-xl bg-navy-900 flex items-center justify-center flex-shrink-0"><Icon size={15} className="text-white" /></div>
                    {b.text}
                  </li>
                );
              })}
            </ul>
            <a href={`mailto:${COMPANY.email}?subject=Bewerbung bei meshki Industries Security`} id="career-apply-btn"
              className="group inline-flex items-center gap-2.5 bg-navy-900 text-white px-8 py-4 rounded-2xl font-bold text-base hover:bg-navy-800 transition-all hover:scale-[1.02] shadow-navy">
              Jetzt bewerben
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.65 }}
            className="relative hidden lg:block">
            <div className="absolute inset-0 rounded-3xl bg-steel-100 border border-steel-200/60 translate-x-4 translate-y-4" />
            <div className="relative rounded-3xl bg-navy-gradient overflow-hidden p-10 shadow-navy">
              <div className="absolute inset-0 bg-grid" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mb-8">
                  <Users size={26} className="text-white" />
                </div>
                <p className="text-white/50 text-xs font-semibold tracking-widest uppercase mb-2">Offene Stellen</p>
                <h3 className="text-white font-black text-2xl mb-4">Sicherheitsmitarbeiter (m/w/d)</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-8">
                  Vollzeit & Teilzeit · Koblenz & Rheinland-Pfalz · § 34a GewO erforderlich
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[{ label: 'Standort', value: 'Koblenz, DE' },{ label: 'Art', value: 'Vollzeit / Teilzeit' },{ label: 'Schichten', value: 'Flexibel 24/7' },{ label: 'Start', value: 'Ab sofort' }].map((item) => (
                    <div key={item.label} className="bg-white/8 border border-white/10 rounded-xl px-4 py-3">
                      <p className="text-white/40 text-[10px] uppercase tracking-wider mb-0.5">{item.label}</p>
                      <p className="text-white font-semibold text-sm">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
