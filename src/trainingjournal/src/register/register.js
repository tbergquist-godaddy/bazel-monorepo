// @flow

import { type Node, useState, Suspense, lazy } from 'react';
import { Heading, Spinner } from '@tbergq/components';
import { fbt } from 'fbt';
import { Helmet } from 'react-helmet';
import { useFetchDay } from '@tj/program/api/fetch-days';
import { useHistory } from '@tbergq/router';
import type { Exercise } from '@tj/program/types';

import ExerciseTable from './exercise-table/exercise-table';
import { useRegisterDay } from './api/fetch-register-day';

const RegisterExercise = lazy(() => import('./register-exercise/register-exercise'));

type Props = {
  +routeData: {
    +params: { +id: string },
  },
};

export default function Register({ routeData }: Props): Node {
  const dayId = routeData.params.id;
  const { data: day } = useFetchDay(dayId, { suspense: true });
  const history = useHistory();

  const [activeExercise, setActiveExercise] = useState(() => {
    const params = new URLSearchParams(history.location.search);
    const activeId = params.get('exerciseId');

    if (activeId == null) {
      return null;
    }

    return day.exercises.find((ex) => ex.id === parseInt(activeId, 10));
  });

  const { data: registerDayData } = useRegisterDay(dayId);

  const onSetActiveExercise = (exercise: Exercise) => {
    const exerciseId = exercise.id;
    history.push({
      pathname: history.location.pathname,
      search: `?exerciseId=${exerciseId}`,
    });
    setActiveExercise(exercise);
  };
  const dayRegisterId = registerDayData?.[0]?.id;
  return (
    <>
      <Helmet>
        <title>Trainingjournal | Register </title>
      </Helmet>
      <Heading level="h1" as="h3">
        {fbt(`Register ${fbt.param('dayName', day.name)}`, 'Register day title')}
      </Heading>
      <ExerciseTable setActiveExercise={onSetActiveExercise} exercises={day.exercises} />
      <Suspense fallback={<Spinner />}>
        {activeExercise != null && dayRegisterId != null && (
          <RegisterExercise dayRegisterId={dayRegisterId} exercise={activeExercise} />
        )}
      </Suspense>
    </>
  );
}
