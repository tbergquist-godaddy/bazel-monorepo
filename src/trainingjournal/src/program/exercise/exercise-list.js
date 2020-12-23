// @flow

import { type Node } from 'react';
import { LinkList } from '@tbergq/components';
import { create } from '@adeira/sx';

import { useBaseExercises } from '../api/fetch-base-exercises';
import type { BaseExercise } from '../types';

type Props = {
  +onSelect: (exercise: BaseExercise) => void,
};
export default function ExerciseList({ onSelect }: Props): Node {
  const { data } = useBaseExercises({ suspense: true });
  return (
    <LinkList
      items={data}
      renderItem={(className, item) => (
        <button
          onClick={() => onSelect(item)}
          type="button"
          className={`${styles('button')} ${className}`}
        >
          {item.name} - {item.muscle_group.name}
        </button>
      )}
    />
  );
}

const styles = create({
  button: {
    border: 'none',
    cursor: 'pointer',
    width: '100%',
    textAlign: 'left',
    fontSize: 'inherit',
  },
});
