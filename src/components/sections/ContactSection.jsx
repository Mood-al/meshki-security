'use client';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { COMPANY } from '@/lib/constants';
import SectionLabel from '@/components/ui/SectionLabel';

const contactDetails = [
  { icon: Phone, label: 'Telefon',       value: COMPANY.phoneDisplay, href: `tel:${COMPANY.phone}`,       sublabel: 'Rund um die Uhr erreichbar' },
  { icon: Mail,  label: 'E-Mail',        value: COMPANY.email,        href: `mailto:${COMPANY.email}`,    sublabel: 'Antwort innerhalb von 24h' },
  { icon: MapPin, label: 'Anschrift',    value: `${COMPANY.address}, ${COMPANY.zip} ${COMPANY.city}`, href: `https://maps.google.com/?q=${encodeURIComponent(COMPANY.address + ', ' + COMPANY.zip + ' ' + COMPANY.city)}`, sublabel: 'Koblenz, Rheinland-Pfalz' },
  { icon: Clock, label: 'Erreichbarkeit', value: 'Mo–So · 24 Stunden', href: null, sublabel: '365 Tage im Jahr' },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="kontakt" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-14">
          <SectionLabel text="Kontakt" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy-900 mt-4 tracking-tight">Lassen Sie uns sprechen.</h2>
          <p className="mt-4 max-w-xl mx-auto text-steel-500 text-base leading-relaxed">Schildern Sie uns Ihr Anliegen – wir melden uns innerhalb von 24 Stunden mit einem kostenlosen Angebot.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Contact details */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className="lg:col-span-2">
            <div className="space-y-4 mb-8">
              {contactDetails.map(({ icon: Icon, label, value, href, sublabel }) => (
                <div key={label} className="flex gap-4 p-5 bg-steel-50 border border-steel-200/60 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-navy-900 flex items-center justify-center flex-shrink-0">
                    <Icon size={17} className="text-white" />
                  </div>
                  <div>
                    <p className="text-steel-400 text-xs font-semibold uppercase tracking-wider mb-0.5">{label}</p>
                    {href ? <a href={href} className="text-navy-900 font-semibold text-sm hover:text-navy-700 block">{value}</a> : <p className="text-navy-900 font-semibold text-sm">{value}</p>}
                    <p className="text-steel-400 text-xs mt-0.5">{sublabel}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video relative shadow-card border border-steel-200/60 bg-steel-100">
              <iframe 
                src="https://www.google.com/maps?q=An+der+Bleiche+7,+56070+Koblenz&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Standort"
                className="absolute inset-0 grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
          </motion.div>

          {/* Visuals (Replaced Form) */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className="lg:col-span-3 flex flex-col gap-6">
            
            <div className="bg-white border border-steel-200/60 rounded-3xl p-8 shadow-card flex items-center justify-center">
              <img src="/logo-icon.png" alt={`${COMPANY.name} Logo`} className="max-h-32 w-auto object-contain" />
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-card border border-steel-200/60 bg-steel-100 flex-1 min-h-[400px]">
              <img src="/founder.jpg" alt={COMPANY.founder} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white/70 text-xs font-semibold tracking-wider uppercase mb-1">Geschäftsführung</p>
                <p className="text-white font-black text-2xl">{COMPANY.founder}</p>
                <p className="text-white/80 text-sm leading-relaxed mt-2 max-w-sm">
                  "Wir stehen mit unserem Namen für die Sicherheit Ihres Unternehmens."
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
