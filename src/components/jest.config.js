// @flow

const path = require('path');

module.exports = {
  rootDir: __dirname,
  preset: '@tbergq/jest-preset',
  moduleNameMapper: {
    '\\.(svg)$': (path.join(__dirname, 'mocks', 'svgFileMock.js') /*: string  */),
    '\\.(css)$': (path.join(__dirname, 'mocks', 'css-file-mock.js') /*: string  */),
  },
};
