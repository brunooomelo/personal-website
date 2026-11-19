/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // Mesmo valor de src/config/site.ts.
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL || 'https://brunooomelo.vercel.app').replace(/\/$/, ''),
  generateRobotsTxt: true,
  generateIndexSitemap: false
}
