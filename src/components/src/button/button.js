// @flow

import type { Node } from 'react';
import { create } from '@adeira/sx';

import Spinner from '../spinner/spinner';

type Props = {
  +'children': Node,
  +'variant'?: 'primary' | 'secondary' | 'white',
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
    'fontSize': 'inherit',
    ':hover': {
      transform: 'translateY(-3px)',
    },
    ':active:hover': {
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
  white: {
    'backgroundColor': 'var(--color-white)',
    'color': 'var(--color-black)',
    'border': '1px solid var(--color-gray-light)',
    ':focus': {
      boxShadow: 'var(--color-gray-light-focus) 0px 0px 0px 0.2rem',
      border: 'none',
    },
  },
});
