'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AlertTriangle, MessageSquareOff, FileX } from 'lucide-react';
import { CHALLENGES } from '@/lib/constants';
import SectionLabel from '@/components/ui/SectionLabel';

const icons = [AlertTriangle, MessageSquareOff, FileX];

export default function ChallengesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <section id="herausforderungen" className="section-padding bg-steel-50" ref={ref}>
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-14">
          <SectionLabel text="Die Realität vieler Auftraggeber" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy-900 mt-4 tracking-tight">
            Herausforderungen,{' '}<br className="hidden sm:block" />die viele Auftraggeber kennen.
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CHALLENGES.map((item, i) => {
            const Icon = icons[i];
            const isFirst = i === 0;
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative rounded-3xl p-8 overflow-hidden hover:-translate-y-1 transition-all duration-300 ${isFirst ? 'bg-navy-900 text-white shadow-navy' : 'bg-white border border-steel-200/60 shadow-card hover:shadow-card-hover'}`}>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${isFirst ? 'bg-white/10' : 'bg-steel-100'}`}>
                  <Icon size={22} className={isFirst ? 'text-white' : 'text-navy-700'} strokeWidth={1.8} />
                </div>
                <h3 className={`font-bold text-lg mb-3 ${isFirst ? 'text-white' : 'text-navy-900'}`}>{item.title}</h3>
                <p className={`text-sm leading-relaxed ${isFirst ? 'text-white/70' : 'text-steel-500'}`}>{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
