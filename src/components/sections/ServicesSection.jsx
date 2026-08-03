'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Users, Car, Building2, HardHat, Flame, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import SectionLabel from '@/components/ui/SectionLabel';

const iconMap = { Shield, Users, Car, Building2, HardHat, Flame };

function ServiceCard({ service, index }) {
  const Icon = iconMap[service.icon] || Shield;
  const hl = service.highlight;
  return (
    <motion.article initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className={`relative flex flex-col rounded-3xl overflow-hidden hover:-translate-y-1.5 transition-all duration-300 ${hl ? 'bg-navy-900 shadow-navy' : 'bg-white border border-steel-200/60 shadow-card hover:shadow-card-hover'}`}>
      <div className={`h-1 ${hl ? 'bg-white/20' : 'bg-gradient-to-r from-navy-800 to-navy-700'}`} />
      <div className="p-8 flex-1 flex flex-col">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0 transition-transform group-hover:scale-110 ${hl ? 'bg-white/10' : 'bg-navy-900'}`}>
          <Icon size={24} className="text-white" strokeWidth={1.8} />
        </div>
        <p className={`text-xs font-semibold tracking-widest uppercase mb-2 ${hl ? 'text-white/50' : 'text-steel-400'}`}>{service.subtitle}</p>
        <h3 className={`text-xl font-black mb-3 tracking-tight ${hl ? 'text-white' : 'text-navy-900'}`}>{service.title}</h3>
        <p className={`text-sm leading-relaxed mb-6 flex-1 ${hl ? 'text-white/70' : 'text-steel-500'}`}>{service.description}</p>
        <div className={`h-px mb-6 ${hl ? 'bg-white/10' : 'bg-steel-100'}`} />
        <ul className="space-y-2.5">
          {service.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm">
              <CheckCircle2 size={15} className={`mt-0.5 flex-shrink-0 ${hl ? 'text-green-400' : 'text-success'}`} />
              <span className={hl ? 'text-white/80' : 'text-steel-600'}>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <section id="leistungen" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-14">
          <SectionLabel text="Unsere Leistungen" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy-900 mt-4 tracking-tight">
            Ein System. <span className="text-navy-600">Sechs starke Leistungen.</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-steel-500 text-base md:text-lg leading-relaxed">
            Von der stationären Bewachung bis zur mobilen Kontrolle – wir decken alle Bereiche der professionellen Sicherheit ab.
          </p>
        </motion.div>
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }} className="mt-12 text-center">
          <a href="#kontakt" className="inline-flex items-center gap-2 text-navy-700 font-semibold text-sm hover:text-navy-900 transition-colors border-b border-navy-700/30 hover:border-navy-900 pb-0.5">
            Alle Leistungen anfragen →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
