// @flow

import { type Node } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { Button, useShowToast } from '@tbergq/components';
import { fbt } from 'fbt';

import { createWeek } from '../api/fetch-weeks';
import { FETCH_PROGRAM_KEY } from '../api/fetch-programs';

type Props = {
  +programId: string,
  +weekCount: number,
};

export default function Program({ programId, weekCount }: Props): Node {
  const cache = useQueryClient();
  const showToast = useShowToast();
  const { mutate, isLoading } = useMutation(() => createWeek(programId, `Week ${weekCount + 1}`), {
    onSuccess: () => {
      cache.invalidateQueries([FETCH_PROGRAM_KEY, programId]);
      showToast({
        text: fbt('Week was successfully created', 'Create week success toast message'),
      });
    },
    onError: () => {
      showToast({
        type: 'danger',
        text: fbt(
          'Failed to create a new week, please try again',
          'Failed to create week error message',
        ),
      });
    },
  });
  return (
    <Button fullWidth="mediumMobile" isLoading={isLoading} onClick={mutate}>
      <fbt desc="Add week button">Add week</fbt>
    </Button>
  );
}
