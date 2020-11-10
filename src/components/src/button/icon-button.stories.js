// @flow

import type { Node } from 'react';
import { MdAccessAlarm } from 'react-icons/md';
import { action } from '@storybook/addon-actions';

import IconButton from './icon-button';

export const Default = (): Node => (
  <IconButton onClick={action('click')} aria-label="Set alarm">
    <MdAccessAlarm />
  </IconButton>
);

export default {
  component: IconButton,
  title: 'IconButton',
};
