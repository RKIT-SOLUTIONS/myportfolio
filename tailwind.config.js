/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
        Tektur: ['Tektur', 'sans-serif'],
      },
      boxShadow: {
        flame:
          '0px 15px 90px rgb(94, 235, 216), 0 20px 30px rgba(0, 128, 128, 0.6), 0 25px 50px rgba(0, 0, 255, 0.5)',
        // More shadow variations can go here
      },
    },
  },
  plugins: [],
};
