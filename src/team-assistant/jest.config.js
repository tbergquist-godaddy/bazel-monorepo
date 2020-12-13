// @flow

const path = require('path');

module.exports = {
  rootDir: __dirname,
  preset: '@tbergq/jest-preset',
  setupFiles: [(path.join(__dirname, 'scripts', 'setup-jest.js') /*: string  */)],
};
