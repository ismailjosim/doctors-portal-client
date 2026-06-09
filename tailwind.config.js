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
      {
        darktheme: {
          primary: '#2BB3BD',
          secondary: '#172026',
          accent: '#E7A18C',
          neutral: '#111820',
          'base-100': '#101820',
          info: '#66B8CA',
          success: '#53C28E',
          warning: '#E0A827',
          error: '#EF6A64',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
