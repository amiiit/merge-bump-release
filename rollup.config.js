import inlineCode from 'rollup-plugin-inline-code'
import typescript from '@rollup/plugin-typescript'

export default {
    plugins: [
        inlineCode(),
        typescript()
    ],
};
