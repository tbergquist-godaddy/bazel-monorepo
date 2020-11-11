// @flow

import { GraphQLUnionType, GraphQLObjectType, GraphQLEnumType, GraphQLString } from 'graphql';

import ErrorInterface from '../../models/error-interface';
import { TeamEdge } from './team-connection';

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

const CreateTeamEdge = new GraphQLObjectType({
  name: 'CreateTeamEdge',
  description: 'Contains the team edge',
  fields: {
    teamEdge: {
      type: TeamEdge,
      resolve: (node) => ({ node }),
    },
  },
});

export default (new GraphQLUnionType({
  name: 'CreateTeamPayload',
  types: [CreateTeamEdge, CreateTeamError],
  resolveType: (value) => {
    if (value.name != null) {
      return CreateTeamEdge;
    }
    return CreateTeamError;
  },
}): GraphQLUnionType);
