module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {},
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#0E7C86',

          secondary: '#172026',

          accent: '#D77A61',

          neutral: '#22313F',

          'base-100': '#FBFCFA',

          info: '#4D96A9',

          success: '#2E9D70',

          warning: '#D89614',

          error: '#C2413B',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
