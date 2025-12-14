import fs from 'fs';

// --- CONFIGURATION ---
const DOMAIN = 'https://toponlineform.com';
const FILES_TO_SCAN = [
  './src/myLjobs',       './src/myLjobs.js',
  './src/myAdmission',   './src/myAdmission.js',
  './src/myAcards',      './src/myAcards.js',
  './src/myRslt',        './src/myRslt.js',
  './src/myAkey',        './src/myAkey.js',
  './src/mySyl',         './src/mySyl.js',
  './src/myPreviouspapers', './src/myPreviouspapers.js'
];

const STATIC_PAGES = [
  '', 'active-jobs', 'latest-jobs', 'results', 'admit-card',
  'answer-key', 'syllabus', 'admission', 'previous-papers',
  'about', 'contact', 'privacy'
];

// --- MAIN FUNCTION ---
const generateSitemap = () => {
  console.log("🔍 Scanning files for slugs...");
  let slugs = [];

  // 1. Files ko Read karo (As Text, not Code)
  FILES_TO_SCAN.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Regex: "slug" : "value" ya slug: "value" ko dhundo
      const regex = /slug\s*:\s*["']([^"']+)["']/g;
      let match;
      
      while ((match = regex.exec(content)) !== null) {
        if(match[1]) {
          slugs.push(match[1]);
        }
      }
    }
  });

  console.log(`✅ Found ${slugs.length} posts.`);

  // 2. XML Content Banao
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Static Pages
  STATIC_PAGES.forEach(page => {
    sitemap += `
  <url>
    <loc>${DOMAIN}/${page}</loc>
    <changefreq>daily</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`;
  });

  // Dynamic Slugs
  slugs.forEach(slug => {
    sitemap += `
  <url>
    <loc>${DOMAIN}/${slug.trim()}</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>`;
  });

  sitemap += `\n</urlset>`;

  // 3. File Save Karo
  fs.writeFileSync('./public/sitemap.xml', sitemap);
  console.log("🚀 Sitemap.xml generated successfully in /public folder!");
};

generateSitemap();
