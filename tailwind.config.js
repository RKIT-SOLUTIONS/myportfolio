/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
        Tektur: ['Tektur', 'sans-serif'],
        comfortaa: ['Comfortaa', 'sans-serif'],
      },
      boxShadow: {
        flame:
          '0px 15px 90px rgb(94, 235, 216), 0 20px 30px rgba(0, 128, 128, 0.6), 0 25px 50px rgba(0, 0, 255, 0.5)',
        // More shadow variations can go here
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
        bounceSmall: 'bounceSmall 2.4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '100%': { transform: 'translateX(0%)' },
          '20%': { transform: 'translateX(-100%)' },
        },
        bounceSmall: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
    },
  },
  plugins: [],
};
