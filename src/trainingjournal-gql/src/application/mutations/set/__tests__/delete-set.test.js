// @flow

import { ProgramModel, UserModel, ExerciseModel } from '@tj-gql/infrastructure/models';
import { executeTestQuery } from '@tbergq/graphql-test-utils';
import app from '@tj-gql/application/app';
import { toGlobalId, fromGlobalId } from '@adeira/graphql-global-id';

describe('application / mutations / set / DeleteSet', () => {
  it('deletes the set', async () => {
    const email = 'delete-week_test@test.no';
    const user = await UserModel.createUser(email);
    const exercise = await ExerciseModel.createExercise({
      user: user._id,
      name: 'Squats',
    });
    const program = await ProgramModel.create({
      name: 'test',
      user: user._id,
      weeks: [
        // $FlowExpectedError[incompatible-call]
        {
          name: 'Week 1',
          days: [
            {
              name: 'Day 1',
              sets: [
                {
                  exercise: exercise._id,
                  sets: '2',
                  reps: '4',
                  group: 'A1',
                  breakTime: '2',
                },
              ],
            },
          ],
        },
      ],
    });

    const setId = program.weeks[0].days[0].sets[0]._id;

    const response = await executeTestQuery({
      app,
      query: `mutation deleteSet($id: ID!) {
            deleteSet(id: $id) {
                success
                id
            }
        }`,
      variables: { id: toGlobalId('Set', setId) },
    }).set('Authorization', JSON.stringify({ email, id: user._id }));

    expect(response.body.data.deleteSet.success).toBe(true);
    expect(fromGlobalId(response.body.data.deleteSet.id)).toEqual(setId.toString());
  });
});
