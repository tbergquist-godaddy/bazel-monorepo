// @flow

import { GraphQLNonNull, GraphQLString } from 'graphql';

import LoginResponse from '../models/login-response';
import UserModel from '../../database/models/users';
import { signToken } from '../../middleware/auth';

type Args = {
  +password: string,
  +email: string,
  ...
};

type Response = {
  +token: ?string,
};
export default {
  type: LoginResponse,
  args: {
    password: {
      type: (GraphQLNonNull(GraphQLString): GraphQLNonNull<typeof GraphQLString>),
    },
    email: {
      type: (GraphQLNonNull(GraphQLString): GraphQLNonNull<typeof GraphQLString>),
    },
  },
  resolve: async (_: mixed, { email, password }: Args): Promise<Response> => {
    const user = await UserModel.verifyPassword(email, password);
    if (user == null) {
      return { token: null };
    }
    const token = signToken({ email: user.email, id: user._id });
    return { token };
  },
};
