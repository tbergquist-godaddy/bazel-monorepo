// @flow

import { type Node } from 'react';
import { Modal } from '@tbergq/components';

type Props = {
  +isVisible: boolean,
  +onClose: () => void,
};

export default function AddTeamModal({ isVisible, onClose }: Props): Node {
  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      todo
    </Modal>
  );
}
