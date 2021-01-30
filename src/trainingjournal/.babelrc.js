// @flow

module.exports = {
  plugins: [
    'relay',
    ['babel-plugin-fbt', { extraOptions: { __self: true } }],
    'babel-plugin-fbt-runtime',
    [
      'babel-plugin-module-resolver',
      {
        extensions: ['.js', '.json'],
        alias: {
          '@tj/services': './src/trainingjournal/src/services',
          '@tj/program': './src/trainingjournal/src/program',
          '@tj/register': './src/trainingjournal/src/register',
          '@tj/test-utils': './src/trainingjournal/test-utils',
          '@tj/mocks': './src/trainingjournal/mocks',
        },
      },
    ],
  ],
};
