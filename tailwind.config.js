/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-chromatic-geometric)"],
        sansCompressed: ["var(--font-chromatic-compressed)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      translate: {
        "-1/2": "-50%",
      },
      bdr: {
        border: "1px solid #e2e8f0",
      },
      colors: {
        canary: "#FFE91F",
      },
    },
  },
  plugins: [],
};
