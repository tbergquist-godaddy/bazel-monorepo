// @flow strict-local

import type { Node } from 'react';

import styles from './alert.module.css';

type Props = {
  +children: Node,
  +type: 'success' | 'danger',
};

export default function Alert({ children, type = 'success' }: Props): Node {
  return (
    <div role="alert" className={`${styles.Alert} ${styles[`Alert--${type}`]}`}>
      {children}
    </div>
  );
}
