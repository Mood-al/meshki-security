import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/ui/CookieBanner';
import { COMPANY } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  metadataBase: new URL(COMPANY.websiteUrl),
  title: {
    default: 'meshki Industries Security | Sicherheitsdienst Koblenz',
    template: '%s | meshki Industries Security',
  },
  description:
    'meshki Industries Security bietet professionellen Objektschutz, Veranstaltungsschutz, Revierfahrten und Baustellenbewachung in Koblenz & Rheinland-Pfalz. Zertifiziert nach § 34a GewO. Jetzt kostenloses Angebot anfordern!',
  keywords: [
    'Sicherheitsdienst Koblenz', 'Objektschutz Koblenz',
    'Sicherheitsunternehmen Rheinland-Pfalz', 'Veranstaltungsschutz Koblenz',
    'Baustellenbewachung', 'Wachdienst Koblenz', 'Revierfahrten',
    'Empfangsdienst', 'Brandschutzwache', 'Security Firma Koblenz',
    '34a Gewerbeordnung', 'meshki Security', 'Pfortendienst Koblenz',
    'Bewachungsunternehmen',
  ],
  authors: [{ name: COMPANY.founder }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: COMPANY.name,
    title: 'meshki Industries Security | Sicherheitsdienst Koblenz',
    description:
      'Professioneller Sicherheitsdienst in Koblenz & Rheinland-Pfalz. Objektschutz, Veranstaltungsschutz & mehr – zertifiziert, zuverlässig, rund um die Uhr.',
  },
  alternates: { canonical: COMPANY.websiteUrl },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: COMPANY.name,
              description: 'Professioneller Sicherheitsdienst in Koblenz & Rheinland-Pfalz.',
              url: 'https://meshki-security.vercel.app',
              telephone: COMPANY.phone,
              email: COMPANY.email,
              address: {
                '@type': 'PostalAddress',
                streetAddress: COMPANY.address,
                postalCode: COMPANY.zip,
                addressLocality: COMPANY.city,
                addressCountry: 'DE',
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
                opens: '00:00',
                closes: '23:59',
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main className="flex-grow pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
