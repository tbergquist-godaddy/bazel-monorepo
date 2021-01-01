// @flow

import type { Node } from 'react';
import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';

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

export const white = (): Node => (
  <Button variant="white" onClick={action('click')}>
    White
  </Button>
);

const fullWidthOptions = {
  all: 'all',
  mediumMobile: 'mediumMobile',
};

export const fullWidth = (): Node => {
  return (
    <Button fullWidth={select('fullWidth', fullWidthOptions, 'all')} onClick={action('click')}>
      Full width
    </Button>
  );
};

export default {
  component: Button,
  title: 'Button',
};
