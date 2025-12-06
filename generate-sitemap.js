import fs from 'fs';
import { jobsData } from './src/jobsData.js';

// 1. Aapki Website ka Domain
const DOMAIN = 'https://toponlineform.com';

// 2. Wo pages jo fix rahenge (Static Pages)
const staticPages = [
  '', // Home Page
  'active-jobs',
  'latest-jobs',
  'results',
  'admit-card',
  'answer-key',
  'syllabus',
  'previous-papers',
  'about',
  'contact',
  'privacy'
];

// 3. XML ka Header start karo
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// --- NEW SAFETY FEATURE: Helper function to safely format date ---
// Ye function check karega ki date hai ya nahi. Agar galti se date miss ho gayi, to site crash nahi hogi.
const getSafeDate = (dateStr) => {
  if (!dateStr) {
    // Agar date nahi hai to aaj ki date return karo (YYYY-MM-DD format mein)
    return new Date().toISOString().split('T')[0];
  }
  // Agar date format galat hai ya empty hai, to bhi sambhal lo
  try {
    const parts = dateStr.split('/');
    if (parts.length === 3) {
      return parts.reverse().join('-');
    }
    return new Date().toISOString().split('T')[0];
  } catch (e) {
    return new Date().toISOString().split('T')[0];
  }
};

// 4. Static Pages ko add karo
staticPages.forEach(page => {
  sitemap += `
  <url>
    <loc>${DOMAIN}/${page}</loc>
    <changefreq>daily</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`;
});

// 5. Jobs Data se Loop chala kar saare Links add karo (AUTOMATIC PART)
jobsData.forEach(job => {
  // Slug safayi (optional but good practice)
  const safeSlug = job.slug.trim();
  
  sitemap += `
  <url>
    <loc>${DOMAIN}/${safeSlug}</loc>
    <lastmod>${getSafeDate(job.postDate)}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>`;
});

// 6. XML close karo
sitemap += `
</urlset>`;

// 7. File ko 'public' folder mein save kar do
fs.writeFileSync('./public/sitemap.xml', sitemap);

console.log("✅ Sitemap Generated Successfully with " + jobsData.length + " jobs!");
