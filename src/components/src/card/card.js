// @flow

import type { Node } from 'react';

import styles from './card.module.css';

type Props = {
  +children: Node,
  +className?: string,
};

export default function Card({ children, className }: Props): Node {
  return <div className={[styles.card, className].filter(Boolean).join(' ')}>{children}</div>;
}
