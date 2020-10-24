// @flow

module.exports = {
  stories: ['../src/**/*.stories.[tj]s'],
  addons: ['@storybook/addon-actions'],
  webpackFinal: (config /* :Object */) /* :Object */ => {
    config.module.rules.push({
      test: (/\.(?:js)$/ /*: RegExp */),
      use: {
        loader: 'babel-loader',
        options: {
          sourceType: 'unambiguous',
        },
      },
    });

    return config;
  },
};
