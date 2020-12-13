// @flow

import { type Node, lazy, Suspense } from 'react';
import { Modal, Spinner } from '@tbergq/components';

const AddProgramForm = lazy(() => import('./add-program-form'));

type Props = {
  +onClose: () => void,
  +isVisible: boolean,
};

export default function AddProgram({ onClose, isVisible }: Props): Node {
  return (
    <Modal onClose={onClose} isVisible={isVisible}>
      {isVisible && (
        <Suspense fallback={<Spinner />}>
          <AddProgramForm closeModal={onClose} />
        </Suspense>
      )}
    </Modal>
  );
}
