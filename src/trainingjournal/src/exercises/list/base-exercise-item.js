// @flow

import { type Node } from 'react';
import { Card, Box, Heading } from '@tbergq/components';
// import { fbt } from 'fbt';
import { graphql, useFragment } from 'react-relay/hooks';

import type { baseExerciseItem_exercise$key as Exercise } from './__generated__/baseExerciseItem_exercise.graphql';

type Props = {
  +exercise: ?Exercise,
};

export default function BaseExerciseItem({ exercise }: Props): Node {
  const data = useFragment(
    graphql`
      fragment baseExerciseItem_exercise on Exercise {
        name
        muscleGroups
      }
    `,
    exercise,
  );
  const name = data?.name ?? '';
  const muscleGroups = data?.muscleGroups ?? [];
  return (
    <Card>
      <Box marginBottom="normal">
        <Heading level="h2" as="h6">
          {`${name} - ${muscleGroups.join(' ')}`}
        </Heading>
      </Box>
      {/* {hasDescription && (
        <Box paddingBottom="normal" paddingLeft="normal" paddingRight="normal" paddingTop="normal">
          <i>{description}</i>
        </Box>
      )}
      {hasLink && (
        <a target="_blank" href={link} rel="noreferrer noopener">
          <fbt desc="video link">Video link</fbt>
        </a>
      )} */}
    </Card>
  );
}
