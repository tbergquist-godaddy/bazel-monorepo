// @flow

import { type Node } from 'react';
import { select } from '@storybook/addon-knobs';

import Alert from './alert';

const typeOptions = {
  success: 'success',
  danger: 'danger',
};
export const Default = (): Node => (
  <Alert type={select('type', typeOptions, 'success')}>test</Alert>
);

export default {
  title: 'Alert',
  component: Alert,
};
