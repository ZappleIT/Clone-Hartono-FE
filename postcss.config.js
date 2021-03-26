const PurgeCSSS = require('@fullhuman/postcss-purgecss')
require('dotenv').config();
const PurgeCssConfig = {
  content: ['./index.html', './detail.html'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
}

module.exports = {
    plugins: [
      require('autoprefixer'),
      require('tailwindcss'),
      process.env.NODE_ENV === 'production' && PurgeCSSS(PurgeCssConfig)
    ]
}

// const tailwindcss = require("tailwindcss");
// const purgecss = require("@fullhuman/postcss-purgecss");
// const cssnano = require("cssnano");
// const autoprefixer = require("autoprefixer");

// class TailwindExtractor {
//   static extract(content) {
//     return content.match(/[A-z0-9-:\/]+/g);
//   }
// }

// module.exports = {
//   plugins: [
//     tailwindcss("tailwind.config.js"),
//     cssnano({
//       preset: "default"
//     }),
//     purgecss({
//       content: ["src/**/*.html"],
//       extractors: [
//         {
//           extractor: TailwindExtractor,
//           extensions: ["html", "js", "php", "vue"]
//         }
//       ]
//     }),
//     autoprefixer
//   ]
// };