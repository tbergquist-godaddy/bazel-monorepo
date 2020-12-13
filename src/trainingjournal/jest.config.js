// @flow

const path = require('path');

module.exports = {
  rootDir: __dirname,
  preset: '@tbergq/jest-preset',
  moduleNameMapper: {
    '\\.(ttf|css)$': (path.join(__dirname, 'mocks', 'fileMock.js') /*: string  */),
    '\\.(svg)$': (path.join(__dirname, 'mocks', 'svgFileMock.js') /*: string  */),
  },
  setupFilesAfterEnv: [(path.join(__dirname, 'scripts', 'setup-jest.js') /*: string  */)],
  setupFiles: [(path.join(__dirname, 'scripts', 'set-env-vars.js') /*: string  */)],
};
