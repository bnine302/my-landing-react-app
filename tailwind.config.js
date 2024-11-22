/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			gray: {
  				'44': 'rgb(44, 44, 44)',
  				'51': 'rgb(51, 51, 51)',
  				'68': 'rgb(68, 68, 68)',
  				'102': 'rgb(102, 102, 102)',
  				'119': 'rgb(119, 119, 119)',
  				'122': 'rgb(122, 122, 122)',
  				'136': 'rgb(136, 136, 136)',
  				'204': 'rgb(204, 204, 204)',
  				'221': 'rgb(221, 221, 221)',
  				'237': 'rgb(237, 237, 237)',
  				'241': 'rgb(241, 241, 241)',
  				'250': 'rgb(250, 250, 250)'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		backgroundImage: {
  			intro1: 'url("/src/img/assets/intro1.jpeg")'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
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
          fontWeight: 300,
          // 주의: bg-gray-136으로 작성 불가
          color: '#888',
          // marginBottom: '100px',
          fontSize: '1.4em',
          lineHeight: '1.6em',
          '@media (max-width: 767px)': {
            // marginBottom: '50px',
            fontSize: '1em',
          },
        },

        '.my-icon-set': {
          display: 'flex',

          '@media (max-width: 767px)': {
            flexWrap: 'wrap',
            marginTop: '-40px',
          },
          '> div': {
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',

            '@media (max-width: 767px)': {
              flex: 'auto',
              width: '50%',
              marginTop: '40px',
            },

            '.icon': {
              width: '114px',
              height: '114px',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              marginBottom: '20px',

              '@media (max-width: 767px)': {
                width: '60px',
                height: '60px',
              },
            },
          },
        },
      })
    },
      require("tailwindcss-animate")
],
}
