// @flow

import { type Node } from 'react';
import { Button, useShowToast } from '@tbergq/components';
import { useNavigate, useHistory } from '@tbergq/router';
import { fbt } from 'fbt';
import { useMutation, useQueryClient } from 'react-query';

import { createDay } from '../api/fetch-days';
import { FETCH_PROGRAM_KEY } from '../api/fetch-programs';

type Props = {
  +weekId: number,
  +dayLength: number,
  +programId: string,
};

export default function AddDay({ weekId, dayLength, programId }: Props): Node {
  const { location } = useHistory();
  const cache = useQueryClient();
  const showToast = useShowToast();
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(createDay, {
    onError: () => {
      showToast({ text: fbt('Failed to create day', 'create day error message'), type: 'danger' });
    },
    onSuccess: (data) => {
      navigate(`${location.pathname}/day/${data.id}/`);
      cache.invalidateQueries([FETCH_PROGRAM_KEY, programId]);
    },
  });

  const addDay = () => {
    mutate({ week: weekId, name: `Day ${dayLength + 1}` });
  };

  return (
    <Button isLoading={isLoading} onClick={addDay} size="small">
      <fbt desc="Add day button">Add day</fbt>
    </Button>
  );
}
