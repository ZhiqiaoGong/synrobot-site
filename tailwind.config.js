/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            500: '#0ea5e9',
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985', 
            900: '#0c4a6e',
          },
          accent: {
            400: '#34d399',
            500: '#10b981',
            600: '#059669',
          },
          dark: {
            800: '#1f2937',
            900: '#111827',
          }
        },
        animation: {
          'float': 'float 6s ease-in-out infinite',
          'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          'gradient': 'gradient 15s ease infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' },
          },
          gradient: {
            '0%, 100%': {
              'background-size': '200% 200%',
              'background-position': 'left center'
            },
            '50%': {
              'background-size': '200% 200%',
              'background-position': 'right center'
            },
          }
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'mesh-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        }
      },
    },
    plugins: [],
  }