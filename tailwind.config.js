/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      lineHeight: {
        "extra-loose": "1.2",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        // about start
        "about-main":
          "url('https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/themes/traveltour/images/page-title-background.jpg')",
      }
    },
  },
  plugins: [],
};
