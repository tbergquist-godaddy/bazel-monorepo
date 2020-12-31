// @flow

import { type Node } from 'react';
import { FormGroup, Input, Box, IconButton } from '@tbergq/components';
import { fbt } from 'fbt';
import { MdClear } from 'react-icons/md';
import { object, string } from 'yup';
import { type ObjectSchema } from 'yup/lib/object';

type Props = {
  +register: () => void,
  +errors: $FlowFixMe,
  +exerciseName: string,
  +clearExercise: () => void,
};

const setLabel = fbt('Set', 'set label text');
const repsLabel = fbt('Reps', 'reps label text');
const descriptionLabel = fbt('Description (Optional)', 'Description label');
const breakTimeLabel = fbt('Break time', 'Break time label');

type Values = {
  set: string,
  reps: string,
  break_time: string,
};

export const schema: ObjectSchema<Values> = object().shape({
  set: string().required().label(setLabel),
  reps: string().required().label(repsLabel),
  break_time: string().required().label(breakTimeLabel),
});

export default function ExerciseInput({
  register,
  errors,
  exerciseName,
  clearExercise,
}: Props): Node {
  return (
    <>
      <Box alignItems="center" marginBottom="normal" display="flex">
        <Box marginRight="normal">
          <strong>{exerciseName}</strong>
        </Box>
        <IconButton
          variant="danger"
          size="small"
          aria-label={fbt('Remove exercise', 'remove exercise aria label')}
          onClick={clearExercise}
        >
          <MdClear />
        </IconButton>
      </Box>
      <FormGroup>
        <Input ref={register} name="set" type="text" label={setLabel} error={errors.set?.message} />
      </FormGroup>
      <FormGroup>
        <Input
          ref={register}
          name="reps"
          type="text"
          label={repsLabel}
          error={errors.reps?.message}
        />
      </FormGroup>
      <FormGroup>
        <Input
          ref={register}
          name="break_time"
          type="text"
          label={breakTimeLabel}
          error={errors.break_time?.message}
        />
      </FormGroup>
      <FormGroup>
        <Input
          ref={register}
          name="description"
          type="text"
          label={descriptionLabel}
          error={errors.description?.message}
        />
      </FormGroup>
    </>
  );
}
