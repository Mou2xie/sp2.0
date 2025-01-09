/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				blue: {
					main: '#65E3FF',
				},
				text: {
					strong: '#1D1D1D',
					main: '#464646',
					secondary: '#A0AEC0',
				},
				grey:{
					light:'#FAFAFA'
				}
			}
		},
	},
	plugins: [],
}
