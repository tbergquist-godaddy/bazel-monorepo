// @flow

const path = require('path');

module.exports = {
  rootDir: __dirname,
  preset: '@tbergq/jest-preset',
  setupFilesAfterEnv: [(path.join(__dirname, 'scripts', 'setup-jest.js') /*: string  */)],
  setupFiles: [(path.join(__dirname, 'scripts', 'set-env-vars.js') /*: string  */)],
  timers: 'fake',
};
