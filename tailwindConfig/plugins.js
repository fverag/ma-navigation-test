/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require("tailwindcss/plugin");
const menu = require("../src/menu/tailwindComponents/menu");

const components = plugin(({ addComponents }) => {
  addComponents(menu);
});

module.exports = components;
