
import babel   from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/index.module.js',
        format: 'es'
    },
    external: [
        'react', 'lodash-es'
    ],
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**'
        })
    ]
};