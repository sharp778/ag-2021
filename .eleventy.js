const now = String(Date.now());

const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, myClass) {
  if (alt === undefined) {
    // You bet we throw an error on missing alt (alt="" works okay)
    throw new Error(`Missing \`alt\` on myImage from: ${src}`);
  }

  let metadata = await Image(src, {
    widths: [760, 1000, 1200],
    formats: ["webp", "jpeg"],
  });

  let data = metadata.jpeg[metadata.jpeg.length - 1];
  return `<img src="${data.url}" class=${myClass} alt="${alt}" loading="lazy" decoding="async">`;
}

async function imageShortcodeBanner(src, alt, myClass) {
  if (alt === undefined) {
    // You bet we throw an error on missing alt (alt="" works okay)
    throw new Error(`Missing \`alt\` on myImage from: ${src}`);
  }

  let metadata = await Image(src, {
    widths: [1000, 1200, 1600, 2000],
    formats: ["webp", "jpeg"],
  });

  let data = metadata.jpeg[metadata.jpeg.length - 1];
  return `<img src="${data.url}" class=${myClass} alt="${alt}" loading="lazy" decoding="async">`;
}

async function imageShortcodeClickable(src, alt, myClass) {
  if (alt === undefined) {
    // You bet we throw an error on missing alt (alt="" works okay)
    throw new Error(`Missing \`alt\` on myImage from: ${src}`);
  }

  let metadata = await Image(src, {
    widths: [760, 1000, 1280],
    formats: ["webp", "jpeg"],
  });

  let data = metadata.jpeg[metadata.jpeg.length - 1];
  // console.log(data);
  return `<a href=${data.url} target="_blank">
  <img src="${data.url}" class=${myClass} alt="${alt}" loading="lazy" decoding="async">
  </a>`;
}

async function imageShortcodePng(src, alt, myClass) {
  if (alt === undefined) {
    // You bet we throw an error on missing alt (alt="" works okay)
    throw new Error(`Missing \`alt\` on myImage from: ${src}`);
  }

  let metadata = await Image(src, {
    widths: [760, 1000, 1200],
    formats: ["webp", "png"],
  });

  let lowestSrc = metadata["png"][0];

  const srcset = Object.keys(metadata).reduce(
    (acc, format) => ({
      ...acc,
      [format]: metadata[format].reduce(
        (_acc, curr) => `${_acc} ${curr.srcset} ,`,
        ""
      ),
    }),
    {}
  );

  console.log("/////////////", srcset);

  let data = metadata.png[metadata.png.length - 1];
  console.log(data);
  // console.log(metadata);
  return `<a href=${data.url} target="_blank">
  <img src="${data.url}" class="${myClass}" alt="${alt}" loading="lazy" srcset="${srcset["png"]}" decoding="async">
  </a>`;
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addNunjucksAsyncShortcode("imagePng", imageShortcodePng);
  eleventyConfig.addNunjucksAsyncShortcode("imageBanner", imageShortcodeBanner);

  eleventyConfig.addNunjucksAsyncShortcode(
    "imageClickable",
    imageShortcodeClickable
  );
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget("./_tmp/style.css");
  eleventyConfig.addPassthroughCopy({ "./_tmp/style.css": "./style.css" });
  eleventyConfig.addShortcode("version", () => now);
  eleventyConfig.addShortcode("makeItalic", function (sampleText) {
    return `<span class="italic">${sampleText}</span>`;
  });
  eleventyConfig.addPassthroughCopy({
    "./node_modules/alpinejs/dist/cdn.js": "assets/scripts/alpine.js",
  });
  eleventyConfig.addPassthroughCopy("assets");
  // eleventyConfig.addPassthroughCopy("./src/rawimages");
  eleventyConfig.addPassthroughCopy("img");
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
