// @flow

import { GraphQLNonNull, GraphQLString } from 'graphql';

import UserModel from '../../database/models/users';
import CreateAccountResponse from '../models/create-account-response';

type Args = {
  +password: string,
  +email: string,
  ...
};

// eslint-disable-next-line no-control-regex
const emailRexEx = /(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

export default {
  type: CreateAccountResponse,
  args: {
    password: {
      type: (GraphQLNonNull(GraphQLString): GraphQLNonNull<typeof GraphQLString>),
    },
    email: {
      type: (GraphQLNonNull(GraphQLString): GraphQLNonNull<typeof GraphQLString>),
    },
  },
  resolve: async (_: mixed, { email, password }: Args): mixed => {
    if (!emailRexEx.test(email)) {
      const error = {};
      error.reason = 'INVALID_EMAIL';
      error.message = `${email} is not a valid email address`;
      return error;
    }
    if (password === '') {
      const error = {};
      error.reason = 'MISSING_PASSWORD';
      error.message = 'Password is mandatory';
      return error;
    }
    try {
      const user = await UserModel.createUser({ email, password });
      return user;
    } catch (e) {
      return {
        message: e.message,
        reason: e.code === 11000 ? 'EMAIL_EXISTS' : 'UNKNOWN',
      };
    }
  },
};
