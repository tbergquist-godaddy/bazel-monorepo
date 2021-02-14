// @flow

import { executeTestQuery } from '@tbergq/graphql-test-utils';
import app from '@tj-gql/application/app';
import { ProgramModel, UserModel } from '@tj-gql/infrastructure/models';
import connection from '@tj-gql/infrastructure/connection';
import { toGlobalId } from '@adeira/graphql-global-id';

const query = `query nodeQuery($id: ID!) {
    node(id: $id) {
      ... on Day {
          id
          name
      }
    }
}`;

describe('application / queries / node / day', () => {
  afterEach(async () => {
    await Promise.all([
      connection.collection('users').drop(),
      connection.collection('programs').drop(),
    ]);
  });
  const setup = () => {
    const email = 'day-node_test@test.no';
    let program;
    let user;

    const createModel = async () => {
      user = await UserModel.createUser(email);
      program = await ProgramModel.create({
        name: 'test',
        user: user._id,
        // $FlowExpectedError[incompatible-call]
        weeks: [{ name: 'week 1', days: [{ name: 'day 1' }] }],
      });
    };

    return {
      createModel,
      program,
      email,
      getUser: () => user,
      getDayId: () => toGlobalId('Day', program.weeks[0].days[0]._id),
    };
  };

  it('returns null for missing auth', async () => {
    const { createModel, getDayId } = setup();
    await createModel();
    const res = await executeTestQuery({
      app,
      query,
      variables: { id: getDayId() },
    });

    expect(res.body).toEqual({
      data: {
        node: null,
      },
    });
  });

  it('returns the day', async () => {
    const { createModel, getDayId, email, getUser } = setup();
    await createModel();
    const user = getUser();

    const res = await executeTestQuery({
      app,
      query,
      variables: { id: getDayId() },
    }).set('authorization', JSON.stringify({ id: user._id, email }));

    expect(res.body).toEqual({
      data: {
        node: {
          id: getDayId(),
          name: 'day 1',
        },
      },
    });
  });
});
