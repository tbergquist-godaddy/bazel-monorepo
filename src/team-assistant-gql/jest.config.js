// @flow

const path = require('path');

module.exports = {
  rootDir: __dirname,
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  setupFilesAfterEnv: [(path.join(__dirname, 'scripts', 'setup-jest.js') /*: string  */)],
  testEnvironment: 'node',
};
