// @flow strict-local

import type { Node } from 'react';

import './alert.css';

type Props = {
  +children: Node,
  +type: 'success' | 'danger',
};

export default function Alert({ children, type = 'success' }: Props): Node {
  return (
    <div role="alert" className={`Alert Alert--${type}`}>
      {children}
    </div>
  );
}
