// @flow

import { GraphQLUnionType, GraphQLObjectType, GraphQLEnumType, GraphQLString } from 'graphql';
import globalId from '@adeira/graphql-global-id';

import ErrorInterface from '../../models/error-interface';

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

const Team = new GraphQLObjectType({
  name: 'Team',
  description: 'A team',
  fields: {
    id: globalId(({ id }) => id),
    name: { type: GraphQLString },
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
