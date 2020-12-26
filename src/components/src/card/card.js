// @flow

import type { Node } from 'react';
import { create } from '@adeira/sx';

type Props = {
  +children: Node,
  +className?: string,
};

export default function Card({ children, className }: Props): Node {
  return <div className={[styles('card'), className].filter(Boolean).join(' ')}>{children}</div>;
}

const styles = create({
  card: {
    borderRadius: 'var(--border-radius-large)',
    boxShadow: '0 0.5rem 1rem rgba(0,0,0, 0.2)',
    padding: 'var(--space-normal)',
  },
});
