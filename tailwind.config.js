module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: "media", // or 'media' or 'class'
	theme: {
		fontFamily: {
			nunito: ["nunito", "sans-serif"]
		},
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
