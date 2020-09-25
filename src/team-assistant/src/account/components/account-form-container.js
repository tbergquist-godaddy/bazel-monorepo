// @flow strict-local

import * as React from 'react';
import { create } from '@adeira/sx';

type Props = {
  +children: React.Node,
};

export default function AccountFormContainer({ children }: Props): React.Node {
  return <div className={styles('container')}>{children}</div>;
}

const styles = create({
  container: {
    maxWidth: '400px',
    margin: 'auto',
  },
});
