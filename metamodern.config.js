import designSystem from '@metamodern/design-system';
import pkg from './package.json';


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


const tailwindConfig = {
  separator: '_',
  ...designSystem({
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
  }),
};


const metamodernConfig = {
  assets,
  designSystemConfig,
  postcss,
};


export default metamodernConfig;
