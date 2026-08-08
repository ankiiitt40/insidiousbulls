import puppeteer from 'puppeteer';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, 'dist');
const BLOG_DATA_PATH = path.resolve(__dirname, 'src/data/blogData.ts');

const STATIC_ROUTES = [
  '/',
  '/about',
  '/contact',
  '/blog',
  '/privacy-policy'
];

// Helper to start a tiny static file server
function startServer(port) {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      // Basic SPA routing: if file exists serve it, else serve index.html
      let filePath = path.join(DIST_DIR, req.url === '/' ? 'index.html' : req.url);
      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        filePath = path.join(DIST_DIR, 'index.html');
      }
      
      const extname = path.extname(filePath);
      let contentType = 'text/html';
      switch (extname) {
        case '.js': contentType = 'text/javascript'; break;
        case '.css': contentType = 'text/css'; break;
        case '.svg': contentType = 'image/svg+xml'; break;
      }
      
      fs.readFile(filePath, (err, content) => {
        if (err) {
          res.writeHead(404);
          res.end();
        } else {
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(content);
        }
      });
    });

    server.listen(port, () => resolve(server));
  });
}

async function getBlogSlugs() {
  const content = fs.readFileSync(BLOG_DATA_PATH, 'utf-8');
  const slugRegex = /slug:\s*["']([^"']+)["']/g;
  const slugs = [];
  let match;
  while ((match = slugRegex.exec(content)) !== null) {
    slugs.push(match[1]);
  }
  return slugs;
}

async function run() {
  console.log('Starting prerender process...');
  
  if (!fs.existsSync(DIST_DIR)) {
    console.error('dist directory not found. Please run npm run build first.');
    process.exit(1);
  }

  const PORT = 3000;
  const server = await startServer(PORT);
  console.log(`Local static server running on port ${PORT}`);

  const browser = await puppeteer.launch({ headless: true });
  
  const blogSlugs = await getBlogSlugs();
  const blogRoutes = blogSlugs.map(slug => `/blog/${slug}`);
  const allRoutes = [...STATIC_ROUTES, ...blogRoutes];
  
  console.log(`Discovered ${allRoutes.length} routes to prerender.`);

  for (const route of allRoutes) {
    console.log(`Prerendering ${route}...`);
    const page = await browser.newPage();
    
    // Intercept requests to abort analytics/external if any
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      if (['image', 'media', 'font'].includes(req.resourceType())) {
        req.abort();
      } else {
        req.continue();
      }
    });

    const url = `http://localhost:${PORT}${route}`;
    // Wait for networkidle0 (network idle) + domcontentloaded
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
    
    // Wait for the SEO metadata to be fully updated by React
    await page.evaluate(() => {
      return new Promise((resolve) => {
        // Just give a tiny breather for any final useEffects
        setTimeout(resolve, 500); 
      });
    });

    let html = await page.content();
    
    const outputPath = path.join(DIST_DIR, route === '/' ? '' : route, 'index.html');
    const outputDir = path.dirname(outputPath);
    
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    fs.writeFileSync(outputPath, html);
    console.log(`Saved ${route}`);
    await page.close();
  }

  await browser.close();
  server.close();
  console.log('Prerendering complete!');
}

run().catch(err => {
  console.error('Prerender error:', err);
  process.exit(1);
});
