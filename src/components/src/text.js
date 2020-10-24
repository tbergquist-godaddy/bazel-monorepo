// @flow strict-local

import type { Node } from 'react';
import { create } from '@adeira/sx';

type Props = {
  +children: Node,
  +type?: 'primary' | 'white',
  +as?: 'p' | 'div' | 'span',
};

export default function Text({ children, type = 'primary', as = 'span' }: Props): Node {
  const Component = as;
  return <Component className={styles(type)}>{children}</Component>;
}

const styles = create({
  primary: {
    color: 'var(--color-text-black)',
  },
  white: {
    color: 'var(--color-white)',
  },
});
