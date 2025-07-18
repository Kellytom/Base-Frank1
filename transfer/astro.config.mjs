// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [react()],
	output: 'static',
	// Use base path only for production builds, not local dev
	site: process.env.NODE_ENV === 'production' ? 'https://kellytom.github.io/Base-Frank1/' : 'http://localhost:4321',
	base: process.env.NODE_ENV === 'production' ? '/Base-Frank1/' : undefined,
	build: {
		assets: 'assets'
	}
});
