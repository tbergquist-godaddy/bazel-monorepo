// @flow

import { type Node, useState, useMemo, useEffect } from 'react';
import { LinkList, Input, FormGroup } from '@tbergq/components';
import { useDebounce } from 'use-debounce';
import { fbt } from 'fbt';

import { useBaseExercises } from '../../api/fetch-base-exercises';
import type { BaseExercise } from '../../types';
import './exercise-list.css';

type Props = {
  +onSelect: (exercise: BaseExercise) => void,
};

function FilterList({ setFilter }) {
  const [value, setValue] = useState('');
  const [filter] = useDebounce(value, 500);

  useEffect(() => {
    setFilter(filter || null); // yes we want to convert empty string to null here
  }, [filter, setFilter]);

  return (
    <FormGroup>
      <Input
        name="list_filter"
        label={fbt('Filter exercises', 'filter input label')}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </FormGroup>
  );
}

export default function ExerciseList({ onSelect }: Props): Node {
  const [filter, setFilter] = useState(null);
  const { data } = useBaseExercises({ suspense: true });

  const filteredData = useMemo(() => {
    if (filter == null) {
      return data;
    }
    const regExp = new RegExp(filter, 'i');
    return data.filter((item) => regExp.test(item.name) || regExp.test(item.muscle_group.name));
  }, [filter, data]);

  return (
    <>
      <FilterList setFilter={setFilter} />
      <LinkList
        items={filteredData}
        renderItem={(className, item) => (
          <button
            onClick={() => onSelect(item)}
            type="button"
            className={`ExerciseList__button ${className}`}
          >
            {item.name} - {item.muscle_group.name}
          </button>
        )}
      />
    </>
  );
}
