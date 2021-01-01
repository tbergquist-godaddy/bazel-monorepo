// @flow strict-local

import type { Node } from 'react';

import Spin from './spinner.svg';
import './spinner.css';

type Props = {
  +size?: 'small' | 'normal' | 'large',
  +color?: 'primary' | 'white',
};

export default function Spinner({ size = 'normal', color = 'primary' }: Props): Node {
  return <Spin data-testid="spinner" className={`spinner spinner--${color} spinner--${size}`} />;
}
