import preprocess from 'svelte-preprocess';
import { resolve } from "path";
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		// hydrate the <div id="svelte"> element in src/app.html
		target: 'body',
		vite: {
			resolve: {
				alias: {
					$component: resolve('./src/component'),
					$model: resolve('./src/model'),
					$store: resolve('./src/store')
				}
			},
			server: {
				port: 3000
			}
		}
	}
};

export default config;
