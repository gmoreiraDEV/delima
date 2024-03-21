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
      colors: {
        brand: {
          orange: "#EC7802",
          green: {
            100: "#DCF2F0",
            200: "#AFD3CF",
            300: "#6CBA8F",
            400: "#46AA8F",
            500: "#299D91",
            600: "#008A93",
            900: "#0D403A",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
