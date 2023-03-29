module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      background: {

      },
      backgroundImage: {
        // 'pokemon-gradient': "linear-gradient(to bottom, transparent, black), url('assets/img/background.png')"
        'pokemon-background': "url('assets/img/background.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}