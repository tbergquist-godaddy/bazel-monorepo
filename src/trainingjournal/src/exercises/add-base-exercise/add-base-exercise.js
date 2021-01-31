// @flow

import { type Node } from 'react';
import { Button, Box } from '@tbergq/components';
import { fbt } from 'fbt';
import { useForm, FormProvider } from 'react-hook-form';
import { useMutation, graphql } from 'react-relay/hooks';

import BaseExerciseForm from '../base-exercise-form/base-exercise-form';
import type { addBaseExerciseMutation } from './__generated__/addBaseExerciseMutation.graphql';

type Props = {
  +onClose: () => void,
  +connectionId: ?string,
};

export default function AddBaseExercise({ onClose, connectionId }: Props): Node {
  const formValues = useForm({});
  const [mutation, isLoading] = useMutation<addBaseExerciseMutation>(graphql`
    mutation addBaseExerciseMutation($exercise: CreateExerciseInput!, $connections: [ID!]!) {
      createExercise(exercise: $exercise) {
        ... on CreateExercise {
          exerciseEdge @appendEdge(connections: $connections) {
            node {
              id
              name
              muscleGroups
              description
              videoUrl
            }
          }
        }
      }
    }
  `);

  const onSubmit = ({ name, description, muscleGroups, videoUrl }) => {
    mutation({
      onCompleted: () => {
        onClose();
      },
      variables: {
        connections: [connectionId ?? ''],
        exercise: {
          name,
          description,
          muscleGroups: muscleGroups.split(' '),
          videoUrl,
        },
      },
    });
  };

  return (
    <FormProvider {...formValues}>
      <form noValidate onSubmit={formValues.handleSubmit(onSubmit)}>
        <BaseExerciseForm />
        <Box marginTop="normal" display="flex" justifyContent="flex-end">
          <Box marginRight="normal">
            <Button onClick={onClose} variant="white">
              <fbt desc="cancel button">Cancel</fbt>
            </Button>
          </Box>
          <Button isLoading={isLoading} type="submit">
            <fbt desc="Submit exercise button">Create exercise</fbt>
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
}
