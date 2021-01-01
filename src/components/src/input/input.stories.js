// @flow

import type { Node } from 'react';
import { action } from '@storybook/addon-actions';

import Input from './input';

export const Default = (): Node => <Input onChange={action('change')} name="test" label="test" />;
export const withValue = (): Node => (
  <Input value="test" onChange={action('change')} name="test" label="test" />
);

export const withError = (): Node => (
  <Input value="test" error="Required" onChange={action('change')} name="test" label="test" />
);

export default {
  component: Input,
  title: 'Input',
};
