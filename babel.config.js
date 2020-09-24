// @flow strict

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
type BabelConfig = {|
  +presets: $ReadOnlyArray<string | [string, { ... }]>,
  +babelrcRoots: $ReadOnlyArray<string>,
|};
*/

function isWebpack(caller) /*: boolean %checks */ {
  // https://github.com/babel/babel-loader
  return !!(caller && caller.name === 'babel-loader');
}

function getTarget() {
  const extensionIndex = process.argv.findIndex((i) => i === '--out-file-extension');

  if (extensionIndex >= 0) {
    const extension = process.argv[extensionIndex + 1];
    switch (extension) {
      case '.mjs':
        return 'js-esm';
      case '.js.flow':
        return 'flow';
      default:
        break;
    }
  }
  return null;
}

module.exports = function (api /*: ApiType */) /*: BabelConfig */ {
  api.assertVersion(7);

  let target = getTarget();

  if (target == null) {
    target = api.caller(isWebpack) ? 'js-esm' : 'js';
  } else {
    api.cache.forever();
  }
  return {
    presets: [
      [
        '@adeira/babel-preset-adeira',
        {
          target,
        },
      ],
    ],
    babelrcRoots: [
      '.', // keep the root as a root
      './src/*', // also consider all packages and load their .babelrc files.
    ],
  };
};
