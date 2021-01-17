// @flow

import { type Node } from 'react';
import { Heading } from '@tbergq/components';
import { fbt } from 'fbt';
import { Helmet } from 'react-helmet';
import { useFetchDay } from '@tj/program/api/fetch-days';

import ExerciseTable from './exercise-table/exercise-table';

type Props = {
  +routeData: {
    +params: { +id: string },
  },
};
export default function Register({ routeData }: Props): Node {
  const dayId = routeData.params.id;
  const { data: day } = useFetchDay(dayId, { suspense: true });
  return (
    <>
      <Helmet>
        <title>Trainingjournal | Register </title>
      </Helmet>
      <Heading level="h1" as="h3">
        {fbt(`Register ${fbt.param('dayName', day.name)}`, 'Register day title')}
      </Heading>
      <ExerciseTable exercises={day.exercises} />
    </>
  );
}
