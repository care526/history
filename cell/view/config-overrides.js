const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

/* config-overrides.js */
module.exports = function override(config, env) {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': resolve('src'),
    '@config': resolve('src/config'),
    '@api': resolve('src/api'),
    '@assets': resolve('src/assets'),
    '@page': resolve('src/page'),
    '@store': resolve('src/store'),
    '@utils': resolve('src/utils'),
  };
  return config;
}
