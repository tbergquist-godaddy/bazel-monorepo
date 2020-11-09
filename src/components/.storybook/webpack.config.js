// @flow

module.exports = ({ config } /* :Object */) /* :Object */ => {
  config.watchOptions = { poll: 1000 };

  // remove svg from existing rule
  config.module.rules = config.module.rules.map((rule) => {
    if (
      String(rule.test) ===
      String(/\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/)
    ) {
      return {
        ...rule,
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
      };
    }

    return rule;
  });

  config.module.rules.push({
    test: (/\.svg$/ /*: RegExp  */),
    use: ['@svgr/webpack'],
  });

  return config;
};
