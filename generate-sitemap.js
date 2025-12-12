import fs from 'fs';

// 1. Sabhi Data Files ko Import karein (Kyuki ab data split ho chuka hai)
import { latestJobs } from './src/myLjobs.js';
import { admissionData } from './src/myAdmission.js';
import { admitCards } from './src/myAcards.js';
import { results } from './src/myRslt.js';
import { newAnswerKeys } from './src/myAkey.js';
import { syllabusData } from './src/mySyl.js';
import { previousPapers } from './src/myPreviouspapers.js';

const DOMAIN = 'https://toponlineform.com';

// 2. Static Pages (Jo change nahi hote)
const staticPages = [
  '',
  'active-jobs',
  'latest-jobs',
  'results',
  'admit-card',
  'answer-key',
  'syllabus',
  'admission',
  'previous-papers',
  'about',
  'contact',
  'privacy'
];

// 3. Sabhi Data ko ek badi list me milayein
const allPosts = [
  ...latestJobs, 
  ...admissionData, 
  ...admitCards, 
  ...results, 
  ...newAnswerKeys,
  ...syllabusData,
  ...previousPapers
];

// Helper: Date format karne ke liye
const getSafeDate = (dateStr) => {
  if (!dateStr) return new Date().toISOString().split('T')[0];
  try {
    const parts = dateStr.split('/');
    if (parts.length === 3) {
      // DD/MM/YYYY ko YYYY-MM-DD me badlo
      return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }
    return new Date().toISOString().split('T')[0];
  } catch (e) {
    return new Date().toISOString().split('T')[0];
  }
};

// 4. XML Header
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// 5. Static Pages Add karein
staticPages.forEach(page => {
  sitemap += `
  <url>
    <loc>${DOMAIN}/${page}</loc>
    <changefreq>daily</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`;
});

// 6. Dynamic Posts Add karein (Latest Jobs, Results, etc.)
allPosts.forEach(post => {
  const safeSlug = post.slug ? post.slug.trim() : '';
  if (safeSlug) {
    sitemap += `
  <url>
    <loc>${DOMAIN}/${safeSlug}</loc>
    <lastmod>${getSafeDate(post.postDate)}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`;
  }
});

// 7. XML Close
sitemap += `
</urlset>`;

// 8. File Save karein
fs.writeFileSync('./public/sitemap.xml', sitemap);

console.log(`✅ Sitemap Updated! Total Posts: ${allPosts.length}`);
