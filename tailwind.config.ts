import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fadein": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "faderight": {
          "0%": {
            transform: "translateX(-30%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "fadeup": {
          "0%": {
            transform: "translateY(+30%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        "fadein-1.5s": "fadein 1.5s ease-out",
        "fadein": "fadein 1s ease-out",

        "faderight-1.5s": "faderight 1.5s ease-out",
        "faderight": "faderight 1s ease-out",

        "fadeup-3s": "fadeup 3s ease-out",
        "fadeup-2s": "fadeup 2s ease-out",
        "fadeup-1.5s": "fadeup 1.5s ease-out",
        "fadeup": "fadeup 1s ease-out",


      },
    },
  },
  plugins: [],
} satisfies Config;
