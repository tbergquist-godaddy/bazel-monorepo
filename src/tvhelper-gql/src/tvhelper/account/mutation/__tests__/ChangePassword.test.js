// @flow

import { tvHelperConnection } from '../../../../database/connections';
import UserRepository from '../../../../database/models/user';
import executeTestQuery from '../../../../services/executeTestQuery';

let userId;

beforeEach(async () => {
  const user = await UserRepository.createUser({
    username: 'tito',
    password: 'bonito',
    email: 'tito@bonito.es',
  });
  userId = user.id;
});

afterEach(() => tvHelperConnection.collection('users').drop());

const query = `
mutation mut($password: String!, $newPassword: String!) {
  tvHelperChangePassword(password:$password, newPassword:$newPassword) {
  __typename
  ... on ChangePasswordError {
    message
    isInvalidPassword
  }
  ... on ChangePasswordResponse {
    success
  }
}
}
`;

it('changes password', async () => {
  expect(
    await executeTestQuery(
      query,
      { password: 'bonito', newPassword: 'lolita' },
      { user: { id: userId } },
    ),
  ).toMatchInlineSnapshot(`
    Object {
      "data": Object {
        "tvHelperChangePassword": Object {
          "__typename": "ChangePasswordResponse",
          "success": true,
        },
      },
    }
  `);
});

it('returns error type for wrong password', async () => {
  expect(
    await executeTestQuery(
      query,
      {
        password: 'bonitost',
        newPassword: 'lolita',
      },
      { user: { id: userId } },
    ),
  ).toMatchInlineSnapshot(`
    Object {
      "data": Object {
        "tvHelperChangePassword": Object {
          "__typename": "ChangePasswordError",
          "isInvalidPassword": true,
          "message": "Wrong password",
        },
      },
    }
  `);
});
