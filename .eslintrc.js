// @flow

const OFF = 0;
const ERROR = 2;

module.exports = {
  root: true,
  plugins: ['sx'],
  extends: ['@adeira/eslint-config/strict'],

  // adjust the rules as needed
  parser: 'babel-eslint',
  env: {
    jest: true,
    node: true,
    browser: true,
    es6: true,
  },
  rules: {
    'adeira/relay-import-no-values': OFF,
    'sx/no-unused-stylesheet': ERROR,
    'react/react-in-jsx-scope': OFF,
    'import/no-unresolved': OFF,
    'import/no-extraneous-dependencies': [
      ERROR,
      {
        devDependencies: [
          '**/*.test.js',
          '**/scripts/**/*.js',
          '**/mocks/**/*.js',
          '**/*.stories.js',
          'src/app1/webpack.config.js',
        ],
      },
    ],
    'flowtype/require-inexact-type': OFF,
    'adeira/only-nullable-fields': OFF,
  },
};
