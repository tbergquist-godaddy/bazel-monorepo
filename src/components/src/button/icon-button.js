// @flow

import { type Node, type Element, cloneElement, type ComponentType } from 'react';
import { create } from '@adeira/sx';

// TODO: Allow more types and sizes
type Props = {
  +'children': Element<any>,
  +'onClick'?: () => void,
  +'aria-label': string,
  +'size'?: 'normal' | 'large' | 'small',
  +'as'?: ComponentType<any> | 'string',
  +'to'?: string,
  +'variant'?: 'primary' | 'danger',
};

export default function IconButton({
  children,
  size = 'normal',
  as = 'button',
  variant = 'primary',
  ...rest
}: Props): Node {
  const Component = as;
  return (
    <Component
      {...rest}
      type={as === 'button' ? 'button' : null}
      className={styles('button', variant, size)}
    >
      {cloneElement(children, { className: styles('icon') })}
    </Component>
  );
}

const styles = create({
  button: {
    'position': 'relative',
    'color': 'var(--color-white)',
    'border': 'none',
    'borderRadius': '50%',
    'outline': 'none',
    'fontFamily': 'inherit',
    'transition': 'transform var(--transition-duration-normal)',
    'cursor': 'pointer',
    ':hover': {
      transform: 'translateY(-3px)',
    },
    ':active:hover': {
      transform: 'translateY(-1px)',
    },
  },
  primary: {
    'backgroundColor': 'var(--color-primary)',
    ':focus': {
      boxShadow: 'var(--color-primary-focus) 0px 0px 0px 0.2rem',
    },
  },
  danger: {
    'backgroundColor': 'var(--color-error)',
    ':focus': {
      boxShadow: 'var(--color-error-focus) 0px 0px 0px 0.2rem',
    },
  },
  small: {
    fontSize: '1.5rem',
    height: '3rem',
    width: '3rem',
  },
  normal: {
    fontSize: '2rem',
    height: '4rem',
    width: '4rem',
  },
  large: {
    fontSize: '3rem',
    height: '6rem',
    width: '6rem',
  },
  icon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
});
