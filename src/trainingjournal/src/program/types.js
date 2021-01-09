// @flow

export type ProgramList = {
  +id: number,
  +name: string,
};

export type Week = {
  +id: number,
  +name: string,
  +days: $ReadOnlyArray<Day>,
  +program: number,
};

export type Day = {
  +id: number,
  +name: string,
  +exercises: $ReadOnlyArray<Exercise>,
};

export type Exercise = {
  +id: number,
  +set: string,
  +reps: string,
  +break_time: string,
  +base_exercise: BaseExercise,
};
export type BaseExercise = {
  +id: number,
  +name: string,
  +description?: string,
  +youtube_link?: string,
  +muscle_group: MuscleGroup,
};
export type MuscleGroup = {
  +id: number,
  +name: string,
};
export type Program = $ReadOnly<{
  ...ProgramList,
  +weeks: $ReadOnlyArray<Week>,
}>;
