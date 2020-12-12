// @flow

import type { Node } from 'react';

type Props = {
  +prepared: {
    +lol: string,
  },
};

export default function Home({ prepared }: Props): Node {
  return `welcome home ${JSON.stringify(prepared)}`;
}
