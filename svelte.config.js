import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

// was "@sveltejs/adapter-auto"

const dev = "production" === "development";

/** @type {import(""@sveltejs/kit").Config} */
const config = {
	preprocess: vitePreprocess(),
    kit: {
        adapter: adapter({
            pages: "docs",
            assets: "docs",
			fallback: 'index.html',
			strict: false,

        }),
		appDir: 'app',
        paths: {
            // change below to your repo name
            base: dev ? "" : "/mbti_chart",
        },
		// fallback: 'app.html'
        // hydrate the <div id="svelte"> element in src/app.html
        // target: "#svelte"
    }
};

export default config;
