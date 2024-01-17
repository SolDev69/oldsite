import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

const config = {
	kit: {
		// Tells sveltekit to produce static files to upload to github pages
		adapter: adapter({
			pages: "docs",
			assets: "docs",
			fallback: undefined,
			precompress: false,
			strict: true
		})
	},
	onwarn: (warning, handler) => {
		if (warning.code.startsWith('a11y-')) {
			return;
		}
		handler(warning);
	},
	preprocess: preprocess()
};

config.paths = { base: process.argv.includes("dev") ? "" : process.env.BASE_PATH };

export default config;
