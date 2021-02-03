// @flow

import { ProgramModel, UserModel } from '@tj-gql/infrastructure/models';
import { executeTestQuery } from '@tbergq/graphql-test-utils';
import app from '@tj-gql/application/app';
import { toGlobalId, fromGlobalId } from '@adeira/graphql-global-id';

describe('application / mutations / day / DeleteDay', () => {
  it('deletes the day', async () => {
    const email = 'delete-week_test@test.no';
    const user = await UserModel.createUser(email);
    const program = await ProgramModel.create({
      name: 'test',
      user: user._id,
      // $FlowExpectedError[incompatible-call]
      weeks: [{ name: 'Week 1', days: [{ name: 'Day 1' }] }],
    });

    const dayId = program.weeks[0].days[0]._id;

    const response = await executeTestQuery({
      app,
      query: `mutation deleteDay($id: ID!) {
            deleteDay(id: $id) {
                success
                id
            }
        }`,
      variables: { id: toGlobalId('Day', dayId) },
    }).set('Authorization', JSON.stringify({ email, id: user._id }));

    expect(response.body.data.deleteDay.success).toBe(true);
    expect(fromGlobalId(response.body.data.deleteDay.id)).toEqual(dayId.toString());
  });
});
