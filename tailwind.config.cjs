const twHyphens = require('tailwindcss-hyphens');
const twTextFill = require('tailwindcss-text-fill');
const twBorderGradients = require('tailwindcss-border-gradients');

module.exports = {
  separator: '_',
  content: [
    './src/views/**/*.pug',
    './src/components/**/*.pug',
    './src/base/pug/**/*.pug',
    './src/base/scripts/**/*.js',
    './src/components/**/*.js',
  ],
  theme: {
    extend: {
      transitionDuration: {
        400: '400ms',
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
      },
    },
    screens: {
      // Configuring for max-height media queries
      xl: { max: '1700px' },
      lg: { max: '1200px' },
      md: { max: '1060px' },
      sm: { max: '768px' },
      ss: { max: '620px' },
      xs: { max: '480px' },

      // Configuring for min-height media queries
      minxs: { min: '480px' },
      minss: { min: '620px' },
      minsm: { min: '768px' },
      minmd: { min: '1060px' },
      minlg: { min: '1200px' },
      minxl: { min: '1700px' },
    },
    fontFamily: {
      sans: [
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
    },
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['18px', '28px'],
      xl: ['20px', '28px'],
      '2xl': ['24px', '32px'],
      '3xl': ['30px', '36px'],
      '4xl': ['36px', '40px'],
      '4.5xl': ['40px', '44px'],
      '5xl': ['48px', '1'],
      '6xl': ['64px', '1'],
    },
    colors: {
      // Basic colors
      transparent: 'transparent',
      inherit: 'inherit',
      current: 'currentColor',

      white: '#fff',
      black: '#000',

      // Semantic colors
      main: '#2563eb',
      success: '#16a34a',
      warning: '#eab308',
      danger: '#b91c1c',

      // Other colors
      gray: {
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },

      red: {
        100: '#fee2e2',
        200: '#fecaca',
        300: '#fca5a5',
        400: '#f87171',
        500: '#ef4444',
        600: '#dc2626',
        700: '#b91c1c',
        800: '#991b1b',
        900: '#7f1d1d',
      },

      orange: {
        100: '#ffedd5',
        200: '#fed7aa',
        300: '#fdba74',
        400: '#fb923c',
        500: '#f97316',
        600: '#ea580c',
        700: '#c2410c',
        800: '#9a3412',
        900: '#7c2d12',
      },

      yellow: {
        100: '#fef9c3',
        200: '#fef08a',
        300: '#fde047',
        400: '#facc15',
        500: '#eab308',
        600: '#ca8a04',
        700: '#a16207',
        800: '#854d0e',
        900: '#713f12',
      },

      green: {
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d',
        800: '#166534',
        900: '#14532d',
      },

      teal: {
        100: '#ccfbf1',
        200: '#99f6e4',
        300: '#5eead4',
        400: '#2dd4bf',
        500: '#14b8a6',
        600: '#0d9488',
        700: '#0f766e',
        800: '#115e59',
        900: '#134e4a',
      },

      blue: {
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
      },

      indigo: {
        100: '#e0e7ff',
        200: '#c7d2fe',
        300: '#a5b4fc',
        400: '#818cf8',
        500: '#6366f1',
        600: '#4f46e5',
        700: '#4338ca',
        800: '#3730a3',
        900: '#312e81',
      },

      purple: {
        100: '#f3e8ff',
        200: '#e9d5ff',
        300: '#d8b4fe',
        400: '#c084fc',
        500: '#a855f7',
        600: '#9333ea',
        700: '#7e22ce',
        800: '#6b21a8',
        900: '#581c87',
      },

      pink: {
        100: '#fce7f3',
        200: '#fbcfe8',
        300: '#f9a8d4',
        400: '#f472b6',
        500: '#ec4899',
        600: '#db2777',
        700: '#be185d',
        800: '#9d174d',
        900: '#831843',
      },
    },
    backgroundColor: (theme) => theme('colors'),
    borderColor: (theme) => ({
      ...theme('colors'),
      default: theme('colors.gray.300', 'currentColor'),
    }),
    textColor: (theme) => theme('colors'),
    linearBorderGradients: {
      directions: {
        t: 'to top',
        tr: 'to top right',
        r: 'to right',
        br: 'to bottom right',
        b: 'to bottom',
        bl: 'to bottom left',
        l: 'to left',
        tl: 'to top left',
      },
      colors: (theme) => theme('backgroundImage'),
    },
    repeatingLinearBorderGradients: (theme) => ({
      directions: theme('linearBorderGradients.directions'),
      colors: theme('linearBorderGradients.colors'),
      lengths: {
        sm: '25px',
        md: '50px',
        lg: '100px',
      },
    }),
  },
  variants: {
    linearBorderGradients: ['responsive'],
    repeatingLinearBorderGradients: ['responsive'],
  },
  corePlugins: {
    container: false,
  },
  plugins: [twHyphens, twTextFill, twBorderGradients],
};
