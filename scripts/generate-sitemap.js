const fs = require('fs');
const path = require('path');

// import routes dari Vue router
const routes = require('../src/router/index.js').default || [];

const baseUrl = 'https://Dodikunaedi16.github.io/portfolio-UI-UX';

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `
  <url>
    <loc>${baseUrl}${route.path}</loc>
  </url>
`).join('')}
</urlset>
`;

fs.writeFileSync(path.resolve(__dirname, '../sitemap.xml'), sitemap, 'utf8');
console.log('✅ sitemap.xml generated!');
