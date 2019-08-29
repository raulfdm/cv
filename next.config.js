require('dotenv').config();
const path = require('path');
const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');

const webpackConfig = config => {
  config.resolve.alias['src'] = path.join(__dirname, 'src');
  config.resolve.alias['styles'] = path.join(__dirname, 'src/styles');
  config.resolve.alias['components'] = path.join(__dirname, 'src/components');
  config.resolve.alias['containers'] = path.join(__dirname, 'src/containers');
  config.resolve.alias['utils'] = path.join(__dirname, 'src/utils');

  config.resolve.alias['atoms'] = path.join(__dirname, 'src/components/atoms');
  config.resolve.alias['molecules'] = path.join(__dirname, 'src/components/molecules');
  config.resolve.alias['organisms'] = path.join(__dirname, 'src/components/organisms');

  return config;
};
console.log('AHHHHHHHHHHHHHHHH', {
  API_KEY: process.env.API_KEY,
  AUTH_DOMAIN: process.env.AUTH_DOMAIN,
  DATABASE_URL: process.env.DATABASE_URL,
  PROJECT_ID: process.env.PROJECT_ID,
  APP_ID: process.env.APP_ID,
});

console.log('AHHHHHHHHHHHHHHHH2', {
  API_KEY: process.env.api_key,
  AUTH_DOMAIN: process.env.auth_domain,
  DATABASE_URL: process.env.database_url,
  PROJECT_ID: process.env.project_id,
  APP_ID: process.env.app_id,
});

module.exports = withPlugins([[withCSS, {}]], {
  env: {
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    DATABASE_URL: process.env.DATABASE_URL,
    PROJECT_ID: process.env.PROJECT_ID,
    APP_ID: process.env.APP_ID,
  },
  webpack: webpackConfig,
});
