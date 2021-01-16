// @flow

module.exports = {
  plugins: [
    ['babel-plugin-fbt', { extraOptions: { __self: true } }],
    'babel-plugin-fbt-runtime',
    [
      'babel-plugin-module-resolver',
      {
        // root: ['./src/trainingjournal'],
        extensions: ['.js', '.json'],
        alias: {
          '@tj/services': './src/trainingjournal/src/services',
        },
      },
    ],
  ],
};
