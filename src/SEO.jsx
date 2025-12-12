import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords, postDate, lastDate, salary, vacancy, location, type = 'website' }) => {
  const { pathname } = useLocation();
  const siteUrl = "https://toponlineform.com";
  const currentUrl = `${siteUrl}${pathname}`;
  const defaultImage = "https://toponlineform.com/logo-banner.png"; // Apna ek badhiya sa banner bana kar public folder me daal do

  // --- BRAHMASTRA: Dynamic Job Schema ---
  let schemaData = null;

  if (type === 'JobPosting') {
    schemaData = {
      "@context": "https://schema.org/",
      "@type": "JobPosting",
      "title": title,
      "description": description,
      "datePosted": postDate || new Date().toISOString(),
      "validThrough": lastDate ? new Date(lastDate.split('/').reverse().join('-')).toISOString() : new Date(new Date().setMonth(new Date().getMonth() + 2)).toISOString(), // Agar last date nahi hai to 2 mahine baad ki daal do
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Top Online Form",
        "sameAs": siteUrl,
        "logo": defaultImage
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN",
          "addressRegion": location || "India"
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": {
          "@type": "QuantitativeValue",
          "value": salary ? parseInt(salary.replace(/[^0-9]/g, '')) : 0, // Salary me se text hata kar number nikalna
          "unitText": "MONTH"
        }
      },
      "employmentType": "FULL_TIME",
      "vacancyCount": vacancy || "Various"
    };
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title} | Top Online Form</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || "Sarkari Result, Govt Jobs 2025, Admit Card, Sarkari Naukri"} />
      <link rel="canonical" href={currentUrl} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="googlebot" content="index, follow" />

      {/* Open Graph (Facebook/WhatsApp ke liye) */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:site_name" content="Top Online Form" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultImage} />
      <meta name="twitter:creator" content="@toponlineform" />

      {/* Inject Schema JSON-LD */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
