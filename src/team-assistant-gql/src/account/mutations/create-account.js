// @flow

import { GraphQLNonNull, GraphQLString } from 'graphql';

import UserModel from '../../database/models/users';
import CreateAccountResponse from '../models/create-account-response';

type Args = {
  +password: string,
  +email: string,
  ...
};

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
