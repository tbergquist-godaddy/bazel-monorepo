// @flow

import { GraphQLUnionType, GraphQLObjectType, GraphQLEnumType, GraphQLString } from 'graphql';

import ErrorInterface from '../../models/error-interface';
import Team from './team';

const CreateTeamErrorReason = new GraphQLEnumType({
  name: 'CreateTeamErrorReason',
  values: {
    NAME_MISSING: { value: 'NAME_MISSING' },
  },
});
const CreateTeamError = new GraphQLObjectType({
  name: 'CreateTeamError',
  description: 'Error type for creating a team',
  interfaces: [ErrorInterface],
  fields: {
    message: { type: GraphQLString },
    reason: { type: CreateTeamErrorReason },
  },
});

export default (new GraphQLUnionType({
  name: 'CreateTeamPayload',
  types: [Team, CreateTeamError],
  resolveType: (value) => {
    if (value.name != null) {
      return Team;
    }
    return CreateTeamError;
  },
}): GraphQLUnionType);
