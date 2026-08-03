import { COMPANY } from '@/lib/constants';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: `${COMPANY.websiteUrl}/sitemap.xml`,
  };
}
