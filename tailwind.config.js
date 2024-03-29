/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        },
        oscillate: {
          "100%": {
            transform: "translateX(0)"
          },
          "50%": {
            transform: "translateX(5px)"
          }
        },
     

      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
        typingOnce: "typing 1.5s steps(20)  alternate, blink .7s",
        oscillate: "oscillate 2s steps(20) infinite alternate, blink .7s infinite",
      }
    },
  },
  plugins: [function({addUtilities}){
    const newUtilities = {
      ".no-scroller::-webkit-scrollbar":{
        display:"none"
      },
      ".no-scroller":{
        "-ms-overflow-style":"none",
        "scrollbar-width":"none"
      }
    }
    addUtilities(newUtilities)
  }],
}
