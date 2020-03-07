import pkg from './package.json';


const typefaces = Object.keys(pkg.dependencies).filter(
  (str) => str.startsWith('typeface-'),
);


const assets = typefaces.map((name) => [
  `node_modules/${name}/files`,
  'files',
]);


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


const postcss = {
  external: typefaces,
};


const bgPalette = new Map([
  ['lighter', _lsh(92)(25)],
  ['light', _lsh(87)(40)],
  ['medium-light', _lsh(77)(55)],
  ['softer', _lsh(67)(55)],
  ['bright', _lsh(62)(70)],
  ['soft', _lsh(52)(40)],
  ['medium', _lsh(47)(70)],
  ['medium-dark', _lsh(32)(40)],
  ['dark', _lsh(22)(25)],
  ['darker', _lsh(17)(25)],
]);


const metamodernConfig = {
  assets,
  designSystemConfig,
  postcss,
  bgPalette,
};


export default metamodernConfig;
