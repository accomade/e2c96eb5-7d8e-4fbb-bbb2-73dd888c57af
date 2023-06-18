import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

import Accos from './src/lib/conf/accos.json' assert {type: 'json'};


/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.html'],

	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [ vitePreprocess() ],
	
	kit: {
		adapter: adapter(),
		prerender: {
			entries: [
				"*",
				"/",
				"/accomodations",
				"/imprint",
				"/terms",
				...Accos.map( (a) => a.path )
			]
		},
	}
};

export default config;
