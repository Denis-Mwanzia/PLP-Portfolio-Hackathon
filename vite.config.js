import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	esbuild: {
		jsx: 'automatic',
		// Treat .js files in src as JSX to support JSX-in-.js files
		loader: 'jsx',
		include: /src\/.*\.[jt]sx?$/,
		exclude: []
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json']
	},
	optimizeDeps: {
		esbuildOptions: {
			loader: {
				'.js': 'jsx',
				'.jsx': 'jsx'
			}
		}
	},
	server: {
		port: 3000,
		open: false
	},
	preview: {
		port: 4173,
		open: false
	}
});

