/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "light-bg": "hsl(0, 0%, 98%)",
        "light-card": "hsl(0, 0%, 100%)",
        "light-input": "hsl(0, 0%, 52%)",
        "light-text": "hsl(200, 15%, 8%)",
        //
        "dark-bg": "hsl(207, 26%, 17%)",
        "dark-card": "hsl(209, 23%, 22%)",
        "dark-text": "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
