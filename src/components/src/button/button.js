// @flow

import type { Node, ComponentType } from 'react';
import { create } from '@adeira/sx';

import Spinner from '../spinner/spinner';

type Props = {
  +'children': Node,
  +'variant'?: 'primary' | 'secondary' | 'white' | 'danger',
  +'type'?: 'button' | 'submit',
  +'onClick'?: () => void,
  +'isLoading'?: boolean,
  +'size'?: 'small' | 'normal',
  +'aria-label'?: string,
  +'as'?: ComponentType<any> | string,
};

export default function Button({
  children,
  variant = 'primary',
  type = 'button',
  size = 'normal',
  isLoading,
  as = 'button',
  ...rest
}: Props): Node {
  const Component = as;
  return (
    <Component
      disabled={isLoading}
      type={type}
      className={styles('button', variant, size)}
      {...rest}
    >
      {isLoading === true ? <Spinner size="small" color="white" /> : children}
    </Component>
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
    'transition': 'transform var(--transition-duration-normal)',
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
    fontSize: '1.4rem',
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
  danger: {
    'backgroundColor': 'var(--color-error)',
    ':focus': {
      boxShadow: 'var(--color-error-focus) 0px 0px 0px 0.2rem',
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
