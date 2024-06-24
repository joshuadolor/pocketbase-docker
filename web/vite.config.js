import { fileURLToPath, URL, } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader';

export default defineConfig({
    server: {
        host: true,
        port: 3000,
    },
    preview: {
        host: true,
        port: 3000,
    },
    plugins: [
        vue(),
        svgLoader()
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    }
})
