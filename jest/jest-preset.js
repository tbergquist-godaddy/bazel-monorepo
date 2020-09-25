// @flow

const path = require('path');

module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  setupFilesAfterEnv: [(path.join(__dirname, 'setup-jest.js') /*: string  */)],
};
