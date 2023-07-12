/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				rubySweating:
					"url('./src/routes/HomePage/wallpapers/ruby_sweat.png')",
				aiSky: "url('./src/routes/HomePage/wallpapers/ai_sky.jpg')",
			},
		},
	},
	plugins: [],
}
