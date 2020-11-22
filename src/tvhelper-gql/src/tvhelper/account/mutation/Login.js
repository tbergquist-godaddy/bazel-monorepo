// @flow

import { GraphQLString, GraphQLNonNull } from 'graphql';
import { verify } from 'password-hash';
import jwt from 'jsonwebtoken';
import { toGlobalId } from '@adeira/graphql-relay';

import type { GraphqlContextType } from '../../../services/createGraphqlContext';
import type { User as LoggedInUser } from '../../../types';
import LoginType from '../types/output/login-type';
import loadConfig from '../../../services/load-config';

type User = {
  +id: string,
  +password: string,
  +username: string,
};

type Args = {
  +username: string,
  +password: string,
  ...
};

loadConfig();

const { JWT_SECRET } = process.env;

export const signToken = (user: LoggedInUser): string => {
  return jwt.sign(user, JWT_SECRET, {
    expiresIn: '1y',
    issuer: 'tbergq-graphql.now.sh',
  });
};

const loginFailed = () => ({
  token: null,
  success: false,
});

const loginResolver = (user: ?User, password: string): { +token: ?string, +success: boolean } => {
  if (user == null) {
    return loginFailed();
  }
  const isCorrect = verify(password, user.password);
  if (!isCorrect) {
    return loginFailed();
  }
  const token = signToken({
    id: toGlobalId('User', user.id),
    username: user.username,
  });

  return { token, success: true };
};

export default {
  type: LoginType,
  args: {
    username: {
      type: (GraphQLNonNull(GraphQLString): GraphQLNonNull<typeof GraphQLString>),
    },
    password: {
      type: (GraphQLNonNull(GraphQLString): GraphQLNonNull<typeof GraphQLString>),
    },
  },
  resolve: async (
    _: mixed,
    { username, password }: Args,
    { dataLoader }: GraphqlContextType,
  ): Promise<{ +success: boolean, +token: ?string }> => {
    const user = await dataLoader.tvhelper.user.load(username);

    return loginResolver(user, password);
  },
};
