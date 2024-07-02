/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "custom-image": "url('/Images/background.png')",
        "discover-bg": "url('/Images/discover.png')",
        fontFamily: {
          urbanist: ["Urbanist", "sans-serif"],
        },
      }),
    },
  },
  plugins: [],
};
