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
          "primary": "#D237FB",

          "primary-100": "#B217DB",
          
          "secondary": "#5E16EB",
                   
          "accent": "#FFFFFF",
                   
          "neutral": "#333333",

          "base-100": "5E16EB",
                   
          "info": "#FB3779",
                   
          "success": "#FB3779",
                   
          "warning": "#FB3779",
                   
          "error": "#FB3779",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
