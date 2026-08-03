import './globals.css';
import { Outfit } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/ui/CookieBanner';
import { COMPANY } from '@/lib/constants';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
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
    'meshki Industries Security bietet professionellen Objektschutz, Veranstaltungsschutz, Revierfahrten und Baustellenbewachung in Koblenz & Rheinland-Pfalz. Jetzt kostenloses Angebot anfordern!',
  keywords: [
    'Sicherheitsdienst Koblenz', 'Security Koblenz', 'Objektschutz Koblenz',
    'Sicherheitsunternehmen Rheinland-Pfalz', 'Veranstaltungsschutz Koblenz',
    'Baustellenbewachung', 'Wachdienst Koblenz', 'Revierfahrten',
    'Empfangsdienst', 'Brandschutzwache', 'Security Firma Koblenz',
    'Wach und Schließgesellschaft', 'meshki Security', 'Pfortendienst Koblenz',
    'Bewachungsunternehmen', 'Sicherheitspersonal mieten',
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
      'Professioneller Sicherheitsdienst in Koblenz & Rheinland-Pfalz. Objektschutz, Veranstaltungsschutz & Baustellenbewachung. Zuverlässig & rund um die Uhr.',
    images: [{ url: '/logo-icon.png' }],
  },
  alternates: { canonical: COMPANY.websiteUrl },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={outfit.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SecurityService',
              name: COMPANY.name,
              description: 'Professioneller Sicherheitsdienst und Wachdienst in Koblenz und ganz Rheinland-Pfalz.',
              url: COMPANY.websiteUrl,
              telephone: COMPANY.phoneDisplay,
              email: COMPANY.email,
              image: `${COMPANY.websiteUrl}/logo-icon.png`,
              priceRange: '€€',
              address: {
                '@type': 'PostalAddress',
                streetAddress: COMPANY.address,
                postalCode: COMPANY.zip,
                addressLocality: COMPANY.city,
                addressCountry: 'DE',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '50.3600',
                longitude: '7.5850'
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
      <body className="font-sans antialiased bg-white">
        <div className="relative overflow-hidden flex flex-col min-h-screen max-w-[100vw]">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <CookieBanner />
        </div>
      </body>
    </html>
  );
}
