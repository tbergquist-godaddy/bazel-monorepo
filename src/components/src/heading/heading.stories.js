// @flow

import type { Node } from 'react';

import Heading from './heading';

export const h1 = (): Node => <Heading level="h1">Heading 1</Heading>;
export const h2 = (): Node => <Heading level="h2">Heading 2</Heading>;
export const h3 = (): Node => <Heading level="h3">Heading 3</Heading>;
export const h4 = (): Node => <Heading level="h4">Heading 4</Heading>;
export const h5 = (): Node => <Heading level="h5">Heading 5</Heading>;
export const h6 = (): Node => <Heading level="h6">Heading 6</Heading>;

export default {
  component: Heading,
  title: 'Heading',
};
