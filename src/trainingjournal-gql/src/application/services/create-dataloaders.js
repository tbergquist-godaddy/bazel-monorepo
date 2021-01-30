// @flow

import { getExercises, getExercise } from '@tj-gql/domain/exercise';
import { getPrograms } from '@tj-gql/domain/program';
import Dataloader from 'dataloader';
import { ExerciseModel, ProgramModel } from '@tj-gql/infrastructure/models';

import type { User } from './create-context';

export type Dataloaders = {
  +exercises: Dataloader<string, $ReadOnlyArray<ExerciseModel>>,
  +exercise: Dataloader<string, ExerciseModel>,
  +programs: Dataloader<string, $ReadOnlyArray<ProgramModel>>,
};

export default function createDataloaders(user: ?User): Dataloaders {
  return {
    exercises: new Dataloader(getExercises),
    exercise: new Dataloader((ids: $ReadOnlyArray<string>) => getExercise(ids, user?.id)),
    programs: new Dataloader(getPrograms),
  };
}
