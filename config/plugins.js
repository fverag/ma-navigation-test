const plugin = require("tailwindcss/plugin");
const menu = require("../menu/tailwindComponents/menu");

const components = plugin(({ addComponents }) => {
  addComponents(menu);
});

module.exports = components;
