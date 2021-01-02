// @flow

import { type Node } from 'react';
import { RecoilRoot } from 'recoil';

import Toast from './toast';
import { useShowToast } from './toast-list-state';
import Button from '../button/button';
import Box from '../box/box';

export const Default = (): Node => <Toast />;

const Consumer = () => {
  const showToast = useShowToast();
  return (
    <Box display="flex">
      <Box marginRight="normal">
        <Button onClick={() => showToast({ text: 'yo dude' })}>show toast</Button>
      </Box>
      <Button
        variant="danger"
        onClick={() => showToast({ text: 'yo danger dude', type: 'danger' })}
      >
        show danger toast
      </Button>
    </Box>
  );
};
export default {
  title: 'Toast',
  component: Toast,
  decorators: [
    (Story: any): Node => (
      <RecoilRoot>
        <>
          <Consumer />
          <Story />
        </>
      </RecoilRoot>
    ),
  ],
};
