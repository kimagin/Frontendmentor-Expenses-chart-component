/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './js/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    //Define Media queries
    /*screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },*/

    //Define Custom Fonts
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
    },

    extend: {
      //Extend Tailwind Color Pallet
      colors: {
        // Primary
        'soft-red': 'hsl(10, 79%, 65%)',
        cyan: 'hsl(186, 34%, 60%)',
        // Neutral
        'dark-brown': 'hsl(25, 47%, 15%)',
        'medium-brown': 'hsl(28, 10%, 53%)',
        cream: 'hsl(27, 66%, 92%)',
        'very-pale-orange': 'hsl(33, 100%, 98%)',
      },
      // Font size
      fontSize: {
        project: '18px',
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },

      //Create Custom Animations
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        //You can call the keyframes
        bounce: 'bounce 2s ease-in-out infinite',
      },

      //Create custom Key-frames
      keyframes: {
        bounce: {
          //You can use css .style in js
          '0%, 100%': {
            transform: 'scale(1.1)',
          },
          '50%': {
            transform: 'scale(.9)',
          },
        },
      },
    },
  },
  plugins: [],
}
