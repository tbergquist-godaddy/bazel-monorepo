// @flow

const OFF = 0;

module.exports = {
  root: true,

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
    'react/react-in-jsx-scope': OFF,
    'import/no-unresolved': OFF,
    'import/no-extraneous-dependencies': OFF,
    'flowtype/require-inexact-type': OFF,
  },
};
