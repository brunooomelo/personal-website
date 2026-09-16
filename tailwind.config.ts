import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Rampa única e 100% neutra (R=G=B). Antes eram 10 hexes soltos
      // misturados com `gray` (azulado) e `neutral`, o que deixava o preto e
      // branco sujo. Os contrastes sobre ink-950 estão comentados ao lado.
      colors: {
        ink: {
          50: "#FAFAFA", // texto primário      18.97:1
          300: "#A1A1A1", // texto secundário     7.66:1
          400: "#8F8F8F", // texto terciário      6.12:1
          500: "#4D4D4D", // bordas
          600: "#303030", // superfície em hover
          700: "#262626", // superfície (cards)
          800: "#212121", // superfície baixa (skeleton, destaque)
          900: "#161616", // superfície de código e campos
          950: "#0A0A0A", // fundo da página
        },
      },
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;
