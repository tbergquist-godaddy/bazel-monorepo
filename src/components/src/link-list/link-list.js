// @flow

import type { Node } from 'react';

import './link-list.css';

type ItemType = { +id: string | number, ... };
type Props<T> = {
  +items: $ReadOnlyArray<T>,
  +renderItem: (className: string, item: T) => Node,
};

export default function LinkList<T: ItemType>({ items, renderItem }: Props<T>): Node {
  return (
    <ul className="LinkList">
      {items.map((item) => (
        <li className="LinkList__list-item" key={item.id}>
          {renderItem('LinkList__link', item)}
        </li>
      ))}
    </ul>
  );
}
