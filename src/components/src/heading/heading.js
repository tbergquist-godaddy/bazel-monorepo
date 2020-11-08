// @flow

import type { Node } from 'react';
import { create } from '@adeira/sx';

type Levels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type Props = {
  +level: Levels,
  +as?: Levels,
  +children: Node,
};

export default function Heading({ level, children, as = level }: Props): Node {
  const Component = level;
  return <Component className={styles('heading', as)}>{children}</Component>;
}

const styles = create({
  heading: {
    color: 'var(--color-text-black)',
    fontWeight: '500',
  },
  h1: {
    fontSize: '6rem',
  },
  h2: {
    fontSize: '5rem',
  },
  h3: {
    fontSize: '4rem',
  },
  h4: {
    fontSize: '3rem',
  },
  h5: {
    fontSize: '2rem',
  },
  h6: {
    fontSize: '1.6rem',
  },
});
