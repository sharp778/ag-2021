const now = String(Date.now());

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget("./_tmp/style.css");
  eleventyConfig.addPassthroughCopy({ "./_tmp/style.css": "./style.css" });
  eleventyConfig.addShortcode("version", () => now);
  eleventyConfig.addShortcode("makeItalic", function (sampleText) {
    return `<span class="italic">${sampleText}</span>`;
  });
  eleventyConfig.addPassthroughCopy({
    "./node_modules/alpinejs/dist/cdn.js": "./js/alpine.js",
  });
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addFilter("myFilter", function (value) {
    if (value.match(/in silico|in vitro/gi)) {
      return value.replace(/in silico|in vitro/gi);
    }
    return value;
  });

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
