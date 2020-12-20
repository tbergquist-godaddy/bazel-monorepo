// @flow

import { type Node } from 'react';
import { Heading, Card, Box } from '@tbergq/components';
import { create } from '@adeira/sx';

import type { Day as DayType } from '../types';

type Props = {
  +day: DayType,
};

export default function Day({ day }: Props): Node {
  const { name, exercises } = day;
  return (
    <Card>
      <Heading level="h3" as="h6">
        {name}
      </Heading>
      {exercises.map((exercise) => (
        <Box
          marginTop="normal"
          marginBottom="normal"
          paddingBottom="normal"
          justifyContent="space-between"
          flex={true}
          key={exercise.id}
          className={styles('underline')}
        >
          <Box>{exercise.base_exercise.name}</Box>
          <Box flex={true}>
            <Box>{exercise.set}</Box>
            <Box>&nbsp;&times;&nbsp;</Box>
            <Box>{exercise.reps}</Box>
          </Box>
        </Box>
      ))}
    </Card>
  );
}

const styles = create({
  underline: {
    ':not(:last-of-type)': {
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'var(--color-gray-light)',
    },
  },
});
