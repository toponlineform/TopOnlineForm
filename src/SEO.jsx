import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords, postDate, lastDate, salary, vacancy, location, type = 'website' }) => {
  const { pathname } = useLocation();
  const siteUrl = "https://toponlineform.com";
  const currentUrl = `${siteUrl}${pathname}`;
  const defaultImage = "https://toponlineform.com/logo-banner.png"; 

  // --- BRAHMASTRA: Dynamic Job Schema Logic ---
  let schemaData = null;

  if (type === 'JobPosting') {
    // Salary Fix: Sirf pehla number nikalo (Min Salary)
    let salaryValue = 0;
    if (salary) {
        const match = salary.match(/(\d+)/); // Sirf digits dhundo
        if (match) salaryValue = parseInt(match[0]); // Pehla number (e.g. 18000)
    }

    // Date Fix: Safe Date Parsing
    let validThroughDate = new Date();
    validThroughDate.setMonth(validThroughDate.getMonth() + 2); // Default: 2 months later
    
    if (lastDate && lastDate.includes('/')) {
        try {
            // Convert DD/MM/YYYY to YYYY-MM-DD
            const parts = lastDate.split('/');
            if(parts.length === 3) {
                validThroughDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
            }
        } catch (e) { console.error("Date Parse Error", e); }
    }

    schemaData = {
      "@context": "https://schema.org/",
      "@type": "JobPosting",
      "title": title,
      "description": description,
      "identifier": {
        "@type": "PropertyValue",
        "name": "TopOnlineForm",
        "value": pathname.replace('/', '') // Unique ID from URL
      },
      "datePosted": postDate || new Date().toISOString(),
      "validThrough": validThroughDate.toISOString(),
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
          "value": salaryValue || 18000, // Default agar salary na mile
          "unitText": "MONTH"
        }
      },
      "employmentType": "FULL_TIME",
      "vacancyCount": vacancy ? parseInt(vacancy) : 1
    };
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title} | Top Online Form</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || "Sarkari Result, Govt Jobs 2025, Admit Card, Sarkari Naukri, Online Form"} />
      <link rel="canonical" href={currentUrl} />
      <meta name="robots" content="index, follow, max-image-preview:large" />

      {/* Open Graph (Facebook/WhatsApp) */}
      <meta property="og:type" content={type === 'JobPosting' ? 'article' : 'website'} />
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

      {/* Inject Schema JSON-LD (The Google Magic) */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
