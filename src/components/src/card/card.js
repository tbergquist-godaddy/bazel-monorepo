// @flow

import type { Node } from 'react';
import { create } from '@adeira/sx';

type Props = {
  +children: Node,
};

export default function Card({ children }: Props): Node {
  return <div className={styles('card')}>{children}</div>;
}

const styles = create({
  card: {
    borderRadius: 'var(--border-radius-normal)',
    boxShadow: '0 0.5rem 1rem rgba(0,0,0, 0.2)',
    padding: 'var(--space-normal)',
  },
});
