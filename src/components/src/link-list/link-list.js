// @flow

import type { Node } from 'react';

import styles from './link-list.module.css';

type ItemType = { +id: string | number, ... };
type Props<T> = {
  +items: $ReadOnlyArray<T>,
  +renderItem: (className: string, item: T) => Node,
};

export default function LinkList<T: ItemType>({ items, renderItem }: Props<T>): Node {
  return (
    <ul className={styles.LinkList}>
      {items.map((item) => (
        <li className={styles['LinkList__list-item']} key={item.id}>
          {renderItem(styles.LinkList__link, item)}
        </li>
      ))}
    </ul>
  );
}
