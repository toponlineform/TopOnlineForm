import fs from 'fs';

// Build hone ke baad index.html ko 404.html ke naam se copy kar do
fs.copyFileSync('dist/index.html', 'dist/404.html');
console.log('✅ Success: Copied index.html to 404.html for GitHub Pages');
