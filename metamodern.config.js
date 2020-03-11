import pkg from './package.json';
import colorSystem from '@metamodern/color-system'

const typefaces = Object.keys(pkg.dependencies).filter(
  (str) => str.startsWith('typeface-'),
);


const assets = typefaces.map((name) => [
  `node_modules/${name}/files`,
  'files',
]);


const postcss = {
  external: typefaces,
};


const designSystemConfig = {
  variants: {
    borderWidth: ['responsive'],
    borderRadius: ['responsive'],
    display: ['responsive'],
    fontSize: ['responsive'],
    lineHeight: ['responsive'],
    margin: ['responsive'],
    padding: ['responsive'],
    width: ['responsive'],
  },
};


const metamodernConfig = {
  assets,
  designSystemConfig,
  postcss,
};


export default metamodernConfig;
