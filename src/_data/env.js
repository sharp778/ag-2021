const environment = process.env.ELEVENTY_ENV;
const PROD_ENV = 'prod';
const isProd = environment === PROD_ENV;

module.exports = {
  siteName: "aganitha-website",
  author: "aganitha",
  environment,
  isProd,
  tracking: {
    gtag: 'UA-177277145-1',
  },
}

