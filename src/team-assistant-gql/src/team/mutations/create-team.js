// @flow

import { GraphQLNonNull, GraphQLString } from 'graphql';

import TeamModel from '../../database/models/teams';
import type { Context } from '../../context';
import CreateTeamPayload from '../models/create-team-payload';

type Team = {
  +name: string,
  +userId: string,
};
type TeamError = {
  +message: string,
  +reason: 'NAME_MISSING',
};

type Args = {
  +name: string,
  ...
};

export default {
  type: CreateTeamPayload,
  args: {
    name: { type: (GraphQLNonNull(GraphQLString): GraphQLNonNull<typeof GraphQLString>) },
  },
  resolve: async (
    _: mixed,
    { name }: Args,
    { user }: Context,
  ): Promise<?$Shape<Team> | ?$Shape<TeamError>> => {
    if (user == null) {
      throw new Error('Unauthorized');
    }
    if (name === '') {
      return {
        message: 'Name cannot be empty',
        reason: 'NAME_MISSING',
      };
    }
    const team = await TeamModel.createTeam({ name, userId: user.email });
    return team;
  },
};
