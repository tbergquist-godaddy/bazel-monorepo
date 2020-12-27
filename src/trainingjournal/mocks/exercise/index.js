// @flow

import { Handler } from '@tbergq/mock-server';

import createExercise from './create-exercise';
import editExercise from './edit-exercise';
import deleteExercise from './delete-exercise';

const exerciseHandlers: $ReadOnlyArray<Handler> = [createExercise, editExercise, deleteExercise];

export default exerciseHandlers;
