import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
			'2xl': { max: '1535px' },
			xl: { max: '1280px' },
			lg: { max: '1023px' },
			md: { max: '767px' },
			sm: { max: '600px' },
		},
    extend: {
      colors: {
        normal: '#333333',
        description: '#A9AAAB',
        alert: '#FF1B1B',
        price: '#487FFD',
			}
    },
  },
  plugins: [],
};
export default config;
