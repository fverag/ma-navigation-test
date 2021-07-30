/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require("tailwindcss/plugin");

const importantVariant = plugin(({ addVariant }) => {
  addVariant("important", ({ container }) => {
    container.walkRules((rule) => {
      rule.selector = `.\\!${rule.selector.slice(1)}`;
      rule.walkDecls((decl) => {
        decl.important = true;
      });
    });
  });
});

module.exports = [importantVariant];
