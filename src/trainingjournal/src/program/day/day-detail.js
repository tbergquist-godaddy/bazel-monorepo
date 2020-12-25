// @flow

import { type Node } from 'react';
import { Heading, Box, Card } from '@tbergq/components';
import { Helmet } from 'react-helmet';

import BackButton from '../../components/back-button';
import { useFetchDay } from '../api/fetch-days';
import AddExercise from '../exercise/add-exercise';
import DayExerciseList from './day-exercise-list';

type Props = {
  +routeData: {
    +params: {
      +programId: string,
      +dayId: string,
    },
  },
};

export default function DayDetail({ routeData }: Props): Node {
  const { dayId, programId } = routeData.params;
  const { data } = useFetchDay(dayId, { suspense: true });

  return (
    <div>
      <Helmet>
        <title>Trainingjournal | {data.name}</title>
      </Helmet>
      <Box flex={true} alignItems="center" justifyContent="space-between">
        <Heading level="h1">{data.name}</Heading>
        <AddExercise programId={programId} dayId={dayId} />
      </Box>
      <Box marginBottom="normal">
        <Card>
          <DayExerciseList exercises={data.exercises} />
        </Card>
      </Box>
      <BackButton to={`/programs/${programId}`} />
    </div>
  );
}
