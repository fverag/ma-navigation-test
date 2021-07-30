const menu = {
  ".menu-root": {
    ".cat-panel": {
      "@media (min-width: theme('screens.md'))": {
        "max-height": "0",
        "box-shadow": "none",
        "transition-property": "box-shadow, max-height",
        left: 0,

        "&.cat-wide-left": {
          left: "calc(50% - 475px)",
        },

        "&.cat-narrow-left": {
          left: "calc(50% - 344px)",
        },
      },
    },
    ".cat-button": {
      "@media (min-width: theme('screens.md'))": {
        outline: "0",
      },
    },
    ".cat-button:hover + .cat-panel, .cat-panel:hover": {
      "@media (min-width: theme('screens.md'))": {
        "max-height": "960px",
        "box-shadow":
          "0px 13px 13px rgba(0, 0, 0, 0.1), 0px 31px 31px rgba(199, 199, 199, 0.1), 0px 38px 38px rgba(145, 145, 145, 0.1)",
      },
    },
  },
  ".account-menu": {
    width: "calc(100% + 0.75px)",
  },
};

module.exports = menu;
