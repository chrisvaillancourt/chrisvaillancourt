const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: {
    content: ['_site/**/*.html'],
    options: {
      safelist: [],
    },
  },
  darkMode: 'media',
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      textColor: [
        'responsive',
        'hover',
        'focus',
        'before',
        'after',
        // If you want to combine it with a pseudo class,
        // use `<pseudo-class>_<pseudo-element>`.
        'hover_before',
        'hover_after',
        'focus_before',
      ],
    },
  },
  // Set up custom pseudo-classes and pseudo-elements.
  customPseudoClasses: [],
  customPseudoElements: [],
  plugins: [
    require('tailwindcss-pseudo-elements'),
    plugin(function ({ addUtilities }) {
      addUtilities(
        {
          '.empty-content': {
            content: "''",
          },
        },
        ['before']
      );
    }),
  ],
};
