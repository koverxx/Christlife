/** @type {import('tailwindcss').Config} */
export default {
  content: ["*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "custom-image": "url('/Images/background.png')",
        "discover-image": "url('/Images/discover.png')",
        fontFamily: {
          urbanist: ["Urbanist", "sans-serif"],
        },
      }),
    },
  },
  plugins: [],
};
