// @flow

import type { Node } from 'react';
import classNames from 'classnames';

import Spin from './spinner.svg';
import styles from './spinner.module.css';

type Props = {
  +size?: 'small' | 'normal' | 'large',
  +color?: 'primary' | 'white',
};

export default function Spinner({ size = 'normal', color = 'primary' }: Props): Node {
  return (
    <Spin
      data-testid="spinner"
      className={classNames(
        styles.spinner,
        styles[`spinner--${color}`],
        styles[`spinner--${size}`],
      )}
    />
  );
}
