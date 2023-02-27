module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      spacing: {
        '128': '36rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#000",

          "primary-100": "#B217DB",
          
          "secondary": "#7A29FF",
                   
          "accent": "#FFFFFF",
                   
          "neutral": "#282828",

          "base-100": "5E16EB",
                   
          "info": "#FB3779",
                   
          "success": "#FB3779",
                   
          "warning": "#FB3779",
                   
          "error": "#FFFFFF",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
