// @flow

import type { Node } from 'react';
import './card.css';

type Props = {
  +children: Node,
  +className?: string,
};

export default function Card({ children, className }: Props): Node {
  return <div className={['card', className].filter(Boolean).join(' ')}>{children}</div>;
}
