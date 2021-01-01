// @flow

import { type Node } from 'react';
import { select } from '@storybook/addon-knobs';

import Box from './box';

const displayOptions = {
  'block': 'block',
  'flex': 'flex',
  'inline': 'inline',
  'inline-block': 'inline-block',
  'block-until-desktop': {
    _: 'block',
    desktop: 'flex',
  },
};

const marginRightOptions = {
  'none': 'none',
  'small': 'small',
  'normal': 'normal',
  'small-until-desktop': {
    _: 'small',
    desktop: 'normal',
  },
};

export const Default = (): Node => (
  <Box
    marginRight={select('marginRight', marginRightOptions, 'none')}
    display={select('display', displayOptions, 'block')}
  >
    test
  </Box>
);

export default {
  title: 'Box',
  component: Box,
};
