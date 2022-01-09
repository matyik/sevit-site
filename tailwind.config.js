module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        button: 'rgba(13,147,242,0.12)',
        secondary: '#27272b',
        background: '#1d1d20',
        primary: '#0d93f2',
        border: 'hsla(0,0%,100%,0.06)',
      },
      fontFamily: {
        'inter-bold': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
