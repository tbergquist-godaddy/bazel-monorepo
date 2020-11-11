// @flow

import { connectionArgs } from '@adeira/graphql-relay';

import { TeamConnection } from '../models/team-connection';
import teamsResolver from '../resolvers/teams-resolver';

export default {
  args: {
    ...connectionArgs,
  },
  type: TeamConnection,
  resolve: teamsResolver,
};
