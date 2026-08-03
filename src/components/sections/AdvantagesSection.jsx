'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, BadgeCheck, Zap, SlidersHorizontal, MapPin, FileText } from 'lucide-react';
import { ADVANTAGES } from '@/lib/constants';
import SectionLabel from '@/components/ui/SectionLabel';

const iconMap = { Clock, BadgeCheck, Zap, SlidersHorizontal, MapPin, FileText };

export default function AdvantagesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <section id="vorteile" className="section-padding bg-steel-50" ref={ref}>
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-14">
          <SectionLabel text="Warum meshki" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy-900 mt-4 tracking-tight">
            Vorteile, die den <span className="text-navy-600">Unterschied machen.</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-steel-500 text-base leading-relaxed">
            Was uns von anderen Sicherheitsdiensten unterscheidet – nicht als Versprechen, sondern als gelebte Praxis.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVANTAGES.map((item, i) => {
            const Icon = iconMap[item.icon] || BadgeCheck;
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.09 }}
                className="group bg-white rounded-3xl border border-steel-200/60 p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-navy-900 flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
                  <Icon size={20} className="text-white" strokeWidth={1.8} />
                </div>
                <p className="text-[11px] font-black text-steel-300 tracking-[0.2em] uppercase mb-2">0{i + 1}</p>
                <h3 className="font-bold text-lg text-navy-900 mb-3 leading-snug">{item.title}</h3>
                <p className="text-sm text-steel-500 leading-relaxed">{item.description}</p>
                <div className="mt-6 h-0.5 bg-steel-100 rounded-full overflow-hidden">
                  <div className="h-full bg-navy-900 w-0 group-hover:w-full transition-all duration-500 ease-out" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
