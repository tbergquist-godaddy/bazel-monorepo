// @flow

module.exports = {
  plugins: [
    'relay',
    ['babel-plugin-fbt', { extraOptions: { __self: true } }],
    'babel-plugin-fbt-runtime',
    '@babel/plugin-syntax-dynamic-import',
  ],
};
