'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Clock, Award } from 'lucide-react';
import { COMPANY } from '@/lib/constants';
import SectionLabel from '@/components/ui/SectionLabel';

const highlights = [
  { icon: ShieldCheck, title: 'Zertifiziert nach §34a GewO', desc: 'Jeder Mitarbeiter ist behördlich geprüft.' },
  { icon: Clock,       title: '24/7 Einsatzbereitschaft',   desc: 'Unsere Leitstelle ist niemals offline.' },
  { icon: Award,       title: 'Über 5.000 Einsätze',        desc: 'Bewährte Erfahrung in der Praxis.' },
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
              <p className="text-3xl font-black leading-none">{COMPANY.yearsExperience}</p>
              <p className="text-white/60 text-xs font-medium mt-0.5">Jahre Erfahrung</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }} className="order-1 lg:order-2">
            <SectionLabel text="Unser Versprechen" />
            <h2 id="about-heading" className="text-3xl md:text-4xl lg:text-5xl font-black text-navy-900 mt-4 mb-6 tracking-tight leading-tight">
              Über <span className="text-navy-700 italic">10 Jahre</span> operative Erfahrung – für Ihre Sicherheit.
            </h2>
            <p className="text-steel-500 text-base leading-relaxed mb-5">
              Seit {COMPANY.founded} sichern wir Objekte, Veranstaltungen und Baustellen in Koblenz und ganz Rheinland-Pfalz. Wir haben kein loses Angebot aufgebaut, sondern ein System, das im Alltag trägt.
            </p>
            <p className="text-steel-500 text-base leading-relaxed mb-8">
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
                <div key={title} className="rounded-2xl bg-steel-50 border border-steel-200/60 p-5 flex flex-col gap-2">
                  <div className="w-9 h-9 rounded-xl bg-navy-900 flex items-center justify-center">
                    <Icon size={16} className="text-white" />
                  </div>
                  <p className="text-navy-900 font-semibold text-sm leading-snug">{title}</p>
                  <p className="text-steel-500 text-xs">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
