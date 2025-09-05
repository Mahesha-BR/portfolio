/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://mahesha.dev',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: [
    '/auth/*',
    '/unauthorized',
    '/nav',
    '/mahesha/*',
  ],
};
