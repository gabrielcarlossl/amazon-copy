module.exports = {
  
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
  
        'clg': '1090px',   
  
        'cxl': '1159px',      
  
        'c2xl': '1213px',
  
        'c3x1': '1373px',
        
        'c4x1': '1480px',
        
        'c5x1': '1579px',

        'c6x1': '1679px',

        'c7x1': '1740px',

        'c8x1': '1820px',
        
      },
      colors: {
        amazon_blue: {
          light: "#232F3E",
          DEFAULT: "#131921",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
