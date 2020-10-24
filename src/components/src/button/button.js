// @flow

import type { Node } from 'react';
import { create } from '@adeira/sx';

import Spinner from '../spinner/spinner';

type Props = {
  +children: Node,
  +variant?: 'primary' | 'secondary',
  +type?: 'button' | 'submit',
  +onClick?: () => void,
  +isLoading?: boolean,
};

export default function Button({
  children,
  variant = 'primary',
  type = 'button',
  isLoading,
  ...rest
}: Props): Node {
  return (
    <>
      {/* eslint-disable-next-line react/button-has-type */}
      <button disabled={isLoading} type={type} className={styles('button', variant)} {...rest}>
        {isLoading === true ? <Spinner size="small" color="white" /> : children}
      </button>
    </>
  );
}

const styles = create({
  button: {
    'padding': 'var(--space-small) var(--space-large)',
    'color': 'var(--color-white)',
    'border': 'none',
    'borderRadius': 'var(--border-radius-normal)',
    'outline': 'none',
    'fontWeight': 500,
    ':focus': {
      boxShadow: 'var(--color-primary-focus) 0px 0px 0px 0.2rem',
    },
  },
  primary: {
    backgroundColor: 'var(--color-primary)',
  },
  secondary: {
    backgroundColor: 'var(--color-secondary)',
  },
});
