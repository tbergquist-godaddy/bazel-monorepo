// @flow strict-local

import type { Node } from 'react';
import { create } from '@adeira/sx';

type Props = {
  +children: Node,
};

export default function AccountFormContainer({ children }: Props): Node {
  return <div className={styles('container')}>{children}</div>;
}

const styles = create({
  container: {
    maxWidth: '400px',
    margin: 'auto',
  },
});
