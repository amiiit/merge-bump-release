import inlineCode from 'rollup-plugin-inline-code'
import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    output: {
        file: 'dist/index.js',
    },
    plugins: [
        nodeResolve({
            exportConditions: 'node',
        }),
        inlineCode(),
        typescript(),
    ],
};
