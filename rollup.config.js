import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs'
import pkg from './package.json';

const name = pkg.name

export default {
	input: 'src/index.js',
	output: [
		{ file: pkg.module, 'format': 'es', name },
		{ file: pkg.main, 'format': 'umd', name }
	],
	plugins: [
		svelte({
			dev: true,
			hydratable: true,
			css: css => {
				css.write('dist/dist.css')
			},
		}),
		resolve(),
		commonjs()
	]
};