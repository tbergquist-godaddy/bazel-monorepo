// @flow

const path = require('path');

const TESTS_GLOB = '__tests__/**/?(*.)+(spec|test).js';

module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  setupFilesAfterEnv: [(path.join(__dirname, 'setup-jest.js') /*: string  */)],
  testMatch: [`**/${TESTS_GLOB}`],
};
