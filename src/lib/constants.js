export const COMPANY = {
  name: 'meshki Industries Security',
  websiteUrl: 'https://meshki-security.com',
  shortName: 'meshki Security',
  tagline: 'Sicherheit, die funktioniert.',
  phone: '01630815787',
  phoneDisplay: '+49 163 0815787',
  email: 'meshki.security@icloud.com',
  address: 'An der Bleiche 7',
  zip: '56070',
  city: 'Koblenz',
  country: 'Deutschland',
  founder: 'Maxim Siskowski',
  founderTitle: 'Geschäftsführer & Gründer',
  founded: '2026',
  stat1: { value: '100%', label: 'Diskretion & Zuverlässigkeit' },
  stat2: { value: '24/7', label: 'Einsatzbereitschaft' },
  stat3: { value: 'Premium', label: 'Schutzkonzepte' },
  stat4: { value: 'Regional', label: 'Verwurzelt in Koblenz' },
  socialLinks: { linkedin: '#', instagram: '#', xing: '#' },
};

export const NAV_LINKS = [
  { label: 'Leistungen',  href: '#leistungen' },
  { label: 'Über uns',    href: '#ueber-uns' },
  { label: 'Vorteile',    href: '#vorteile' },
  { label: 'Karriere',    href: '#karriere' },
  { label: 'FAQ',         href: '#faq' },
  { label: 'Kontakt',     href: '#kontakt' },
];

export const SERVICES = [
  {
    id: 'objektschutz', icon: 'Shield',
    title: 'Objektschutz', subtitle: 'Rund um die Uhr gesichert',
    description: 'Wir schützen Ihre Immobilien, Gewerbe- und Industrieobjekte mit erfahrenem Sicherheitspersonal – präventiv, reaktionsschnell und rund um die Uhr.',
    bullets: ['Präventive Abschreckung durch sichtbare Präsenz','Schnelle Intervention bei Vorfällen & Notfällen','Lückenlose Zugangs- und Zugangskontrolle','Regelmäßige Kontrollgänge mit Dokumentation'],
    highlight: true,
  },
  {
    id: 'veranstaltungsschutz', icon: 'Users',
    title: 'Veranstaltungsschutz', subtitle: 'Sicherheit für Ihr Event',
    description: 'Von kleinen Firmenevents bis zu Großveranstaltungen – unser Team sorgt dafür, dass Ihre Gäste sicher und Ihr Event reibungslos abläuft.',
    bullets: ['Einlasskontrolle & Ticketing-Management','Ordnerdienst & Gästebetreuung','Notfallplanung & Evakuierungskonzepte','VIP-Schutz & Personenschutz auf Anfrage'],
    highlight: false,
  },
  {
    id: 'revierfahrten', icon: 'Car',
    title: 'Revierfahrten', subtitle: 'Mobile Sicherheit im Revier',
    description: 'Unsere mobilen Sicherheitskräfte fahren regelmäßige Kontrollrunden auf Ihrem Gelände – kosteneffizient und effektiv als Alternative zum stationären Dienst.',
    bullets: ['Flexible Tourenplanung nach Ihrem Bedarf','GPS-gestützte Dokumentation jeder Runde','Alarmverfolgung & Sofortreaktion','Abschreckungswirkung durch sichtbare Fahrzeuge'],
    highlight: false,
  },
  {
    id: 'empfangsdienst', icon: 'Building2',
    title: 'Empfangs- & Pfortendienst', subtitle: 'Professioneller erster Eindruck',
    description: 'Unser geschultes Personal repräsentiert Ihr Unternehmen am Empfang – freundlich, kompetent und sicherheitsbewusst für einen professionellen ersten Eindruck.',
    bullets: ['Besuchermanagement & Ausweiskontrolle','Paketannahme & Postverteilung','Telefon- & Kommunikationsservice','Zutrittskontrollsysteme & Schlüsselverwaltung'],
    highlight: false,
  },
  {
    id: 'baustellenbewachung', icon: 'HardHat',
    title: 'Baustellenbewachung', subtitle: 'Schutz für Ihr Bauprojekt',
    description: 'Baustellen sind ein beliebtes Ziel für Diebstahl und Vandalismus. Wir schützen Ihre Maschinen, Materialien und Mitarbeiter – Tag und Nacht.',
    bullets: ['Schutz vor Diebstahl von Maschinen & Material','Überwachung des Baustellengeländes','Kontrolle von Zulieferern & Fremdfirmen','Sicherstellung des Arbeitsschutzes'],
    highlight: false,
  },
  {
    id: 'brandschutzwache', icon: 'Flame',
    title: 'Brandschutz & Sicherheitswache', subtitle: 'Prävention & schnelle Reaktion',
    description: 'Ausgebildete Brandschutzwächter überwachen sicherheitskritische Bereiche, führen Begehungen durch und reagieren sofort im Ernstfall.',
    bullets: ['Ausgebildetes Brandschutzpersonal','Regelmäßige Begehungen & Protokollierung','Koordination mit Feuerwehr & Rettungsdiensten','Betrieblicher Brandschutzbeauftragter auf Anfrage'],
    highlight: false,
  },
];

export const ADVANTAGES = [
  { icon: 'Clock',             title: 'Zuverlässigkeit 24/7',       description: 'Wir sind immer da – an 365 Tagen im Jahr, rund um die Uhr. Unsere Einsatzzentrale ist ständig besetzt und reagiert innerhalb von Minuten.' },
  { icon: 'BadgeCheck',        title: 'Qualifiziertes Personal',    description: 'Alle unsere Mitarbeiter sind bestens geschult und tragen einheitliche, erkennbare Uniform & Ausrüstung.' },
  { icon: 'Zap',               title: 'Schnelle Reaktionszeit',     description: 'Bei Alarm oder Notfall sind unsere Kräfte schnellstmöglich vor Ort. Klare Einsatzprotokolle und effiziente Kommunikation sichern Ihre Reaktionsfähigkeit.' },
  { icon: 'SlidersHorizontal', title: 'Individuelle Lösungen',      description: 'Kein Kunde ist wie der andere. Wir entwickeln maßgeschneiderte Sicherheitskonzepte, die exakt auf Ihre Anforderungen, Ihr Objekt und Ihr Budget passen.' },
  { icon: 'MapPin',            title: 'Regional verwurzelt',        description: 'Als Koblenzer Unternehmen kennen wir die Region genau. Kurze Wege, lokale Vernetzung und persönliche Ansprechpartner – das ist unser Heimvorteil.' },
  { icon: 'FileText',          title: 'Transparente Dokumentation', description: 'Jeder Einsatz wird lückenlos dokumentiert. Sie erhalten regelmäßige Berichte und haben jederzeit Überblick über alle Sicherheitsaktivitäten.' },
];

export const STATS = [
  { value: '2026',   label: 'Firmengründung' },
  { value: '1.000+', label: 'Erfolgreiche Einsätze' },
  { value: '100%',   label: 'Kundenzufriedenheit' },
  { value: '20+',    label: 'Qualifizierte Mitarbeiter' },
];

export const CHALLENGES = [
  { title: 'Sicherheitsfirmen ohne echtes Personal',        description: 'Auf dem Papier ist alles besetzt. In der Realität fehlt genau dann jemand, wenn es darauf ankommt. Wir garantieren Ihnen besetzte Posten – oder wir rufen Sie an.' },
  { title: 'Fehlende Kommunikation im Ernstfall',           description: 'Viele Dienstleister reagieren zu langsam. Unsere Einsatzleitung ist 24/7 erreichbar und hält Sie in Echtzeit über alle Vorfälle informiert.' },
  { title: 'Unzuverlässige Abrechnungen & kein Überblick',  description: 'Überraschende Rechnungen ohne Transparenz. Wir liefern klare Verträge, nachvollziehbare Abrechnungen und vollständige Einsatzberichte.' },
];

export const FAQS = [
  { question: 'In welchen Regionen sind Sie tätig?',                       answer: 'Unser Hauptstandort ist Koblenz (56070). Wir sind in ganz Rheinland-Pfalz und angrenzenden Bundesländern aktiv – darunter Koblenz, Bonn, Mainz, Trier, Kaiserslautern und Umgebung.' },
  { question: 'Wie schnell können Sie einen Sicherheitsdienst bereitstellen?', answer: 'In vielen Fällen können wir innerhalb von 24–48 Stunden Personal bereitstellen. Für kurzfristige Einsätze haben wir einen Bereitschaftspool qualifizierter Mitarbeiter.' },
  { question: 'Sind Ihre Mitarbeiter speziell geschult?',            answer: 'Ja, absolut. Alle unsere Sicherheitsmitarbeiter absolvieren regelmäßige interne Schulungen zu Erster Hilfe, Deeskalation und rechtlichen Grundlagen, um in jeder Situation professionell reagieren zu können.' },
  { question: 'Bieten Sie auch Kurzzeiteinsätze für einzelne Events an?',  answer: 'Ja. Wir übernehmen sowohl langfristige Objektschutz-Aufträge als auch Einzelveranstaltungen jeder Größe – von kleinen Firmenevents bis zu Großveranstaltungen mit mehreren hundert Personen.' },
  { question: 'Wie erhalte ich ein Angebot?',                              answer: 'Füllen Sie einfach unser Kontaktformular aus oder rufen Sie uns direkt an. Wir melden uns innerhalb von 24 Stunden mit einem unverbindlichen, kostenlosen Angebot.' },
  { question: 'Können Sie auch nachts und an Wochenenden tätig sein?',     answer: 'Ja. Sicherheit kennt keine Öffnungszeiten. Wir arbeiten 365 Tage im Jahr, 24 Stunden am Tag – inklusive Nachtschichten, Wochenenden und Feiertagen.' },
  { question: 'Wie unterscheiden Sie sich von anderen Sicherheitsdiensten?', answer: 'Wir sind ein regional verwurzeltes Unternehmen mit flachen Hierarchien, direkten Ansprechpartnern und echtem Verantwortungsbewusstsein. Unsere Kunden wissen, wen sie anrufen müssen – und bekommen eine ehrliche Antwort.' },
];

export const CAREER_BENEFITS = [
  { icon: 'Euro',          text: 'Überdurchschnittliche Vergütung' },
  { icon: 'GraduationCap', text: 'Bezahlte Aus- & Weiterbildung' },
  { icon: 'CalendarCheck', text: 'Zuverlässige Dienstplanung' },
  { icon: 'Users',         text: 'Starkes Teamgefühl & Zusammenhalt' },
  { icon: 'TrendingUp',    text: 'Aufstiegsmöglichkeiten' },
  { icon: 'Shirt',         text: 'Komplette Ausrüstung & Uniformstellung' },
];
