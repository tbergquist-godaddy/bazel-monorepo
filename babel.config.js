// @flow

/*::
 
type ApiType = {|
  +assertVersion: number => void,
  +cache: {|
    forever: () => void,
  |},
  +caller: (Caller => boolean) => boolean,
|};

type Caller = {|
  +name: string,
|};
 
*/

function isWebpack(caller) /*: boolean %checks */ {
  // https://github.com/babel/babel-loader
  return !!(caller && caller.name === 'babel-loader');
}

function getTarget() {
  // console.log('hola', process.argv)
  const fileExtensionIndex = process.argv.findIndex(i => i === '--out-file-extension');
  if (fileExtensionIndex >= 0) {
    const fileExtension = process.argv[fileExtensionIndex + 1];
    switch (fileExtension) {
      case '.mjs':
        return 'js-esm';
      case '.js.flow':
        return 'flow';
      case '.js':
        return 'js'
      default:
        return null;
    }
  }
}

module.exports = function (api /*: ApiType */) /* :Object */ {
  api.assertVersion(7);
  api.cache(false);
  let target = getTarget();
  console.log('target', getTarget(), target)
  const presets = [
    ['@adeira/babel-preset-adeira', { target }],
  ];

  return {
    presets,
    babelrcRoots: ['.', './theme'],
  };
};
