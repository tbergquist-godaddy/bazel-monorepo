// @flow

import { type Node } from 'react';
import { Card, Box, Heading } from '@tbergq/components';
import { fbt } from 'fbt';

import type { BaseExercise } from '../../program/types';

type Props = {
  +exercise: BaseExercise,
};

export default function BaseExerciseItem({ exercise }: Props): Node {
  const { name, description, muscle_group: muscleGroup, youtube_link: link } = exercise;
  const hasDescription = description != null && description !== '';
  const hasLink = link != null && link !== '';
  return (
    <Card>
      <Box marginBottom="normal">
        <Heading level="h2" as="h6">
          {`${name} - ${muscleGroup.name}`}
        </Heading>
      </Box>
      {hasDescription && (
        <Box paddingBottom="normal" paddingLeft="normal" paddingRight="normal" paddingTop="normal">
          <i>{description}</i>
        </Box>
      )}
      {hasLink && (
        <a target="_blank" href={link} rel="noreferrer noopener">
          <fbt desc="video link">Video link</fbt>
        </a>
      )}
    </Card>
  );
}
