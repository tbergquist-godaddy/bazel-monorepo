// @flow

import { type Node, useState, lazy, Suspense } from 'react';
import { Button, useShowToast, Spinner } from '@tbergq/components';
import { fbt } from 'fbt';
import { useMutation, graphql, useFragment } from 'react-relay/hooks';

import type { deleteWeek_week$key as Week } from './__generated__/deleteWeek_week.graphql';
import type { deleteWeekMutation } from './__generated__/deleteWeekMutation.graphql';

const ConfirmDeleteWeek = lazy(() => import('./confirm-delete-week'));

type Props = {
  +week: ?Week,
  +connectionId: ?string,
};

export default function DeleteWeek({ week, connectionId }: Props): Node {
  const data = useFragment(
    graphql`
      fragment deleteWeek_week on Week {
        id
        name
      }
    `,
    week,
  );
  const [mutate, isLoading] = useMutation<deleteWeekMutation>(graphql`
    mutation deleteWeekMutation($id: ID!, $connections: [ID!]!) {
      deleteWeek(id: $id) {
        id @deleteEdge(connections: $connections)
        success
      }
    }
  `);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const showToast = useShowToast();

  const deleteWeek = () => {
    mutate({
      variables: {
        id: data?.id ?? '',
        connections: [connectionId ?? ''],
      },
      onCompleted: (res, error) => {
        if (res.deleteWeek?.success !== true || error) {
          showToast({
            text: fbt('Failed to delete week', 'Delete week failed error message'),
            type: 'danger',
          });
        } else {
          showToast({
            text: fbt('Week was successfully deleted', 'Delete week success message'),
          });
        }
      },
    });
  };

  return (
    <>
      <Button
        onClick={() => setShowConfirmModal(true)}
        isLoading={isLoading}
        variant="danger"
        size="small"
      >
        <fbt desc="Delete week button">Delete week</fbt>
      </Button>
      {showConfirmModal && (
        <Suspense fallback={<Spinner />}>
          <ConfirmDeleteWeek
            weekName={data?.name ?? ''}
            onClose={() => setShowConfirmModal(false)}
            onConfirm={deleteWeek}
          />
        </Suspense>
      )}
    </>
  );
}
