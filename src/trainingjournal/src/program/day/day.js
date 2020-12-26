// @flow

import { type Node } from 'react';
import { Heading, Card, Box, IconButton } from '@tbergq/components';
import { MdEdit } from 'react-icons/md';
import { Link, useHistory } from '@tbergq/router';
import { fbt } from 'fbt';
import { create } from '@adeira/sx';

import type { Day as DayType } from '../types';
import DayExerciseList from './day-exercise-list/day-exercise-list';

type Props = {
  +day: DayType,
  +programId: string,
};

export default function Day({ day, programId }: Props): Node {
  const { location } = useHistory();
  const { name, exercises, id } = day;

  return (
    <Card className={styles('card')}>
      <Box justifyContent="space-between" alignItems="center" flex={true}>
        <Heading level="h3" as="h6">
          {name}
        </Heading>

        <IconButton
          aria-label={fbt('Edit day', 'edit day button aria-label')}
          to={`${location.pathname}/day/${id}`}
          as={Link}
        >
          <MdEdit />
        </IconButton>
      </Box>
      <DayExerciseList programId={programId} dayId={id.toString()} exercises={exercises} />
    </Card>
  );
}

const styles = create({
  card: {
    overflow: 'hidden',
  },
});
