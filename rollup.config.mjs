import { defineConfig } from "rollup"
import terser from '@rollup/plugin-terser'
import vue from '@vitejs/plugin-vue'
import styles from 'rollup-plugin-styles'

export default defineConfig({
    input: { 'vue-drag-resize': "./src/index.js"},
    output: [
        {
            dir: 'dist',
            format: 'cjs',
            sourcemap: true,
            entryFileNames: '[name].cjs'
        },
        {
            dir: 'dist',
            format: 'esm',
            sourcemap: true
        },
    ]
    ,
    plugins: [
        vue(),
        styles({mode:"inject"}),
        terser()
    ]
})