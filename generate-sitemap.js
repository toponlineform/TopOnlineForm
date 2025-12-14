import fs from 'fs';

// --- CONFIGURATION ---
const DOMAIN = 'https://toponlineform.com';

// Hum bas file ka naam denge, code khud check karega ki .js hai ya nahi
const FILES_TO_SCAN = [
  './src/myLjobs', 
  './src/myAdmission',
  './src/myAcards',
  './src/myRslt',
  './src/myAkey',
  './src/mySyl',
  './src/myPreviouspapers'
];

const STATIC_PAGES = [
  '', 'active-jobs', 'latest-jobs', 'results', 'admit-card',
  'answer-key', 'syllabus', 'admission', 'previous-papers',
  'about', 'contact', 'privacy'
];

const generateSitemap = () => {
  console.log("🔍 Scanning files for Auto-Sitemap...");
  let slugs = [];

  // 1. Files Read Logic (Smart Check)
  FILES_TO_SCAN.forEach(filePath => {
    let finalPath = filePath;
    
    // Agar bina extension ke file nahi mili, to .js laga kar check karo
    if (!fs.existsSync(finalPath)) {
        finalPath = filePath + '.js';
    }
    
    // Agar file mil gayi (chahe wo .js wali ho ya bina extension wali)
    if (fs.existsSync(finalPath)) {
      const content = fs.readFileSync(finalPath, 'utf8');
      
      // Regex: Slug dhundne ka logic
      const regex = /slug\s*:\s*["']([^"']+)["']/g;
      let match;
      
      while ((match = regex.exec(content)) !== null) {
        if(match[1]) {
          slugs.push(match[1]);
        }
      }
    }
  });

  console.log(`✅ Found ${slugs.length} posts for Sitemap.`);

  // 2. XML Generate
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

  // Dynamic Posts
  slugs.forEach(slug => {
    sitemap += `
  <url>
    <loc>${DOMAIN}/${slug.trim()}</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>`;
  });

  sitemap += `\n</urlset>`;

  // 3. Write File
  fs.writeFileSync('./public/sitemap.xml', sitemap);
  console.log("🚀 Sitemap.xml updated successfully!");
};

generateSitemap();
