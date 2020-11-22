// @flow

const path = require('path');
const testBC = require('@adeira/graphql-bc-checker').default;

require('@babel/register');
const schema = require('../src/Schema').default;

const allowBreakingChanges = process.argv.includes('--allow-bc');

testBC({
  allowBreakingChanges,
  snapshotLocation: path.join(__dirname, '..', 'schema.graphql'),
  schema,
});
