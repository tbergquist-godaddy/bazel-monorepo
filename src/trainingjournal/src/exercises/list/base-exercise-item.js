// @flow

import { type Node } from 'react';
import { Card, Box, Heading } from '@tbergq/components';
import { fbt } from 'fbt';
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
        description
        videoUrl
      }
    `,
    exercise,
  );
  const name = data?.name ?? '';
  const muscleGroups = data?.muscleGroups ?? [];
  const description = data?.description ?? '';
  const videoUrl = data?.videoUrl ?? '';
  return (
    <Card>
      <Box marginBottom="normal">
        <Heading level="h2" as="h6">
          {`${name} - ${muscleGroups.join(' ')}`}
        </Heading>
      </Box>
      {description !== '' && (
        <Box paddingBottom="normal" paddingLeft="normal" paddingRight="normal" paddingTop="normal">
          <i>{description}</i>
        </Box>
      )}
      {videoUrl !== '' && (
        <a target="_blank" href={videoUrl} rel="noreferrer noopener">
          <fbt desc="video link">Video link</fbt>
        </a>
      )}
    </Card>
  );
}
