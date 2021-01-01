// @flow

import { type Node, type Element, cloneElement, type ComponentType } from 'react';
import './button.css';

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
      className={`btn icon-btn btn--${variant} icon-btn--${size}`}
    >
      {cloneElement(children, { className: 'icon-btn__icon-container' })}
    </Component>
  );
}
