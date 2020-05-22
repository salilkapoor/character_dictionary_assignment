// this is used to load fontawesome properly
// const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  sassLoaderOptions: {}
});
