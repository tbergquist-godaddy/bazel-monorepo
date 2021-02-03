// @flow

import { ProgramModel, UserModel } from '@tj-gql/infrastructure/models';
import { executeTestQuery } from '@tbergq/graphql-test-utils';
import app from '@tj-gql/application/app';
import { toGlobalId, fromGlobalId } from '@adeira/graphql-global-id';

describe('application / mutations / week / DeleteWeek', () => {
  it('deletes the week', async () => {
    const email = 'delete-program_test@test.no';
    const user = await UserModel.createUser(email);
    const program = await ProgramModel.create({
      name: 'test',
      user: user._id,
      // $FlowExpectedError[incompatible-call]
      weeks: [{ name: 'Week 1' }],
    });

    const weekId = program.weeks[0]._id;
    const response = await executeTestQuery({
      app,
      query: `mutation deleteWeek($id: ID!) {
            deleteWeek(id: $id) {
                success
                id
            }
        }`,
      variables: { id: toGlobalId('Week', weekId) },
    }).set('Authorization', JSON.stringify({ email, id: user._id }));

    expect(response.body.data.deleteWeek.success).toBe(true);
    expect(fromGlobalId(response.body.data.deleteWeek.id)).toEqual(weekId.toString());
  });
});
