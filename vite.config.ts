import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: fileURLToPath(
                new URL('./src/components/inputs/index.ts', import.meta.url)
            ),
            name: 'vee-validate-inputs',
            fileName: (format) => `vee-validate-inputs.${format}.js`,
        },
        rollupOptions: {
            external: ['vue', 'vee-validate'],
            output: {
                globals: {
                    vue: 'Vue',
                    'vee-validate': 'vee-validate',
                },
            },
        },
    },
});
