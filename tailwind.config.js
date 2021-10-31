module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        pop: "Poppins, sans-serif",
      },
      // gridTemplateRows: {
      //   '[auto,auto,1fr]' : 'auto auto 1fr'
      // }
      inset: {
        "-top-px": "-2px",
        "-right-px": "-2px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
