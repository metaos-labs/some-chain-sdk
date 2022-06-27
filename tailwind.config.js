module.exports = {
  content: ['./interface/public/**/*.html', './interface/src/**/*.{vue,js,ts,jsx,tsx}'],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: '#993BF9',
        layout: '#1d1e2c',
        container: '#191B1F',
        'dark-1000': '#0D0415',
        'dark-900': '#434343',
        'dark-850': '#1d1e2c',
        'dark-800': '#202231',
        'dark-700': '#2E3348',
        'dark-600': '#414A6C',
        'dark-500': '#223D5E',
        'dark-400': '#545f7b',
      },
      fontSize: {
        h1: ['2.25rem', { lineHeight: '2.5rem' }],
        h2: ['1.875rem', { lineHeight: '2.25rem' }],
        h3: ['1.5rem', { lineHeight: '2rem' }],
        h4: ['1.25rem', { lineHeight: '1.75rem' }],
        h5: ['1.125rem', { lineHeight: '1.75rem' }],
        h6: ['1rem', { lineHeight: '1.5rem' }],
      },
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}
