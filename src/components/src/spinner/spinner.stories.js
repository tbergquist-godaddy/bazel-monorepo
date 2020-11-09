// @flow

import type { Node } from 'react';

import Spinner from './spinner';

export const Default = (): Node => <Spinner />;
export const White = (): Node => (
  <div style={{ backgroundColor: 'var(--color-primary)' }}>
    <Spinner color="white" />
  </div>
);

export const Small = (): Node => <Spinner size="small" />;
export const Large = (): Node => <Spinner size="large" />;

export default {
  component: Spinner,
  title: 'Spinner',
};
