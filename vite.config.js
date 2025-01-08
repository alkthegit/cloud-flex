import autoprefixer from 'autoprefixer';
import { defineConfig } from 'vite';

export default defineConfig({
    base: './',
    css: {
        postcss: {
            plugins: [
                autoprefixer()
            ]
        }
    }
})
