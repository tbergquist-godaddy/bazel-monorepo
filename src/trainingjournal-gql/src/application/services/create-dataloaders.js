// @flow

import { getExercises } from '@tj-gql/domain/exercise';
import { getPrograms } from '@tj-gql/domain/program';
import Dataloader from 'dataloader';
import { ExerciseModel, ProgramModel } from '@tj-gql/infrastructure/models';

export type Dataloaders = {
  +exercises: Dataloader<string, $ReadOnlyArray<ExerciseModel>>,
  +programs: Dataloader<string, $ReadOnlyArray<ProgramModel>>,
};

export default function createDataloaders(): Dataloaders {
  return {
    exercises: new Dataloader(getExercises),
    programs: new Dataloader(getPrograms),
  };
}
