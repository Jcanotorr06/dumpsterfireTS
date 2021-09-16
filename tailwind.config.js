module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'code': ['Source Code Pro', 'monospace'],
        'body': ['Source Sans Pro', 'sans-serif']
      },
      colors: {
        yellow: {
          light: "#F7D052",
          dark: "#AB8408"
        },
        cyan: {
          light: "#90DDDE",
          dark: "#31A4A5"
        },
        pink: {
          light: "#FF94B0",
          dark: "#AB3C59"
        },
        lavender: {
          light: "#D3CCFC",
          dark: "#776CB7"
        },
        bubbleGum: {
          light: "#E89BE0",
          dark: "#9C4F94"
        },
        orange: {
          light: "#FAA489",
          dark: "#BE4F2D"
        },
        blue: {
          light: "#8CC3FA",
          dark: "#2D75BE"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
