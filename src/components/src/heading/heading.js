// @flow

import type { Node } from 'react';
import { create } from '@adeira/sx';

type Levels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type Props = {
  +level: Levels,
  +as?: Levels,
  +children: Node,
  +align?: 'center',
};

export default function Heading({ level, children, align, as = level }: Props): Node {
  const Component = level;
  return <Component className={styles('heading', as, align)}>{children}</Component>;
}

const styles = create({
  heading: {
    color: 'var(--color-text-black)',
    fontWeight: '500',
  },
  center: {
    textAlign: 'center',
  },
  h1: {
    fontSize: '4rem',
    margin: 'var(--space-x-large) 0',
  },
  h2: {
    fontSize: '3.5rem',
    margin: 'var(--space-x-large) 0',
  },
  h3: {
    fontSize: '3rem',
    margin: 'var(--space-large) 0',
  },
  h4: {
    fontSize: '2.5rem',
    margin: 'var(--space-medium) 0',
  },
  h5: {
    fontSize: '2rem',
    margin: 'var(--space-small) 0',
  },
  h6: {
    fontSize: '1.6rem',
    margin: 'var(--space-x-small) 0',
  },
});
