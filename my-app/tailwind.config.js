/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // Extend Tailwind's utility system with custom utilities
      spacing: {
        18: '4.5rem',
        88: '22rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        // Only actual component classes that create specific UI components
        '.navbar': {
          '@apply bg-white shadow-sm sticky top-0 z-50': {},
        },
        '.navbar-container': {
          '@apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4':
            {},
        },
        '.navbar-brand': {
          '@apply text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors':
            {},
        },
        '.navbar-desktop': {
          '@apply hidden md:flex space-x-8': {},
        },
        '.navbar-link': {
          '@apply text-lg font-normal text-gray-700 hover:text-gray-600 transition-colors':
            {},
        },
        '.navbar-link-active': {
          '@apply font-bold text-gray-900': {},
        },
        '.navbar-mobile-button': {
          '@apply md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500':
            {},
        },
        '.navbar-hamburger': {
          '@apply block w-6 h-0.5 bg-gray-700 transition-all duration-300': {},
          '&::before, &::after': {
            '@apply block w-6 h-0.5 bg-gray-700 transition-all duration-300':
              {},
            content: '""',
          },
          '&::before': {
            '@apply transform -translate-y-2': {},
          },
          '&::after': {
            '@apply transform translate-y-1.5': {},
          },
        },
        '.navbar-hamburger-open': {
          '@apply bg-transparent': {},
          '&::before': {
            '@apply transform rotate-45 translate-y-0': {},
          },
          '&::after': {
            '@apply transform -rotate-45 -translate-y-0.5': {},
          },
        },
        '.navbar-mobile': {
          '@apply md:hidden bg-white border-t border-gray-200 py-2': {},
        },
        '.navbar-mobile-link': {
          '@apply block px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50':
            {},
        },
        '.navbar-mobile-link-active': {
          '@apply bg-blue-50 text-blue-700': {},
        },
      });
    },
  ],
};
