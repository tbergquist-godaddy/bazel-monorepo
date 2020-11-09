// @flow

import type { Node } from 'react';
import { create } from '@adeira/sx';

import Spinner from '../spinner/spinner';

type Props = {
  +'children': Node,
  +'variant'?: 'primary' | 'secondary',
  +'type'?: 'button' | 'submit',
  +'onClick'?: () => void,
  +'isLoading'?: boolean,
  +'size'?: 'small' | 'normal',
  +'aria-label'?: string,
};

export default function Button({
  children,
  variant = 'primary',
  type = 'button',
  size = 'normal',
  isLoading,
  ...rest
}: Props): Node {
  return (
    <button
      disabled={isLoading}
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={styles('button', variant, size)}
      {...rest}
    >
      {isLoading === true ? <Spinner size="small" color="white" /> : children}
    </button>
  );
}

const styles = create({
  button: {
    'color': 'var(--color-white)',
    'border': 'none',
    'borderRadius': 'var(--border-radius-normal)',
    'outline': 'none',
    'fontWeight': 500,
    'fontFamily': 'inherit',
    'transition': 'transform .3s',
    'cursor': 'pointer',
    ':hover': {
      transform: 'translateY(-3px)',
    },
    ':active': {
      transform: 'translateY(-1px)',
    },
  },
  normal: {
    padding: 'var(--space-normal) var(--space-large)',
  },
  small: {
    padding: 'var(--space-small) var(--space-large)',
  },
  primary: {
    'backgroundColor': 'var(--color-primary)',
    ':focus': {
      boxShadow: 'var(--color-primary-focus) 0px 0px 0px 0.2rem',
    },
  },
  secondary: {
    'backgroundColor': 'var(--color-secondary)',
    ':focus': {
      boxShadow: 'var(--color-secondary-focus) 0px 0px 0px 0.2rem',
    },
  },
});
