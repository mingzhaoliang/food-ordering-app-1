import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        cursive: ["cursive"],
        portLligatSans: ["var(--font-portLligatSans)", "sans-serif"],
        lato: ["var(--font-lato)", "sans-serif"],
      },
      keyframes: {
        "bounce-light": {
          " 0%, 100%": {
            transform: "translateY(-10%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          }
        }
      },
      animation: {
        "bounce-light": "bounce-light 1s infinite",
      },
      gridTemplateColumns: {
        "auto-fit": "minmax(auto, 0.8fr) 1fr",
      },
    },
  },
  plugins: [],
};
export default config;
