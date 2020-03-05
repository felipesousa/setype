import sourcemaps from 'rollup-plugin-sourcemaps';
import packageJson from './package.json';

export default {
  input: 'dist/index.js',
  output: [
    {
      file: packageJson.main,
      format: 'umd',
      name: packageJson.name,
      sourcemap: true,
    },
  ],
  plugins: [sourcemaps()],
};
