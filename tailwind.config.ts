import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D434FE",
        secondary: "#903AFF",
        dark: "#150E28",
        pink1: "#FF26B9",
        darker: "#100B20"
      }
    },
  },
  plugins: [],
}
export default config
