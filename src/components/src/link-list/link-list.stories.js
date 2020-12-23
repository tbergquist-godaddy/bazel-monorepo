// @flow

import { type Node } from 'react';

import LinkList from './link-list';

const items = [
  { id: 1, name: 'One' },
  { id: 2, name: 'Two' },
  { id: 3, name: 'Three' },
];

export const Default = (): Node => (
  <LinkList
    items={items}
    renderItem={(className, item) => (
      <a
        onClick={(e) => {
          e.preventDefault();
        }}
        href="/"
        className={className}
      >
        {item.name}
      </a>
    )}
  />
);

export default {
  title: 'Link List',
  component: LinkList,
};
