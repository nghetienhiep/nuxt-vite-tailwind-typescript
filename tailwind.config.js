const colors = require('tailwindcss/colors');
const themes = require('tailwindcss/defaultTheme');

const withOpacity = (variableName) => ({ opacityValue }) => {
  if (opacityValue != null) {
    return `rgba(var(${variableName}), ${opacityValue})`;
  }
  return `rgb(var(${variableName}))`;
};

module.exports = {
  theme: {
    extend: {
      colors: {
        brand: colors.lightBlue,
      },
      fontFamily: {
        sans: ['Inter var', ...themes.fontFamily.sans],
      },
      textColor: {
        skin: {
          base: withOpacity(`--color-text-base`),
          muted: withOpacity(`--color-text-muted`),
          inverted: withOpacity(`--color-text-inverted`),
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity(`--color-fill`),
          'button-accent': withOpacity(`--color-button-accent`),
          'button-accent-hover': withOpacity(`--color-button-accent-hover`),
          'button-muted': withOpacity(`--color-button-muted`),
        },
      },
      gradientColorStops: {
        skin: {
          hue: withOpacity(`--color-fill`),
        },
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
