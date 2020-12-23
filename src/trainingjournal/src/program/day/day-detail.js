// @flow

import { type Node } from 'react';
import { Heading, Box } from '@tbergq/components';

import BackButton from '../../components/back-button';
import { useFetchDay } from '../api/fetch-days';
import Day from './day';
import AddExercise from '../exercise/add-exercise';

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
      <Box flex={true} alignItems="center" justifyContent="space-between">
        <Heading level="h1">{data.name}</Heading>
        <AddExercise dayId={dayId} />
      </Box>
      <Box marginBottom="normal">
        <Day headingLevel="h2" day={data} showActions={false} />
      </Box>
      <BackButton to={`/programs/${programId}`} />
    </div>
  );
}
