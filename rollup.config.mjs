import { DEFAULT_EXTENSIONS } from '@babel/core';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import typescriptEngine from 'typescript';


const config = {
  input: './src/index.ts',
  output: [
    {
      file: process.env.npm_package_main,
      format: 'cjs',
      exports: 'named',
      sourcemap: false,
    },
    {
      file: process.env.npm_package_module,
      format: 'es',
      exports: 'named',
      sourcemap: false,
    },
  ],
  plugins: [
    postcss({
      plugins: [],
      minimize: true,
    }),
    external({
      includeDependencies: true,
    }),
    typescript({
      tsconfig: './tsconfig.json',
      typescript: typescriptEngine,
      sourceMap: false,
    }),
    commonjs(),
    babel({
      extensions: [...DEFAULT_EXTENSIONS, '.ts', 'tsx'],
      babelHelpers: 'runtime',
      exclude: /node_modules/,
    }),
    url(),
    resolve(),
    terser(),
  ],
  watch: {
    clearScreen: false,
  },
};

export default config;
