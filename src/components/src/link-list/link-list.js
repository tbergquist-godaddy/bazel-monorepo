// @flow

import type { Node } from 'react';
import { create } from '@adeira/sx';

type ItemType = { +id: string | number, ... };
type Props<T> = {
  +items: $ReadOnlyArray<T>,
  +renderItem: (className: string, item: T) => Node,
};

export default function LinkList<T: ItemType>({ items, renderItem }: Props<T>): Node {
  return (
    <ul className={styles('list')}>
      {items.map((item) => (
        <li className={styles('listItem')} key={item.id}>
          {renderItem(styles('link'), item)}
        </li>
      ))}
    </ul>
  );
}

const styles = create({
  list: {
    listStyle: 'none',
  },
  listItem: {
    ':not(:last-of-type)': {
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'var(--color-gray-light)',
    },
  },
  link: {
    'transition': 'background-color var(--transition-duration-normal)',
    'outline': 'none',
    'textDecoration': 'none',
    ':hover': {
      backgroundColor: 'var(--color-gray-light)',
      textDecoration: 'none',
    },
    ':focus': {
      backgroundColor: 'var(--color-gray-light)',
      textDecoration: 'none',
    },
    'backgroundColor': 'var(--color-white)',
    'display': 'block',
    'padding': 'var(--space-large)',
  },
});
