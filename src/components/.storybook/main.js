// @flow

module.exports = {
  stories: ['../src/**/*.stories.[tj]s'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-a11y',
    '@storybook/addon-knobs',
  ],
  webpackFinal: (config /* :Object */) /* :Object */ => {
    config.watchOptions = { poll: 1000 };

    // remove svg from existing rule
    config.module.rules = config.module.rules.map((rule) => {
      if (String(rule.test).includes('svg')) {
        console.log('removed rule');
        return {
          ...rule,
          test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
        };
      }

      return rule;
    });

    config.module.rules.push(
      {
        test: (/\.(?:js)$/ /*: RegExp */),
        use: {
          loader: 'babel-loader',
          options: {
            sourceType: 'unambiguous',
          },
        },
      },
      {
        test: (/\.svg$/ /*: RegExp  */),
        use: ['@svgr/webpack'],
      },
    );

    return config;
  },
};
