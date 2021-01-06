// @flow

import type { Node } from 'react';
import classNames from 'classnames';

import flexStyles from '../utilities/flex.module.css';
import spacingStyles from '../utilities/spacing.module.css';
import displayStyles from '../utilities/display.module.css';

type Props = {
  +children: Node,
  +align?: 'right' | 'center',
};

export default function FormGroup({ children, align }: Props): Node {
  return (
    <div
      className={classNames(spacingStyles['u-margin-bottom-small'], {
        [`${displayStyles['u-display-flex']}`]: align != null,
        [`${flexStyles['u-justify-flex-end']}`]: align === 'right',
        [`${flexStyles['u-justify-center']}`]: align === 'center',
      })}
    >
      {children}
    </div>
  );
}
