// @flow

import { GraphQLUnionType } from 'graphql';

import User from './user';
import Unauthorized from './unauthorized';

export default (new GraphQLUnionType({
  name: 'Viewer',
  description: 'The viewer type',
  types: [User, Unauthorized],
  resolveType: (value) => {
    if (value.identity != null) {
      return User;
    }
    return Unauthorized;
  },
}): GraphQLUnionType);
