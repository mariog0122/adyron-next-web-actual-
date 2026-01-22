import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                portafolio: resolve(__dirname, 'portafolio.html'),
                servicios: resolve(__dirname, 'servicios.html'),
                planes: resolve(__dirname, 'planes.html'),
                nosotros: resolve(__dirname, 'nosotros.html'),
                blog: resolve(__dirname, 'blog.html'),
            },
        },
    },
});
