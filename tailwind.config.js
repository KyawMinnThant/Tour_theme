/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      
      backgroundImage: {
        'africa' : "url('https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/shutterstock_120562819-600x600.jpg')",
        'america' : "url('https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/Fotolia_16069076_Subscription_Monthly_XXL-600x600.jpg')",
        'asia': "url('https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_147744218-600x600.jpg')",
        'eastern' : "url('https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2017/01/photodune-488847-venice-m-600x600.jpg')",
        'europe': "url('https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_255194035-600x600.jpg')",
        'south': "url('https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_124333858-600x600.jpg')"
      },
      
    },
  },
  plugins: [],
};
