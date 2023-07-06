/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}",
  "./public/**/*.{js,jsx,ts,tsx}",];
export const theme = {
  extend: {
      darkMode: 'className',
     
    keyframes: {
      wave:
      {
        '0%': { transform: 'rotate(0deg)' },
        '10%': { transform: 'rotate(14deg)' },
        '20%': { transform: 'rotate(-8deg)' },
        '30%': { transform: 'rotate(20deg)' },
        '40%': { transform: 'rotate(-4deg)' },
        '50%': { transform: 'rotate(26deg)' },
        '60%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(0deg)' },
      },

      page: {
        '0%': { transform: 'scale(1,1)' },
        '10%': { transform: 'scale(0.9,0.9)' },
        '20%': { transform: 'scale(0.8,0.8)' },
        '30%': { transform: 'scale(0.7,0.7)' },
        '40%': { transform: 'scale(0.6,0.6)' },
        '50%': { transform: 'scale(0.5,0.5)' },
        '60%': { transform: 'scale(0.4,0.4)' },
        '70%': { transform: 'scale(0.3,0.3)' },
        '80%': { transform: 'scale(0.2,0.2)' },
        '90%': { transform: 'scale(0.1,0.1)' },
        '100%': { transform: 'scale(0,0)' },
      },

      borderwave: {
        '0%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
        '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        '100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
      },

      grow: {
        '0%': {
          fontSize: '1em'
        },
        '50%': {
          fontSize: '1.5em'
        },
        '100%': {
          fontSize: '1em'
        }
      }
    },
    animation: {
      'waving-hand': 'wave 3s linear infinite',
      'border-wave': 'borderwave 8s ease-in-out infinite 1s',
      'grow': 'grow 3s ease-in-out infinite',
      'page': 'page 0.5s ease-in infinite'
    },
  },
};
export const plugins = [require('tailwind-scrollbar'),];

