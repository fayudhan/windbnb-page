module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        esm: "360px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans"],
        montserrat: ["Montserrat", "sans"],
        mulish: ["Mulish", "sans"],
      },
      fontSize: {
        xsAlt: "0.625rem", // Tambahkan ukuran font alternatif untuk breakpoint xs
      },
    },
  },
  plugins: [],
};
