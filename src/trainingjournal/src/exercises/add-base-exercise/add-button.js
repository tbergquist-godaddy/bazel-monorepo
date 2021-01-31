// @flow

import { type Node, useState, lazy, Suspense } from 'react';
import { IconButton, Modal, Heading, Spinner } from '@tbergq/components';
import { MdAdd } from 'react-icons/md';
import { fbt } from 'fbt';

const AddBaseExercise = lazy(() => import('./add-base-exercise'));

type Props = {
  +connectionId: ?string,
};
export default function AddButton({ connectionId }: Props): Node {
  const [showForm, setShowForm] = useState(false);
  const onClose = () => setShowForm(false);
  return (
    <>
      <IconButton
        aria-label={fbt('Add exercise', 'add exercise button aria label')}
        onClick={() => setShowForm(true)}
      >
        <MdAdd />
      </IconButton>
      <Modal
        title={
          <Heading level="h1" as="h4">
            <fbt desc="add base exercise modal title">Add exercise</fbt>
          </Heading>
        }
        isVisible={showForm}
        onClose={onClose}
      >
        <Suspense fallback={<Spinner />}>
          {showForm && <AddBaseExercise connectionId={connectionId} onClose={onClose} />}
        </Suspense>
      </Modal>
    </>
  );
}
