import resolvePlugin from '@rollup/plugin-node-resolve';
import typescriptPlugin from '@rollup/plugin-typescript';
import commonjsPlugin from '@rollup/plugin-commonjs';
import jsonPlugin from '@rollup/plugin-json';
import externalsPlugin from 'rollup-plugin-node-externals';
import copyPlugin from 'rollup-plugin-copy';
import babelPlugin from '@rollup/plugin-babel';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
    preserveModules: true,
  },
  plugins: [
    externalsPlugin({
      builtins: true,
      deps: true,
    }),
    resolvePlugin(),
    jsonPlugin(),
    typescriptPlugin({
      tsconfig: './tsconfig.json',
      module: 'es2015',
    }),
    babelPlugin({
      configFile: './babel.config.js',
      extensions: ['.js', '.ts'],
    }),
    commonjsPlugin({
      extensions: ['.js', '.ts'],
    }),
    copyPlugin({
      targets: [{ src: 'src/**/*.graphql', dest: './dist' }],
      flatten: false,
    }),
  ],
};
