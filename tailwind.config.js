/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mulish: 'Mulish, sans-serif',
        orbitron: 'Orbitron, sans-serif',
        yesteryear:'Yesteryear, cursive',

      },
      fontSize:{
        'xl-important':['2.25rem',{important:true}]
      },
      minHeight: {
        'screen-minus-navbar': `calc(theme('height.screen') - 110px)`
      },
      height:{
        'screen-minus-navbar': `calc(theme('height.screen') - 110px)`
      },
      width:{
        'full-minus-100':`calc(theme('width.screen') - 100px)`
      },
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065'
        },
        surface: {
          0: '#ffffff',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        ultra:{
          100:'#3245d7',
          yellow:'#f2d066',
          kamikaze:'#1a2434',
          lightkamikaze:'#334155'
        },
        dark:{
          text:'red'
        },
        gang:{
          0:'#ffffff',
          100:'#f7f9fd',
          200:'#a08ffb',
          300:'#503bfa',
          400:'#c1f629',
          410:'#c1f62905',
          500:'#0a133b',
          600:'#0a133b',
        }
      }
    }
  },
  plugins: []
};
