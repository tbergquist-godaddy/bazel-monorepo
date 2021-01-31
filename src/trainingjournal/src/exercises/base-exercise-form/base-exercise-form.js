// @flow

import { type Node } from 'react';
import { FormGroup, Input } from '@tbergq/components';
import { useFormContext } from 'react-hook-form';
import { fbt } from 'fbt';

const formElements = {
  name: {
    label: fbt('Name', 'exercise name label'),
    placeholder: null,
  },
  muscleGroups: {
    label: fbt('Muscle groups', 'muscle groups label'),
    placeholder: 'E.g. Chest triceps',
  },
  description: {
    label: fbt('Description', 'description label'),
    placeholder: null,
  },
  videoUrl: {
    label: fbt('Video url', 'video url label'),
    placeholder: null,
  },
};

export default function BaseExerciseForm(): Node {
  const { register, errors } = useFormContext();

  return (
    <>
      {Object.keys(formElements).map((key) => (
        <FormGroup key={key}>
          <Input
            name={key}
            ref={register}
            label={formElements[key].label}
            error={errors[key]?.message}
            placeholder={formElements[key].placeholder}
          />
        </FormGroup>
      ))}
    </>
  );
}
