// @flow

const path = require('path');

module.exports = {
  rootDir: __dirname,
  testEnvironment: 'node',
  setupFilesAfterEnv: [(path.join(__dirname, 'scripts', 'setup-jest.js') /*: string  */)],
  setupFiles: [(path.join(__dirname, 'scripts', 'setup-env-vars.js') /*: string  */)],
};
