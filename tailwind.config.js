/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'electric-blue': {
					default: '#0A3196'
				}
			}
		},
		fontFamily: {
			damion: ['Damion', 'cursive'],
			inter: ['Inter', 'sans-serif']
		}
	},
	plugins: []
};
