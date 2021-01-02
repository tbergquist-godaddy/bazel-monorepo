// @flow

import type { Node } from 'react';
import classNames from 'classnames';

import './form-group.css';
import '../utilities/flex.css';

type Props = {
  +children: Node,
  +align?: 'right' | 'center',
};

export default function FormGroup({ children, align }: Props): Node {
  return (
    <div
      className={classNames('u-margin-bottom-small', {
        'u-display-flex': align != null,
        'u-justify-flex-end': align === 'right',
        'u-justify-center': align === 'center',
      })}
    >
      {children}
    </div>
  );
}
