// @flow

import { type Node } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';

export default function Devtools(): Node {
  return <ReactQueryDevtools />;
}
