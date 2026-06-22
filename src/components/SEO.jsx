import React from 'react';
import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://www.chiranjivcapital.com';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;

export default function SEO({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  noIndex = false,
  schema,
}) {
  const fullTitle = title
    ? `${title} | Chiranjiv Capital Services Limited`
    : 'Chiranjiv Capital Services Limited | Eternal Wealth – Merchant Banker';

  const fullCanonical = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={fullCanonical} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Chiranjiv Capital Services Limited" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={ogImage} />

      {/* Schema JSON-LD */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
}

/* ── Reusable Schema Builders ── */

export const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Chiranjiv Capital Services Limited',
  alternateName: 'Chiranjiv Capital',
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.svg`,
  description:
    'Merchant Banker providing IPO advisory, M&A due diligence, capital market services, transaction advisory, and compliance management.',
  foundingDate: '2019',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '302, Navrang House, Bhawani Singh Road, C-Scheme',
    addressLocality: 'Jaipur',
    addressRegion: 'Rajasthan',
    postalCode: '302001',
    addressCountry: 'IN',
  },
  telephone: '+919829012345',
  email: 'info@chiranjivcapital.com',
  areaServed: 'IN',
  serviceType: [
    'IPO Advisory',
    'Merchant Banking',
    'M&A Due Diligence',
    'Capital Market Services',
    'Transaction Advisory',
    'Compliance Advisory',
  ],
  sameAs: [],
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Chiranjiv Capital Services Limited',
  image: DEFAULT_IMAGE,
  url: BASE_URL,
  telephone: '+919829012345',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '302, Navrang House, Bhawani Singh Road, C-Scheme',
    addressLocality: 'Jaipur',
    addressRegion: 'Rajasthan',
    postalCode: '302001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 26.9124,
    longitude: 75.7873,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:30',
      closes: '18:30',
    },
  ],
  priceRange: '₹₹₹',
};

export function buildServiceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: service.title,
    description: service.overview,
    provider: {
      '@type': 'Organization',
      name: 'Chiranjiv Capital Services Limited',
    },
    url: `${BASE_URL}/services#${service.id}`,
    areaServed: 'IN',
  };
}

export function buildFAQSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };
}
