import { defineConfig } from "rollup"
import { terser } from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'

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
        vue({
            css: true,
            compileTemplate: true,
            template: {
                // optimizeSSR: true,
            }
        }),
        terser()
    ]
})