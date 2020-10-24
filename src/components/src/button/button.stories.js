// @flow

import type { Node } from 'react';
import { action } from '@storybook/addon-actions';

import Button from './button';

export const primary = (): Node => <Button onClick={action('click')}>primary</Button>;

export const secondary = (): Node => (
  <Button variant="secondary" onClick={action('click')}>
    secondary
  </Button>
);

export const small = (): Node => (
  <Button size="small" onClick={action('click')}>
    small
  </Button>
);

export default {
  component: Button,
  title: 'Button',
};
