// @flow

import { ProgramModel, UserModel } from '@tj-gql/infrastructure/models';
import { executeTestQuery } from '@tbergq/graphql-test-utils';
import app from '@tj-gql/application/app';
import { toGlobalId, fromGlobalId } from '@adeira/graphql-global-id';

describe('application / mutations / exercise / DeleteProgram', () => {
  it('handles missing auth', async () => {
    const email = 'delete-program_test@test.no';
    const user = await UserModel.createUser('delete-program_test@test.no');
    const program = await ProgramModel.createProgram({ name: 'test', user: user._id });

    const response = await executeTestQuery({
      app,
      query: `mutation deleteProgram($id: ID!) {
            deleteProgram(id: $id) {
                success
                id
            }
        }`,
      variables: { id: toGlobalId('Program', program._id) },
    }).set('Authorization', JSON.stringify({ email, id: user._id }));

    expect(response.body.data.deleteProgram.success).toBe(true);
    expect(fromGlobalId(response.body.data.deleteProgram.id)).toEqual(program._id.toString());
  });
});
