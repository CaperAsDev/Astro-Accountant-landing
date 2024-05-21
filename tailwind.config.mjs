import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				'Grotesk': ['Grotesk', ...defaultTheme.fontFamily.sans],
				'Roboto': ['Roboto', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				'light': "var(--light)",
				'dark' : "var(--dark)",
				'accent' : "var(--accent)",
				'gradient' : "var(--gradient-dark)"
			}
		},
	},
	plugins: [],
}
