/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Outfit"', 'sans-serif'],
        body: ['"DM Sans"', '-apple-system', 'sans-serif'],
      },
      colors: {
        brand: {
          bg:       'oklch(0.07 0.025 265)',
          surface:  'oklch(0.11 0.02 265)',
          accent:   'oklch(0.76 0.19 62)',
          'accent-dim': 'oklch(0.55 0.14 62)',
          fg:       'oklch(0.96 0.008 265)',
          muted:    'oklch(0.52 0.015 265)',
          border:   'oklch(0.18 0.015 265)',
        },
      },
      spacing: {
        1: '4px', 2: '8px', 3: '12px', 4: '16px',
        6: '24px', 8: '32px', 12: '48px', 16: '64px',
        20: '80px', 24: '96px',
      },
    },
  },
  plugins: [],
}
