/**
 * @type {import('next-sitemap').IConfig}
 */
 module.exports = {
    siteUrl: 'https://tim-ritter.com',
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [{ userAgent: '*', allow: '/' }],
    },
  };