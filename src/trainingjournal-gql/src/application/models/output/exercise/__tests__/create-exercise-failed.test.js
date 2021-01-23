// @flow

import { CreateExerciseFailed } from '../create-exercise-error';

describe('application / models / output / exercise / CreateExerciseFailed', () => {
  it('returns the correct error message', () => {
    expect(new CreateExerciseFailed('UNAUTHORIZED').getMessage()).toBe(
      'You must be logged in to create an exercise.',
    );

    expect(new CreateExerciseFailed('UNEXPECTED').getMessage()).toBe(
      'We had an unexpected error, please try again.',
    );
  });
});
