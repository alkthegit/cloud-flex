import autoprefixer from 'autoprefixer';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars'
import path from 'node:path';

export default defineConfig({
    base: './',
    css: {
        postcss: {
            plugins: [
                autoprefixer()
            ]
        }
    },
    plugins: [
        handlebars({
            partialDirectory: path.resolve('src/templates')
        })
    ]
})
