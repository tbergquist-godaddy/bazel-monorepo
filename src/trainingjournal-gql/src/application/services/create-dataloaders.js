// @flow

import { getExercises, getExercise } from '@tj-gql/domain/exercise';
import { getPrograms, getProgram } from '@tj-gql/domain/program';
import { getDays } from '@tj-gql/domain/day';
import Dataloader from 'dataloader';
import { ExerciseModel, ProgramModel, DayModel } from '@tj-gql/infrastructure/models';

import type { User } from './create-context';

export type Dataloaders = {
  +exercises: Dataloader<string, $ReadOnlyArray<ExerciseModel>>,
  +exercise: Dataloader<string, ExerciseModel>,
  +programs: Dataloader<string, $ReadOnlyArray<ProgramModel>>,
  +program: Dataloader<string, ProgramModel>,
  +day: Dataloader<string, DayModel | null>,
};

export default function createDataloaders(user: ?User): Dataloaders {
  return {
    exercises: new Dataloader(getExercises),
    exercise: new Dataloader((ids: $ReadOnlyArray<string>) => getExercise(ids, user?.id)),
    programs: new Dataloader(getPrograms),
    program: new Dataloader((ids: $ReadOnlyArray<string>) => getProgram(ids, user?.id)),
    day: new Dataloader((ids: $ReadOnlyArray<string>) => getDays(ids, user?.id)),
  };
}
