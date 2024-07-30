// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     darkMode: 'class', // Use 'class' strategy for dark mode
//     content: [
//       './app/**/*.{js,ts,jsx,tsx}',
//       './(auth)/**/*.{js,ts,jsx,tsx}',
//       './components/**/*.{js,ts,jsx,tsx}',
//       './src/**/*.{js,jsx,ts,tsx}',
//       './pages/**/*.{js,jsx,ts,tsx}',
//     ],
//     theme: {
//       extend: {
//         colors: {
//           // Light mode colors
//           primary: {
//             50: "#FFF",
//             100: "#FFB575",
//             200: "#FFD0A0",
//             300: "#ff914d",
//             400: "#E67643",
//             500: "#C95919",
//           },
//           secondary: {
//             50: "#FFFFFF",
//             100: "#29456E",
//             200: "#537FA1",
//             300: "#00163d",
//             400: "#000E27",
//             500: "#00061A",
//           },
//           neutral: {
//             100: '#f5f5f5',
//             200: '#FFF',
//             300: '#e6e2d4',
//           },
//           accent: {
//             100: '#16704c',
//             200: '#5f3131',
//             300: '#ef546b',
//             400: "#d9cd9c",
//             500: "#e6e2d4",
//             gradient: "linear-gradient(to right, #F5F5F5, #E35134, #FF914D, #BE2C1B, #6F0A0D)",
//           },
//           gray: {
//             100: '#FBFBFB',
//             200: '#EAEAEA',
//             300: '#DFDFDF',
//             400: '#999999',
//             500: '#7F7F7F',
//             600: '#666666',
//             700: '#4C4C4C',
//             800: '#333333',
//             900: '#191919',
//           },
//           purple: {
//             50: "#FFA665",
//             100: "#FFB97E",
//             200: "#FFCD96",
//             300: "#FFE1AF",
//             400: "#FFF5C7",
//             500: "#ff914d",
//             600: '#E97D46',
//             700: '#D5633E',
//             800: '#C14936',
//             900: '#A82F2E',
//           },
//           blue: {
//             100: '#E6F0FD',
//             200: '#CCE2FC',
//             300: '#99C5FA',
//             400: '#66A9F7',
//             500: '#338CF5',
//             600: '#0070F4',
//             700: '#0064DA',
//             800: '#0059C2',
//             900: '#004391',
//           },
//           teal: {
//             100: '#E6FFFA',
//             200: '#B2F5EA',
//             300: '#81E6D9',
//             400: '#4FD1C5',
//             500: '#3ABAB4',
//             600: '#319795',
//             700: '#2C7A7B',
//             800: '#285E61',
//             900: '#234E52',
//           },
//           // Dark mode colors
//           dark: {
//             background: 'black',  
//             surface: '#481E14',     // Card and surface color
//             primary: '#F2613F',     // Primary text color
//             secondary: '#9B3922',   // Secondary text color
//             textPrimary: '#E0E0E0', // Primary text color
//             textSecondary: '#B0B0B0', // Secondary text color
//             border: '#272727',      // Border color
//             error: '#CF6679',       // Error color
//           },
//         },
//         boxShadow: {
//           xs: '0 0 0 1px rgba(0, 0, 0, 0.16)',
//           sm: '0 1px 2px 0 rgba(0, 0, 0, 0.16)',
//           default: '0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
//           md: '0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
//           lg: '0 10px 15px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
//           xl: '0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
//           '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
//           inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)',
//           outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
//           none: 'none',
//         },
//         spacing: {
//           '9/16': '56.25%',
//           '3/4': '75%',
//           '1/1': '100%',
//         },
//         fontFamily: {
//           inter: ['var(--font-inter)', 'sans-serif'],
//           'architects-daughter': ['var(--font-architects-daughter)', 'sans-serif'],
//           pencil: ['Pencil', 'sans-serif'],
//         },
//         fontSize: {
//           xs: '0.75rem',
//           sm: '0.875rem',
//           base: '1rem',
//           lg: '1.125rem',
//           xl: '1.25rem',
//           '2xl': '1.5rem',
//           '3xl': '2rem',
//           '4xl': '2.625rem',
//           '5xl': '3.25rem',
//           '6xl': '5.5rem',
//           '5.5xl': '4.6rem',
//         },
//         inset: {
//           '1/2': '50%',
//           'full': '100%',
//         },
//         letterSpacing: {
//           tighter: '-0.02em',
//           tight: '-0.01em',
//           normal: '0',
//           wide: '0.01em',
//           wider: '0.02em',
//           widest: '0.4em',
//         },
//         lineHeight: {
//           none: '1',
//           tighter: '1.125',
//           tight: '1.25',
//           snug: '1.375',
//           normal: '1.5',
//           relaxed: '1.625',
//           loose: '2',
//           '3': '.75rem',
//           '4': '1rem',
//           '5': '1.2rem',
//           '6': '1.5rem',
//           '7': '1.75rem',
//           '8': '2rem',
//           '9': '2.25rem',
//           '10': '2.5rem',
//         },
//         minWidth: {
//           '10': '2.5rem',
//           '48': '12rem',
//         },
//         opacity: {
//           '90': '0.9',
//         },
//         scale: {
//           '98': '.98',
//           '101': '1.01'
//         },
//         animation: {
//           float: 'float 3s ease-in-out infinite',
//           marquee: 'marquee 25s linear infinite',
//           marquee2: 'marquee2 25s linear infinite ',
//         },
//         keyframes: {
//           float: {
//             '0%, 100%': { transform: 'translateY(0)', },
//             '50%': { transform: 'translateY(-5%)', },
//           },
//           marquee: {
//             '0%': { transform: 'translateX(0%)' },
//             '100%': { transform: 'translateX(-100%)' },
//           },
//           marquee2: {
//             '0%': { transform: 'translateX(0%)' },
//             '100%': { transform: 'translateX(-90%)' },
//           },
//         },
//         zIndex: {
//           '-1': '-1',
//           '99999': '99999'
//         },
//         variants: {
//           width: ["responsive", "hover", "focus"]
//         },
//       },
//     },
//     plugins: [
//       require('@tailwindcss/forms'),
//     ],
//   };
  

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Use 'class' strategy for dark mode
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './(auth)/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        primary: {
          50: "#FFF",
          100: "#FFB575",
          200: "#FFD0A0",
          300: "#ff914d",
          400: "#E67643",
          500: "#C95919",
        },
        secondary: {
          50: "#FFFFFF",
          100: "#29456E",
          200: "#537FA1",
          300: "#00163d",
          400: "#000E27",
          500: "#00061A",
        },
        neutral: {
          100: '#f5f5f5',
          200: '#FFF',
          300: '#e6e2d4',
        },
        accent: {
          100: '#16704c',
          200: '#5f3131',
          300: '#ef546b',
          400: "#d9cd9c",
          500: "#e6e2d4",
          gradient: "linear-gradient(to right, #F5F5F5, #E35134, #FF914D, #BE2C1B, #6F0A0D)",
        },
        gray: {
          100: '#FBFBFB',
          200: '#EAEAEA',
          300: '#DFDFDF',
          400: '#999999',
          500: '#7F7F7F',
          600: '#666666',
          700: '#4C4C4C',
          800: '#333333',
          900: '#191919',
        },
        purple: {
          50: "#FFA665",
          100: "#FFB97E",
          200: "#FFCD96",
          300: "#FFE1AF",
          400: "#FFF5C7",
          500: "#ff914d",
          600: '#E97D46',
          700: '#D5633E',
          800: '#C14936',
          900: '#A82F2E',
        },
        blue: {
          100: '#E6F0FD',
          200: '#CCE2FC',
          300: '#99C5FA',
          400: '#66A9F7',
          500: '#338CF5',
          600: '#0070F4',
          700: '#0064DA',
          800: '#0059C2',
          900: '#004391',
        },
        teal: {
          100: '#E6FFFA',
          200: '#B2F5EA',
          300: '#81E6D9',
          400: '#4FD1C5',
          500: '#3ABAB4',
          600: '#319795',
          700: '#2C7A7B',
          800: '#285E61',
          900: '#234E52',
        },
        light: {
          background: '#F5F5F5', // Light mode background color
        },
        // Dark mode colors
        dark: {
          background: 'black',  
          surface: '#481E14',     // Card and surface color
          primary: '#F2613F',     // Primary text color
          secondary: '#9B3922',   // Secondary text color
          textPrimary: '#E0E0E0', // Primary text color
          textSecondary: '#B0B0B0', // Secondary text color
          border: '#272727',      // Border color
          error: '#CF6679',       // Error color
        },
      },
      boxShadow: {
        xs: '0 0 0 1px rgba(0, 0, 0, 0.16)',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.16)',
        default: '0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        none: 'none',
        'navbar': '0 4px 6px rgba(0, 0, 0, 0.2)', // Custom shadow for navbar
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        'architects-daughter': ['var(--font-architects-daughter)', 'sans-serif'],
        pencil: ['Pencil', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.625rem',
        '5xl': '3.25rem',
        '6xl': '5.5rem',
        '5.5xl': '4.6rem',
      },
      inset: {
        '1/2': '50%',
        'full': '100%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      lineHeight: {
        none: '1',
        tighter: '1.125',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
        '3': '.75rem',
        '4': '1rem',
        '5': '1.2rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
      },
      minWidth: {
        '10': '2.5rem',
        '48': '12rem',
      },
      opacity: {
        '90': '0.9',
      },
      scale: {
        '98': '.98',
        '101': '1.01'
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite ',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)', },
          '50%': { transform: 'translateY(-5%)', },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-90%)' },
        },
      },
      zIndex: {
        '-1': '-1',
        '99999': '99999'
      },
      variants: {
        width: ["responsive", "hover", "focus"]
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
