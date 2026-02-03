import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
	base: '/portfolio',
	plugins: [react(), svgr()],
	server: {
		historyApiFallback: true, // Обеспечивает корректную обработку маршрутов
	},
	build: {
		outDir: 'dist',
	},
});
