import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
	server: {
		port: 3000,
		https: false,
		host: true,
		open: '/panel.html',
	},
	base: './',
	build: {
		minify: false,
		rollupOptions: {
			input: {
				panel: resolve(__dirname, 'panel.html'),
				config: resolve(__dirname, 'config.html'),
				live_config: resolve(__dirname, 'live_config.html')
			}
		}
	}
})
