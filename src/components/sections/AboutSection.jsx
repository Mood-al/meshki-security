'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Clock, Award } from 'lucide-react';
import { COMPANY } from '@/lib/constants';
import SectionLabel from '@/components/ui/SectionLabel';

const highlights = [
  { icon: ShieldCheck, title: 'Modernste Sicherheitskonzepte', desc: 'Individuell auf Ihre Bedürfnisse abgestimmt.' },
  { icon: Clock,       title: '24/7 Einsatzbereitschaft',   desc: 'Unsere Leitstelle ist niemals offline.' },
  { icon: Award,       title: 'Regionale Expertise',        desc: 'Verwurzelt in Koblenz und Umgebung.' },
];
const checkPoints = [
  'Eigene, festangestellte Mitarbeiter – kein Leihpersonal',
  'Direkte Erreichbarkeit rund um die Uhr',
  'Individuelle Sicherheitskonzepte für jedes Objekt',
  'Lückenlose digitale Dokumentation aller Einsätze',
  'Regionale Verantwortung – wir kennen Koblenz und Umgebung',
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <section id="ueber-uns" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Visual */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }} className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden bg-navy-gradient aspect-[4/5] shadow-navy">
              <div className="absolute inset-0">
                <img src="/founder.jpg" alt={`Portrait von ${COMPANY.founder}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5">
                  <p className="text-white/50 text-xs font-semibold tracking-wider uppercase mb-1">Gründer</p>
                  <p className="text-white font-black text-lg">{COMPANY.founder}</p>
                  <p className="text-white/60 text-sm">{COMPANY.founderTitle}</p>
                </div>
              </div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -top-5 -right-5 bg-navy-900 rounded-2xl px-5 py-4 shadow-navy text-white">
              <p className="text-3xl font-black leading-none text-transparent bg-clip-text bg-gradient-to-r from-white to-steel-400">100%</p>
              <p className="text-white/60 text-xs font-medium mt-0.5 tracking-wide">Diskretion</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }} className="order-1 lg:order-2">
            <div className="flex flex-col gap-6">
              <SectionLabel text="Unser Versprechen" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 leading-[1.1] tracking-tight">
                Verlässlicher Schutz –<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-800 to-steel-500">
                  für Ihre Sicherheit.
                </span>
              </h2>
              <p className="text-lg text-steel-600 leading-relaxed font-medium">
                Seit {COMPANY.founded} sichern wir Objekte, Veranstaltungen und Baustellen in {COMPANY.city}
                und ganz Rheinland-Pfalz. Wir bieten kein loses Angebot,
                sondern ein System, das im Alltag trägt.
              </p>
            </div>
            <p className="text-steel-500 text-base leading-relaxed mb-8 mt-6">
              Klare Strukturen, feste Ansprechpartner und verlässliche Abläufe sorgen für Planbarkeit, Entlastung und das sichere Gefühl, dass alles läuft.
            </p>
            <ul className="space-y-3 mb-10">
              {checkPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-steel-600">
                  <CheckCircle2 size={17} className="text-success mt-0.5 flex-shrink-0" />{p}
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-navy-900 text-white rounded-2xl p-4 shadow-xl border border-white/10 flex items-center gap-3 backdrop-blur-sm relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:animate-shimmer" />
                  <div className="flex flex-col">
                    <span className="font-black text-2xl md:text-3xl tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-white to-steel-300">
                      Top
                    </span>
                    <span className="text-xs md:text-sm font-semibold text-steel-400">Qualität</span>
                  </div>
                </div>))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
