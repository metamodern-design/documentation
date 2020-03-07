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


const { lsh } = colorSystem();
const _lsh = lsh;

const bgPalette = new Map([
  ['lighter', _lsh(92)(25)],
  ['light', _lsh(87)(40)],
  ['medium-light', _lsh(77)(55)],
  ['soft', _lsh(67)(55)],
  ['softer', _lsh(62)(40)],
  ['bright', _lsh(62)(85)],
  ['medium', _lsh(47)(70)],
  ['medium-dark', _lsh(32)(40)],
  ['dark', _lsh(22)(25)],
  ['darker', _lsh(17)(25)],
]);


const designSystemConfig = {
  bgPalette,
  textPalette: bgPalette,
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
