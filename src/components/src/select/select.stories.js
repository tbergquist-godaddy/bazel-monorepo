// @flow

import { type Node } from 'react';

import Select from './select';

const options = [
  {
    label: 'Javascript',
    value: 'JS',
  },
  {
    label: 'C#',
    value: 'CS',
  },
];

export const Default = (): Node => (
  <Select label="Language" options={options} placeholder="--Select--" name="test" />
);

export const WithError = (): Node => (
  <Select
    error="Required"
    label="Language"
    options={options}
    placeholder="--Select--"
    name="test"
  />
);

export default {
  title: 'Select',
  component: Select,
};
