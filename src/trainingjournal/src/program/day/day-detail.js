// @flow

import { type Node } from 'react';
import { Heading, Box, Card } from '@tbergq/components';
import { Helmet } from 'react-helmet';
import { fbt } from 'fbt';

import BackButton from '../../components/back-button';
import { useFetchDay } from '../api/fetch-days';
import AddExercise from '../exercise/add-exercise';
import DayExerciseList from './day-exercise-list/day-exercise-list';
import DeleteDay from './delete-day';
import styles from './day-detail.module.css';

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
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Heading level="h1">{data.name}</Heading>
        <AddExercise programId={programId} dayId={dayId} />
      </Box>
      <Box marginBottom="normal">
        {data.exercises.length > 0 ? (
          <Card className={styles.DayDetail__card}>
            <DayExerciseList dayId={dayId} programId={programId} exercises={data.exercises} />
          </Card>
        ) : (
          <p>
            <fbt desc="no exercises text">
              No exercises registered on this day. Click the button above to add one
            </fbt>
          </p>
        )}
      </Box>
      <Box display="flex">
        <Box marginRight="normal">
          <BackButton to={`/programs/${programId}`} />
        </Box>
        <DeleteDay dayName={data.name} programId={programId} dayId={dayId} />
      </Box>
    </div>
  );
}
