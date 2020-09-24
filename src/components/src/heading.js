// @flow

import * as React from 'react';
import { create } from '@adeira/sx';

type Props = {
  +level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  +children: React.Node,
};

export default function Heading({ level, children }: Props): React.Node {
  const Component = level;
  return <Component className={styles('heading')}>{children}</Component>;
}

const styles = create({
  heading: {
    color: 'var(--color-text-black)',
  },
});
