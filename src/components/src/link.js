// @flow strict-local

import * as React from 'react';

type Props = {
  +children: React.Node,
  +href: string,
};

export default function Link({ children, ...rest }: Props): React.Node {
  return <a {...rest}>{children}</a>;
}
