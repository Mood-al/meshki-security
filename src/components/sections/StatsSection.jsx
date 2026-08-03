'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { STATS } from '@/lib/constants';

function StatCard({ value, label, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center text-center px-4 py-8 relative">
      {index > 0 && <div className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-px bg-steel-200 hidden md:block" />}
      <span className="text-4xl md:text-5xl font-black text-navy-900 tracking-tight mb-1">{value}</span>
      <span className="text-sm font-medium text-steel-500 tracking-wide">{label}</span>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-white border-b border-steel-100" aria-label="Kennzahlen">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((stat, i) => <StatCard key={stat.label} value={stat.value} label={stat.label} index={i} />)}
        </div>
      </div>
    </section>
  );
}
