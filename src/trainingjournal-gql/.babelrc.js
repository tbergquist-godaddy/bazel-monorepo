// @flow

module.exports = {
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        extensions: ['.js', '.json'],
        alias: {
          '@tj-gql/infrastructure': './src/trainingjournal-gql/src/infrastructure',
          '@tj-gql/application': './src/trainingjournal-gql/src/application',
          '@tj-gql/domain': './src/trainingjournal-gql/src/domain',
        },
      },
    ],
  ],
};
