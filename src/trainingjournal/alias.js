// @flow

const path = require('path');

const aliases /* :Object */ = {
  '@tj/services': path.join(__dirname, 'src', 'services'),
  '@tj/program': path.join(__dirname, 'src', 'program'),
  '@tj/register': path.join(__dirname, 'src', 'register'),
  '@tj/test-utils': path.join(__dirname, 'test-utils'),
};

module.exports = aliases;
