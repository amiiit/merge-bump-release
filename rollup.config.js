import inlineCode from 'rollup-plugin-inline-code'
import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    plugins: [
        inlineCode(),
        typescript(),
        nodeResolve()
    ],
};
