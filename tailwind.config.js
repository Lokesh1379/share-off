const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandBlue: "#1da1f2",
        brandGray: "#657786",
      },
      backgroundImage: {
        loginImage: "url(/assets/images/cover.jpg)",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      width: {
        width: "50%",
      },
      fontSize: {
        xxs: "0.65rem",
      },
      fontFamily: {
        sans: ['"Proxima Nova"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
