import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

const LinkedinIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
import { COMPANY, NAV_LINKS, SERVICES } from '@/lib/constants';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 text-white" role="contentinfo">
      <div className="h-1 bg-gradient-to-r from-navy-800 via-navy-700 to-navy-800" />
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand */}
          <div>
            <div className="mb-6 h-12 w-auto">
              <img src="/logo-icon.png" alt="meshki Industries Security Logo" className="h-full w-auto object-contain brightness-0 invert opacity-90" />
            </div>
            <p className="text-steel-400 text-sm leading-relaxed mb-6">
              Professioneller Sicherheitsdienst in Koblenz & Rheinland-Pfalz. Zertifiziert nach § 34a GewO. Rund um die Uhr für Sie da.
            </p>
            <div className="flex gap-3">
              {[{ href: COMPANY.socialLinks.linkedin, label: 'LinkedIn', Icon: LinkedinIcon },
                { href: COMPANY.socialLinks.instagram, label: 'Instagram', Icon: InstagramIcon }].map(({ href, label, Icon }) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/15 flex items-center justify-center text-white/50 hover:text-white transition-all">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Navigation</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}><a href={l.href} className="text-steel-400 hover:text-white text-sm transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Leistungen</h3>
            <ul className="space-y-3">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.id}><a href="#leistungen" className="text-steel-400 hover:text-white text-sm transition-colors">{s.title}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Kontakt</h3>
            <address className="not-italic space-y-4">
              <div className="flex gap-3">
                <MapPin size={16} className="text-steel-500 mt-0.5 flex-shrink-0" />
                <div className="text-steel-400 text-sm">
                  <p>{COMPANY.address}</p><p>{COMPANY.zip} {COMPANY.city}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-steel-500 flex-shrink-0" />
                <a href={`tel:${COMPANY.phone}`} className="text-steel-400 hover:text-white text-sm transition-colors">{COMPANY.phoneDisplay}</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-steel-500 flex-shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="text-steel-400 hover:text-white text-sm transition-colors break-all">{COMPANY.email}</a>
              </div>
            </address>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="container-custom py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-steel-500 text-xs">© {year} {COMPANY.name}. Alle Rechte vorbehalten.</p>
          <div className="flex gap-5">
            <Link href="/impressum"   className="text-steel-500 hover:text-white text-xs transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="text-steel-500 hover:text-white text-xs transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
