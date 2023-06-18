import { sveltekit } from '@sveltejs/kit/vite';

import type { UserConfig } from 'vite';

const config: UserConfig = {
	server: {
    fs: {
      allow: ['src', 'node_modules', 'static']
    }
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
	plugins: [sveltekit()] // {force: true} )]
};

export default config;
