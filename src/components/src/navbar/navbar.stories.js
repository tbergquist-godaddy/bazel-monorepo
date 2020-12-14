// @flow

import type { Node } from 'react';
import { action } from '@storybook/addon-actions';

import Navbar from './navbar';

const Link = ({ children }): Node => {
  const onClick = (e) => {
    e.preventDefault();
    action('click');
  };
  return (
    <a href="/" onClick={onClick}>
      {children}
    </a>
  );
};
export const Default = (): Node => <Navbar brand={<Link>Components</Link>} />;

export const withLinks = (): Node => (
  <Navbar
    left={<Link>test</Link>}
    right={<Link>right test </Link>}
    brand={<Link href="/">Components</Link>}
  />
);

export default {
  title: 'Navbar',
  components: Navbar,
};
