/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "300px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      lineHeight: {
        "extra-loose": "1.2",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },

      backgroundColor: {
        // about start
        "about-pair": "#e1e1e1",
        "about-bg-black": "#1f1f1f",
        //about end
      },

      backgroundImage: {
        // about start
        "about-main":
          "url('https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/themes/traveltour/images/page-title-background.jpg')",
      },
    },

    "about-par":
      "url('https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_74901229.jpg')",
    // about end

    //service start
    "service-middle":
      "url('https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/section-bg-3.jpg')",
    //service end

    // footer start
    africa:
      "url('https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/shutterstock_120562819-600x600.jpg')",
    america:
      "url('https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/Fotolia_16069076_Subscription_Monthly_XXL-600x600.jpg')",
    asia: "url('https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_147744218-600x600.jpg')",
    eastern:
      "url('https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/photodune-488847-venice-m-600x600.jpg')",
    europe:
      "url('https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_255194035-600x600.jpg')",
    south:
      "url('https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_124333858-600x600.jpg')",
    //footer end
  },
  fontFamily: {
    popp: ["Poppins, sans-serif"],
  },
  colors: {
    custom: "#8C8C8C",
    whyBookUsBg: "#f5f5f5",
  },

  plugins: [],
};
