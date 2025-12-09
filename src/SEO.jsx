import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, url, image }) {
  // 1. Fallback image if specific job image is missing
  const metaImage = image || "https://toponlineform.com/logo.png"; // Make sure logo.png is in your public folder

  return (
    <Helmet>
      <title>{title} | TopOnlineForm</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Social Media Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={metaImage} /> {/* This was missing */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
