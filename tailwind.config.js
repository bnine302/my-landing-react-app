/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: ' rgb(0, 137, 248)',
        secondary: 'rgb(25, 89, 141)',
        gray: {
          // #2c2c2c
          44: 'rgb(44, 44, 44)',

          // #333
          51: 'rgb(51, 51, 51)',

          // #444
          68: 'rgb(68, 68, 68)',

          // #666
          102: 'rgb(102, 102, 102)',

          // #7a7a7a
          122: 'rgb(122, 122, 122)',

          // #888
          136: 'rgb(136, 136, 136)',

          // #ccc
          204: 'rgb(204, 204, 204)',

          // #ddd
          221: 'rgb(221, 221, 221)',

          // #ededed
          237: 'rgb(237, 237, 237)',

          // #f1f1f1
          241: 'rgb(241, 241, 241)',

          // #fafafa
          250: 'rgb(250, 250, 250)',
        },
      },
      backgroundImage: {
        intro1: "url('/src/img/assets/intro1.jpeg')",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.my-container': {
          width: '1200px',
          margin: '0 auto',
          '@media (max-width: 1199px)': {
            width: '100%',
            padding: '0 15px',
          },
        },

        '.my-section': {
          padding: '140px 0',
          '@media (max-width: 767px)': {
            padding: '70px 0',
          },
        },

        '.my-main-title': {
          fontSize: '3em',
          lineHeight: '1.4em',
          fontWeight: '700',
          '@media (max-width: 767px)': {
            fontSize: '1.6em',
          },
        },

        '.my-sub-title': {
          marginBottom: '100px',
          fontWeight: 300,
          // 주의: bg-gray-136으로 작성 불가
          color: '#888',
          lineHeight: '1.6em',
          '@media (max-width: 767px)': {
            marginBottom: '50px',
            fontSize: '1em',
          },
        },
      })
    },
  ],
}
