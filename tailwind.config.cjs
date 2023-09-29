/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['ubuntu'],
        poppins: ['Inter'],
        raleway: ['Raleway'],
        quicksand: ['Quicksand'],
      },
      keyframes: {
        'right-bounce': {
          '0%, 100%': {
            transform: 'translateX(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateX(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        'left-bounce': {
          '0%, 100%': {
            transform: 'translateX(25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateX(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },

        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        loader: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        postloader: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'center left',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center right',
          },
        },
      },
      animation: {
        'right-bounce': 'right-bounce 1s infinite',
        'left-bounce': 'left-bounce 1s infinite',
        text: 'text 5s ease infinite',
        loader: 'loader 1s ease-in infinite',
        postloader: 'postloader 0.5s ease infinite',
        spin: 'spin 10s linear infinite',
      },
    },
  },

  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/typography')],
  dark: 'class',
};
