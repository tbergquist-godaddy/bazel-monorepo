// @flow

import { type Node } from 'react';

import Modal from '../modal/modal';
import Button from '../button/button';
import Box from '../box/box';
import Heading from '../heading/heading';

type Props = {
  +isVisible: boolean,
  +onClose: () => void,
  +onConfirm: () => void,
  +confirmActionText: string,
  +cancelActionText: string,
  +title: string,
  +confirmText: string,
};

export default function Confirm({
  title,
  cancelActionText,
  onConfirm,
  confirmActionText,
  confirmText,
  ...rest
}: Props): Node {
  return (
    <Modal
      title={
        <Heading level="h1" as="h3">
          {title}
        </Heading>
      }
      {...rest}
    >
      <Box marginBottom="normal" marginTop="normal">
        {confirmText}
      </Box>
      <Box justifyContent="flex-end" display="flex">
        <Box marginRight="normal">
          <Button variant="white" onClick={rest.onClose}>
            {cancelActionText}
          </Button>
        </Box>
        <Button
          variant="danger"
          onClick={() => {
            onConfirm();
            rest.onClose();
          }}
        >
          {confirmActionText}
        </Button>
      </Box>
    </Modal>
  );
}
