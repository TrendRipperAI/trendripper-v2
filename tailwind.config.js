/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}", // just in case
  ],
  theme: {
    extend: {
      fontSize: {
        base: '0.875rem', // 14px = 90% of default 16px
      },
    },
  },
  plugins: [],
};
