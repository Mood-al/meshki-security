'use client';
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '@/lib/constants';
import SectionLabel from '@/components/ui/SectionLabel';

function FaqItem({ faq, index, isOpen, onToggle }) {
  return (
    <div className={`border rounded-2xl overflow-hidden transition-colors duration-200 ${isOpen ? 'border-navy-900/20 bg-white shadow-card' : 'border-steel-200/60 bg-white hover:border-navy-900/20'}`}>
      <button onClick={() => onToggle(index)}
        className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left"
        aria-expanded={isOpen} aria-controls={`faq-answer-${index}`} id={`faq-q-${index}`}>
        <span className={`font-semibold text-base leading-snug transition-colors ${isOpen ? 'text-navy-900' : 'text-steel-700'}`}>{faq.question}</span>
        <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${isOpen ? 'bg-navy-900 text-white' : 'bg-steel-100 text-steel-500'}`}>
          {isOpen ? <Minus size={14} strokeWidth={2.5} /> : <Plus size={14} strokeWidth={2.5} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div key="answer" id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-q-${index}`}
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
            <div className="px-7 pb-6">
              <div className="h-px bg-steel-100 mb-5" />
              <p className="text-steel-500 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <section id="faq" className="section-padding bg-steel-50" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
            className="lg:col-span-2 lg:sticky lg:top-28 lg:self-start">
            <SectionLabel text="Häufige Fragen" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy-900 mt-4 mb-5 tracking-tight leading-tight">
              Ihre Fragen – <span className="text-navy-600">unsere Antworten.</span>
            </h2>
            <p className="text-steel-500 text-base leading-relaxed mb-8">Hier finden Sie Antworten auf die häufigsten Fragen rund um unsere Leistungen.</p>
            <a href="#kontakt" className="inline-flex items-center gap-2 text-navy-700 font-semibold text-sm border-b border-navy-700/30 hover:border-navy-900 hover:text-navy-900 pb-0.5 transition-colors">
              Weitere Fragen? Kontakt aufnehmen →
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3 space-y-3">
            {FAQS.map((faq, i) => (
              <FaqItem key={faq.question} faq={faq} index={i} isOpen={openIndex === i} onToggle={(i) => setOpenIndex(openIndex === i ? null : i)} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
