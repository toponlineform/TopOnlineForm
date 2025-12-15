import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  postDate, 
  lastDate, 
  salary, 
  vacancy, 
  location, 
  type = 'website',
  faqs // ✅ New Prop for FAQ Schema
}) => {
  const { pathname } = useLocation();
  const siteUrl = "https://toponlineform.com";
  const currentUrl = `${siteUrl}${pathname}`;
  const defaultImage = "https://toponlineform.com/logo-banner.png"; 

  // --- 1. Job Schema Logic (BRAHMASTRA) ---
  let jobSchema = null;

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
    } else if (lastDate) {
        // If date is already in ISO or convertible format
        try {
            const parsed = new Date(lastDate);
            if (!isNaN(parsed)) validThroughDate = parsed;
        } catch(e) {}
    }

    jobSchema = {
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

  // --- 2. FAQ Schema Logic (New Feature) ---
  let faqSchema = null;
  if (faqs && faqs.length > 0) {
    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
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

      {/* Inject Job Schema (If exists) */}
      {jobSchema && (
        <script type="application/ld+json">
          {JSON.stringify(jobSchema)}
        </script>
      )}

      {/* Inject FAQ Schema (If exists) */}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
