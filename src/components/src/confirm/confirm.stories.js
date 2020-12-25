// @flow

import { type Node } from 'react';
import { action } from '@storybook/addon-actions';

import Confirm from './confirm';

export const Default = (): Node => (
  <Confirm
    onConfirm={action('confirm')}
    confirmActionText="Confirm"
    cancelActionText="Cancel"
    isVisible={true}
    onClose={action('close')}
    title="Confirm action"
    confirmText="Are you sure that you want to perform this action?"
  />
);

export default {
  title: 'Confirm',
  component: Confirm,
};
