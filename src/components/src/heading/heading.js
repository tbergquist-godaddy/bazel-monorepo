// @flow

import type { Node } from 'react';
import classNames from 'classnames';

import styles from './heading.module.css';
import textAlignStyles from '../utilities/text-align.module.css';

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
      className={classNames(styles.heading, styles[`heading--${as}`], {
        [`${textAlignStyles['u-text-align-center']}`]: align === 'center',
      })}
    >
      {children}
    </Component>
  );
}
