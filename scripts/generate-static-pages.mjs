/**
 * Post-build script: generates route-specific index.html files
 * so each URL has proper <title>, <meta description>, <canonical>, and OG tags
 * baked into the static HTML served to crawlers.
 *
 * Run after `vite build` via: node scripts/generate-static-pages.mjs
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const BASE_URL = 'https://zenbooks4u.com';

// All routes with their SEO metadata
const routes = [
  {
    path: '/buy-and-hold',
    title: 'Bookkeeping for Buy & Hold Investors — Zen Books',
    description: 'Per-property P&L, multi-entity tracking, and lender-ready financials for buy and hold real estate investors. QuickBooks bookkeeping by Zen Books, Scranton PA.',
  },
  {
    path: '/fix-and-flip',
    title: 'Bookkeeping for Fix & Flip Investors — Zen Books',
    description: 'Per-project cost tracking, rehab budget vs actual, hard money loan tracking, and true profit calculations on every flip. QuickBooks bookkeeping by Zen Books.',
  },
  {
    path: '/wholesale',
    title: 'Bookkeeping for Real Estate Wholesalers — Zen Books',
    description: 'Deal-by-deal tracking, marketing ROI by channel, assignment fee tracking, and multi-entity management for real estate wholesalers. Zen Books, Scranton PA.',
  },
  {
    path: '/small-business-bookkeeping',
    title: 'Small Business Bookkeeping — Done For You | Zen Books, Scranton PA',
    description: 'QuickBooks bookkeeping for small businesses in Scranton, PA. Monthly bookkeeping, catch-up cleanup, and tax-ready financials. Judgment-free, in plain English.',
  },
  {
    path: '/about',
    title: 'About Zen Books — Real Estate Investor Bookkeeping Team | Scranton, PA',
    description: 'Meet the team behind Zen Books. QuickBooks bookkeeping built specifically for real estate investors — landlords, flippers, and wholesalers. Based in Scranton, PA.',
  },
  {
    path: '/scranton-bookkeeping',
    title: 'Scranton Bookkeeping for Real Estate Investors | Landlords, Flippers & Wholesalers — Zen Books',
    description: 'Scranton-based bookkeeping for real estate investors, landlords, flippers, and wholesalers. Per-property P&L, multi-entity tracking, lender-ready reports. Serving Lackawanna County and NEPA.',
  },
  {
    path: '/wilkes-barre-nepa-bookkeeping',
    title: 'Wilkes-Barre & NEPA Bookkeeping for Real Estate Investors | Landlords, Flippers & Wholesalers — Zen Books',
    description: 'Bookkeeping for real estate investors in Wilkes-Barre, Hazleton, Pittston, and Luzerne County. Landlord, flipper, and wholesaler bookkeeping. Per-property P&L, multi-entity tracking.',
  },
  {
    path: '/poconos-bookkeeping',
    title: 'Poconos Bookkeeping for Real Estate Investors | STR, Landlords & Flippers — Zen Books',
    description: 'Bookkeeping for Poconos real estate investors, Airbnb hosts, landlords, and flippers. STR income reconciliation, out-of-state investor support. Monroe, Pike & Wayne Counties.',
  },
  {
    path: '/lehigh-valley-bookkeeping',
    title: 'Lehigh Valley Bookkeeping for Real Estate Investors | Flippers, Landlords & Wholesalers — Zen Books',
    description: 'Bookkeeping for real estate investors in Allentown, Bethlehem, Easton, and the Lehigh Valley. Fix-and-flip tracking, landlord bookkeeping, wholesaler accounting. Per-property P&L.',
  },
  {
    path: '/reading-bookkeeping',
    title: 'Reading Bookkeeping for Real Estate Investors | Landlords, Flippers & Wholesalers — Zen Books',
    description: 'Bookkeeping for real estate investors in Reading, PA and Berks County. Landlord, flipper, and wholesaler bookkeeping. Per-property P&L, multi-entity tracking, lender-ready reports.',
  },
  {
    path: '/harrisburg-bookkeeping',
    title: 'Harrisburg Bookkeeping for Real Estate Investors | Landlords, Flippers & Wholesalers — Zen Books',
    description: 'Bookkeeping for real estate investors in Harrisburg, PA and the Capital Region. Landlord, flipper, and wholesaler bookkeeping. Per-property P&L, multi-entity tracking.',
  },
  {
    path: '/philadelphia-suburbs-bookkeeping',
    title: 'Philadelphia Suburbs Bookkeeping for Real Estate Investors | Landlords, Flippers & Wholesalers — Zen Books',
    description: 'Bookkeeping for real estate investors in the Philadelphia suburbs — Bucks, Montgomery, Delaware, and Chester Counties. Per-property P&L, multi-entity tracking, lender-ready reports.',
  },
  {
    path: '/blog',
    title: 'Real Estate Bookkeeping Blog | Zen Books — Scranton, PA',
    description: 'Straight-talk bookkeeping advice for real estate investors. CapEx vs. repairs, per-property P&L, multi-entity LLCs, fix-and-flip tracking — written by Pamella Zarnoff, Zen Books.',
  },
  {
    path: '/blog/5-bookkeeping-mistakes-real-estate-investors',
    title: '5 Bookkeeping Mistakes That Cost Real Estate Investors Thousands Every Year | Zen Books',
    description: 'The 5 most common bookkeeping mistakes real estate investors make — per-property P&L, CapEx vs repairs, catch-up bookkeeping, multi-entity management, and marketing ROI tracking.',
  },
  {
    path: '/blog/capex-vs-repairs',
    title: "CapEx vs. Repairs: The Classification Mistake That's Inflating Your Tax Bill | Zen Books",
    description: "Most real estate investors are misclassifying their biggest expenses. Here's how to tell the difference between a capital expenditure and a repair — and why it matters more than you think.",
  },
  {
    path: '/blog/per-property-pl-tracking',
    title: 'Per-Property P&L: How to Know What Each Door Is Actually Making You | Zen Books',
    description: "If you can't pull up a profit and loss statement for each rental property in under a minute, your books aren't working for you. Here's what per-property tracking actually looks like.",
  },
  {
    path: '/blog/multi-entity-llc-bookkeeping',
    title: 'Multi-Entity LLC Bookkeeping: Clean Books or a Paper Trail Nightmare | Zen Books',
    description: "Multiple LLCs are smart for asset protection. But if the bookkeeping doesn't match the legal structure, you might as well not have them.",
  },
  {
    path: '/blog/fix-and-flip-accounting',
    title: 'Fix-and-Flip Accounting: What Most Bookkeepers Get Wrong From Day One | Zen Books',
    description: "Flipping houses isn't rental property accounting. It's project-based, deal-by-deal, and if your bookkeeper treats it the same way, you have no idea what your flips are actually making.",
  },
];

function generatePage(template, route) {
  const url = `${BASE_URL}${route.path}`;
  const ogType = route.path.startsWith('/blog/') && route.path !== '/blog' ? 'article' : 'website';

  let html = template;

  // Replace title
  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${escapeHtml(route.title)}</title>`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content=".*?" \/>/,
    `<meta name="description" content="${escapeHtml(route.description)}" />`
  );

  // Replace canonical
  html = html.replace(
    /<link rel="canonical" href=".*?" \/>/,
    `<link rel="canonical" href="${url}" />`
  );

  // Replace OG tags
  html = html.replace(
    /<meta property="og:title" content=".*?" \/>/,
    `<meta property="og:title" content="${escapeHtml(route.title)}" />`
  );
  html = html.replace(
    /<meta property="og:description" content=".*?" \/>/,
    `<meta property="og:description" content="${escapeHtml(route.description)}" />`
  );
  html = html.replace(
    /<meta property="og:url" content=".*?" \/>/,
    `<meta property="og:url" content="${url}" />`
  );
  html = html.replace(
    /<meta property="og:type" content=".*?" \/>/,
    `<meta property="og:type" content="${ogType}" />`
  );

  // Replace Twitter tags
  html = html.replace(
    /<meta name="twitter:title" content=".*?" \/>/,
    `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content=".*?" \/>/,
    `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`
  );

  // Add hreflang for English US
  if (!html.includes('hreflang')) {
    html = html.replace(
      /<link rel="canonical"/,
      `<link rel="alternate" hreflang="en-US" href="${url}" />\n    <link rel="canonical"`
    );
  }

  return html;
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Main
const templatePath = join(DIST, 'index.html');
if (!existsSync(templatePath)) {
  console.error('dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const template = readFileSync(templatePath, 'utf-8');
let generated = 0;

for (const route of routes) {
  const html = generatePage(template, route);
  const dir = join(DIST, route.path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), html);
  generated++;
}

console.log(`Generated ${generated} static pages in dist/`);
