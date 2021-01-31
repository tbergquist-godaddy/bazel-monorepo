// @flow

import { type Node, lazy, Suspense } from 'react';
import { Modal, Spinner } from '@tbergq/components';

const AddProgramForm = lazy(() => import('./add-program-form'));

type Props = {
  +onClose: () => void,
  +isVisible: boolean,
  +connectionId: ?string,
};

export default function AddProgram({ onClose, isVisible, connectionId }: Props): Node {
  return (
    <Modal onClose={onClose} isVisible={isVisible}>
      {isVisible && (
        <Suspense fallback={<Spinner />}>
          <AddProgramForm connectionId={connectionId} closeModal={onClose} />
        </Suspense>
      )}
    </Modal>
  );
}
