// @flow

const path = require('path');

module.exports = {
  rootDir: __dirname,
  moduleNameMapper: {
    '\\.(ttf|css)$': (path.join(__dirname, 'mocks', 'fileMock.js') /*: string  */),
    '\\.(svg)$': (path.join(__dirname, 'mocks', 'svgFileMock.js') /*: string  */),
  },
  setupFilesAfterEnv: [(path.join(__dirname, 'scripts', 'setupJest.js') /*: string  */)],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
