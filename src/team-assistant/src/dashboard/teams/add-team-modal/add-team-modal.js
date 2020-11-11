// @flow

import { type Node } from 'react';
import { Modal, Heading } from '@tbergq/components';

import AddTeamForm from './add-team-form';

type Props = {
  +isVisible: boolean,
  +onClose: () => void,
  +connectionId: ?string,
};

export default function AddTeamModal({ isVisible, onClose, connectionId }: Props): Node {
  return (
    <Modal
      title={
        <Heading level="h2" as="h4">
          Add a new team
        </Heading>
      }
      isVisible={isVisible}
      onClose={onClose}
    >
      <AddTeamForm onClose={onClose} connectionId={connectionId} />
    </Modal>
  );
}
