// @flow

import { type Node } from 'react';
import { Button, Box } from '@tbergq/components';
import { fbt } from 'fbt';
import { useForm, FormProvider } from 'react-hook-form';

import BaseExerciseForm from '../base-exercise-form/base-exercise-form';
import { useCreateBaseExercise } from '../api/fetch-exercises';

type Props = {
  +onClose: () => void,
};
export default function AddBaseExercise({ onClose }: Props): Node {
  const formValues = useForm({});
  const { mutate, isLoading } = useCreateBaseExercise({
    onSuccess: () => {
      onClose();
    },
  });

  return (
    <FormProvider {...formValues}>
      <form noValidate onSubmit={formValues.handleSubmit(mutate)}>
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
