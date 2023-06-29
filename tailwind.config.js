/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Darker Grotesque']
      },
      colors: {
        'heavy-metal': {
          '50': '#f5f5f5', 
          '100': '#ebeceb', 
          '200': '#cdcfcc', 
          '300': '#afb1ae', 
          '400': '#737771', 
          '500': '#373d34', 
          '600': '#32372f', 
          '700': '#292e27', 
          '800': '#21251f', 
          '900': '#1b1e19'
      }
      }
    },
  },
  plugins: [],
}
