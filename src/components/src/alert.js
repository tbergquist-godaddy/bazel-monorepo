// @flow strict-local

import * as React from 'react';
import { create } from '@adeira/sx';

type Props = {
  +children: React.Node,
  +type: 'success' | 'danger',
};

export default function Alert({ children, type = 'success' }: Props): React.Node {
  return (
    <div role="alert" className={styles('alert', type)}>
      {children}
    </div>
  );
}

const styles = create({
  alert: {
    borderRadius: 'var(--border-radius-normal)',
    padding: 'var(--space-large)',
    color: 'var(--color-white)',
  },
  success: {
    backgroundColor: 'var(--color-primary)',
  },
  danger: {
    backgroundColor: 'var(--color-error)',
  },
});
