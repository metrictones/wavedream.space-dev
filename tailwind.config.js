/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		letterSpacing: {
			widest: '.1em'
		},
		extend: {}
	},
	plugins: [require('daisyui')],

	daisyui: {
		styled: true,
		themes: true,
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: '',
		darkTheme: 'night'
	}
};
