// @flow

import * as React from 'react';
import { create } from '@adeira/sx';

type Props = {
  brand: string,
};

export default function Navbar({ brand }: Props): React.Node {
  return (
    <header className={styles('header')}>
      <nav>
        <a className={styles('navLink')} href="/">
          {brand}
        </a>
      </nav>
    </header>
  );
}

const styles = create({
  header: {
    position: 'sticky',
    top: 0,
    backgroundColor: 'var(--color-primary)',
    color: 'var(--color-white)',
    padding: 'var(--space-normal)',
  },
  navLink: {
    color: 'var(--color-white)',
    textDecoration: 'none',
  },
});
