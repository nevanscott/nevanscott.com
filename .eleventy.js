module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("_redirects");

  eleventyConfig.addPassthroughCopy("*.css");
  eleventyConfig.addPassthroughCopy("*.js");
  eleventyConfig.addPassthroughCopy("*.svg");
  eleventyConfig.addPassthroughCopy("*.png");

  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("icons");
  eleventyConfig.addPassthroughCopy("photos");
};
