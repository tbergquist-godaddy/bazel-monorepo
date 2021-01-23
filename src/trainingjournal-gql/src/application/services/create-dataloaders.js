// @flow

import { getExercises } from '@tj-gql/domain/exercise';
import Dataloader from 'dataloader';
import { ExerciseModel } from '@tj-gql/infrastructure/models';

export type Dataloaders = {
  +exercises: Dataloader<string, $ReadOnlyArray<ExerciseModel>>,
};

export default function createDataloaders(): Dataloaders {
  return {
    exercises: new Dataloader(getExercises),
  };
}
