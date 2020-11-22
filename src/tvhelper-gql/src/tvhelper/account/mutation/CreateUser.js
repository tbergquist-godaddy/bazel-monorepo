// @flow

import { GraphQLString, GraphQLNonNull } from 'graphql';

import UserRepository from '../../../database/models/user';
import CreateUserType from '../types/output/CreateUserType';

type Args = {
  +username: string,
  +password: string,
  +email: string,
  ...
};

export default {
  type: CreateUserType,
  args: {
    username: {
      type: (GraphQLNonNull(GraphQLString): GraphQLNonNull<typeof GraphQLString>),
    },
    password: {
      type: (GraphQLNonNull(GraphQLString): GraphQLNonNull<typeof GraphQLString>),
    },
    email: {
      type: (GraphQLNonNull(GraphQLString): GraphQLNonNull<typeof GraphQLString>),
    },
  },
  resolve: async (
    _: mixed,
    { username, password, email }: Args,
  ): Promise<{ +success: boolean }> => {
    const user = await UserRepository.createUser({
      username,
      password,
      email,
    });

    return { success: user != null };
  },
};
