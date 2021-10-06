const now = String(Date.now());

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget("./_tmp/style.css");
  eleventyConfig.addPassthroughCopy({ "./_tmp/style.css": "./style.css" });
  eleventyConfig.addShortcode("version", () => now);
  eleventyConfig.addPassthroughCopy({
    "./node_modules/alpinejs/dist/cdn.js": "./js/alpine.js",
  });
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: "src",
    },
    markdownTemplateEngine: "njk",
    templateFormats: [
      "njk",
      "md",
      "html",
      "css",
      "jpg",
      "JPG",
      "png",
      "PNG",
      "svg",
      "jpeg",
    ],
  };
};
