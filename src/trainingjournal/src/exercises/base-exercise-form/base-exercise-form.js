// @flow

import { type Node } from 'react';
import { FormGroup, Input, Select } from '@tbergq/components';
import { useFormContext } from 'react-hook-form';
import { fbt } from 'fbt';

import { useMuscleGroups } from '../api/fetch-muscle-groups';
import type { MuscleGroup } from '../../program/types';

type Options = Array<{
  +label: string,
  +value: number,
}>;
const formElements = {
  name: {
    label: fbt('Name', 'exercise name label'),
  },
  description: {
    label: fbt('Description', 'description label'),
  },
  youtube_link: {
    label: fbt('Video url', 'video url label'),
  },
};

export default function BaseExerciseForm(): Node {
  const { register, errors } = useFormContext();

  const { data } = useMuscleGroups<Options>({
    select: (muscleGroups: $ReadOnlyArray<MuscleGroup>) => {
      return muscleGroups.map((group) => ({
        label: group.name,
        value: group.id,
      }));
    },
  });

  return (
    <>
      {Object.keys(formElements).map((key) => (
        <FormGroup key={key}>
          <Input
            name={key}
            ref={register}
            label={formElements[key].label}
            error={errors[key]?.message}
          />
        </FormGroup>
      ))}
      <Select
        placeholder={fbt('--Select--', 'Select placholder')}
        ref={register}
        name="muscle_group"
        label={fbt('Muscle group', 'Muscle group label')}
        options={data}
      />
    </>
  );
}
