/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'nh-black': '#0D0D0D',
        'nh-cyan': '#00FFFF',
      },
      backgroundImage: {
        'nh-gradient': 'linear-gradient(90deg, #0066FF 0%, #9B5CFF 100%)',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(155,92,255,0.35)',
      },
      borderRadius: {
        '2xl': '1rem',
      }
    },
  },
  plugins: [],
}
