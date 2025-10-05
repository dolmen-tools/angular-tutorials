// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    base: 'angular-tutorials',
    redirects: {
        '/**': 'https://tutorials.angular.courses',
    }
});
