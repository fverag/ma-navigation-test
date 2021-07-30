/* eslint-disable @typescript-eslint/no-var-requires */
const tailwindcss = require("tailwindcss");

const plugins = [
  tailwindcss,
  "postcss-flexbugs-fixes",
  [
    "postcss-preset-env",
    {
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
    },
  ],
];

module.exports = {
  plugins,
};
