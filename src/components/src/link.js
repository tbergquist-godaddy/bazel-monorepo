// @flow strict-local

import type { Node } from 'react';

type Props = {
  +children: Node,
  +href: string,
};

export default function Link({ children, ...rest }: Props): Node {
  return <a {...rest}>{children}</a>;
}
