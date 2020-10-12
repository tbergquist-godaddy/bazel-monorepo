// @flow

import { GraphQLNonNull, GraphQLString } from 'graphql';
import jwt from 'jsonwebtoken';

import LoginResponse from '../models/login-response';
import UserModel from '../../database/models/users';

const { JWT_SECRET } = process.env;

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
    const token = jwt.sign({ id: email, email }, JWT_SECRET, {
      expiresIn: '1d',
      issuer: 'team_assistant',
    });
    return { token };
  },
};
