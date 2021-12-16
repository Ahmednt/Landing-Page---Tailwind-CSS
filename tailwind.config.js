module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
           "website-purple": "#5267DF",
         "website-red": "#FA59559",
         "website-blue": "#242A45",
         "website-gray": "#9194A2",
         "website-white": "#f7f7f7",
         "website-Cool-Gray":"#D1D5DB",
      }, 
 
    },
    fontFamily: {
      Poppins:["Poppins, sans-serif"],
    },
    container: {
      center : true,
      padding : "1rem",
      screens : {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },

    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
};
