const htmlmin = require('html-minifier');

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  // instruct eleventy to rebuild when a file changes with eleventyConfig.addWatchTarget(file)

  // instruct eleventy to copy files or directories with eleventyConfig.addPassthroughCopy()
  eleventyConfig.addPassthroughCopy({
    './node_modules/@fontsource/inter/files': '/assets/styles/files/',
  });
  eleventyConfig.addPassthroughCopy({
    './assets/static/favicon.ico': '/favicon.ico',
  });

  eleventyConfig.addShortcode('version', function () {
    return String(Date.now());
  });

  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (
      process.env.ELEVENTY_PRODUCTION &&
      outputPath &&
      outputPath.endsWith('.html')
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });
};
