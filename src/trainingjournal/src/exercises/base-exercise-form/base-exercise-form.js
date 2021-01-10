// @flow

import { type Node } from 'react';
import { FormGroup, Input } from '@tbergq/components';
import { useFormContext } from 'react-hook-form';
import { fbt } from 'fbt';

import { useMuscleGroups } from '../api/fetch-muscle-groups';

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
  const { data } = useMuscleGroups();

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
      {/* TODO: Replace with @tbergq/component */}
      <select ref={register} name="muscle_group">
        <option value="">--Select--</option>
        {data.map((group) => (
          <option key={group.id} value={group.id}>
            {group.name}
          </option>
        ))}
      </select>
    </>
  );
}
