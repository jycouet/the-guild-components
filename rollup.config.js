import { join } from 'path';
import fs from 'fs';
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import autoExternal from 'rollup-plugin-auto-external';
import image from '@rollup/plugin-image';
import bundleSize from 'rollup-plugin-bundle-size';
import copy from 'rollup-plugin-copy';
import glob from 'glob';

const packageDirs = glob.sync('packages/*', {
  cwd: process.cwd(),
  absolute: false,
});

function bundle(packageDir) {
  const tsxFile = `${packageDir}/src/index.tsx`;
  const tsFile = `${packageDir}/src/index.ts`;
  const isTsx = fs.existsSync(join(__dirname, tsxFile));

  return {
    input: isTsx ? tsxFile : tsFile,
    output: [
      {
        file: join(__dirname, packageDir, 'dist/index.esm.js'),
        format: 'es',
        sourcemap: true,
      },
      {
        file: join(__dirname, packageDir, 'dist/index.js'),
        format: 'cjs',
        sourcemap: true,
      },
    ],
    external: ['react-player/lazy', 'algoliasearch/lite'],
    plugins: [
      nodeResolve({ extensions: ['.ts', '.tsx'] }),
      autoExternal({
        packagePath: join(packageDir, 'package.json'),
        builtins: true,
        dependencies: true,
        peerDependencies: true,
      }),
      babel({
        babelHelpers: 'bundled',
        extensions: ['.tsx', '.ts'],
        configFile: join(__dirname, '.babelrc'),
        // Fixes ReferenceError: React is not defined
        presets: [['@babel/preset-react', { runtime: 'automatic' }]],
      }),
      image(),
      copy({
        targets: [
          {
            src: `./dist/${packageDir}/src/*`,
            dest: `./${packageDir}/dist`,
          },
        ],
      }),
      bundleSize(),
    ],
  };
}

export default packageDirs.map(bundle);
