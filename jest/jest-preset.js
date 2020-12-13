// @flow

const path = require('path');

const TESTS_GLOB = '__tests__/**/?(*.)+(spec|test).js';
global.__DEV__ = true;

module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  setupFilesAfterEnv: [(path.join(__dirname, 'setup-jest.js') /*: string  */)],
  testMatch: [`**/${TESTS_GLOB}`],
  moduleNameMapper: {
    '\\.(ttf|css)$': (path.join(__dirname, 'mocks', 'file-mock.js') /*: string  */),
    '\\.(svg)$': (path.join(__dirname, 'mocks', 'svg-mock.js') /*: string  */),
  },
};
