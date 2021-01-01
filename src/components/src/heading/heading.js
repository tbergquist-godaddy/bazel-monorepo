// @flow

import type { Node } from 'react';
import classNames from 'classnames';

import './heading.css';
import '../utilities/text-align.css';

type Levels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type Props = {
  +level: Levels,
  +as?: Levels,
  +children: Node,
  +align?: 'center',
};

export default function Heading({ level, children, align, as = level }: Props): Node {
  const Component = level;
  return (
    <Component
      className={classNames(`heading heading--${as}`, {
        'u-text-align-center': align === 'center',
      })}
    >
      {children}
    </Component>
  );
}
