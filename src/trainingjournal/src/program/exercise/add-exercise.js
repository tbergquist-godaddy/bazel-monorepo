// @flow

import { type Node, useState, lazy, Suspense } from 'react';
import { Button, Modal, Spinner } from '@tbergq/components';
import { fbt } from 'fbt';

const AddExerciseForm = lazy(() => import('./add-exercise-form'));

type Props = {
  +dayId: string,
  +programId: string,
};

export default function AddExercise({ dayId, programId }: Props): Node {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Button
        size="small"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <fbt desc="add exercise button text">Add exercise</fbt>
      </Button>
      <Modal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        closeLabel={fbt('close', 'close modal label')}
      >
        <Suspense fallback={<Spinner />}>
          <AddExerciseForm
            programId={programId}
            dayId={dayId}
            closeModal={() => setShowModal(false)}
          />
        </Suspense>
      </Modal>
    </div>
  );
}
