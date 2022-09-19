import { defineConfig, resolveBaseUrl } from 'vite'
//import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue()
    ],
    /* build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                fsas: resolve(__dirname, 'src/project.html')
            }
        }
    } */
})