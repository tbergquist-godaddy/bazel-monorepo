// @flow

import { type Node } from 'react';
import { Alert } from '@tbergq/components';
import { fbt } from 'fbt';

import { useLastRegistered } from '../../api/fetch-register';
import type { ExerciseRegister } from '../../types';

type Props = {
  +dayRegisterId: string,
  +baseExerciseId: string,
};
export default function PreviousRegister(props: Props): Node {
  const { data } = useLastRegistered<?$ReadOnlyArray<ExerciseRegister>>(props, { suspense: true });

  const registeredData = data ?? [];
  return (
    <Alert>
      <div>
        {registeredData.length === 0 ? (
          <fbt desc="no registered">No previous registered data</fbt>
        ) : (
          <fbt desc="Previous registered data">Previous registered data</fbt>
        )}
      </div>
      {registeredData.map((a, i) => (
        <div key={i}>{`${a.reps} - ${a.weight}kg${a.note !== '' ? ` (${a.note})` : ''}`}</div>
      ))}
    </Alert>
  );
}
