const path = require('path');
const withCSS = require('@zeit/next-css');
const compose = require('next-compose');

const webpackConfig = config => {
  config.resolve.alias['src'] = path.join(__dirname, 'src');
  config.resolve.alias['styles'] = path.join(__dirname, 'src/styles');
  config.resolve.alias['components'] = path.join(__dirname, 'src/components');
  config.resolve.alias['utils'] = path.join(__dirname, 'src/utils');

  config.resolve.alias['atoms'] = path.join(__dirname, 'src/components/atoms');
  config.resolve.alias['molecules'] = path.join(__dirname, 'src/components/molecules');
  config.resolve.alias['organisms'] = path.join(__dirname, 'src/components/organisms');

  return config;
};

module.exports = compose([
  [withCSS, {}],
  {
    webpack: webpackConfig,
  },
]);
