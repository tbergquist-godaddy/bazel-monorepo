// @flow

import type { Node, Element } from 'react';
import { create } from '@adeira/sx';

import './navbar.css';
import Box from '../box/box';

type Props = {
  +brand: Element<any>,
  +left?: Node,
  +right?: Node,
};

export default function Navbar({ brand, left, right }: Props): Node {
  return (
    <nav className={`Navbar ${styles('header')}`}>
      <Box flex={true} alignItems="center" justifyContent="space-between">
        <Box flex={true} alignItems="center">
          <div className={`Navbar__brand ${styles('brand')}`}>{brand}</div>
          <div>{left}</div>
        </Box>
        <div>{right}</div>
      </Box>
    </nav>
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
  brand: {
    fontSize: '1.8rem',
    marginRight: 'var(--space-large)',
  },
});
