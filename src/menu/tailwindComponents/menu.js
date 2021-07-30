const menu = {
  ".menu-root": {
    ".cat-panel": {
      "@media (min-width: theme('screens.md'))": {
        "max-height": "0 !important",
        "box-shadow": "none !important",
        "transition-property": "box-shadow, max-height !important",
        left: "0 !important",

        "&.cat-wide-left": {
          left: "calc(50% - 475px) !important",
        },

        "&.cat-narrow-left": {
          left: "calc(50% - 344px) !important",
        },
      },
    },
    ".cat-button": {
      "@media (min-width: theme('screens.md'))": {
        outline: "0 !important",
      },
    },
    ".cat-button:hover + .cat-panel, .cat-panel:hover": {
      "@media (min-width: theme('screens.md'))": {
        "max-height": "960px !important",
        "box-shadow":
          "0px 13px 13px rgba(0, 0, 0, 0.1), 0px 31px 31px rgba(199, 199, 199, 0.1), 0px 38px 38px rgba(145, 145, 145, 0.1) !important",
      },
    },
  },
  ".account-menu": {
    width: "calc(100% + 0.75px) !important",
  },
  "svg:not(:root).svg-inline--fa": {
    overflow: "visible !important",
  },
  ".svg-inline--fa": {
    display: "inline-block !important",
    fontSize: "inherit !important",
    height: "1em !important",
    overflow: "visible !important",
    verticalAlign: "-0.125em !important",
  },
  ".svg-inline--fa.fa-w-6": {
    width: "0.375em !important",
  },

  ".svg-inline--fa.fa-w-8": {
    width: "0.5em !important",
  },
  ".svg-inline--fa.fa-w-14": {
    width: "0.875em !important",
  },
  ".svg-inline--fa.fa-w-10": {
    width: "0.625em !important",
  },
  ".fa-1x": {
    fontSize: "1em !important",
  },
};

module.exports = menu;
