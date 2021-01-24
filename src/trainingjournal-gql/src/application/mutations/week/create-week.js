// @flow

import { GraphQLNonNull, GraphQLID, GraphQLString } from 'graphql';
import { ProgramModel, WeekModel } from '@tj-gql/infrastructure/models';
import { CreateWeekPayload, UnauthorizedOrUnknownClass } from '@tj-gql/application/models';
import type { GraphqlContext } from '@tj-gql/application/services';
import { unauthorizedOrUnknownResolver } from '@tj-gql/application/resolvers';
import { fromGlobalId } from '@adeira/graphql-global-id';
import type { OpaqueIDString } from '@adeira/graphql-global-id/src/Encoder';

type Args = {
  +name: string,
  +programId: OpaqueIDString,
  ...
};

export default {
  type: CreateWeekPayload,
  args: {
    name: {
      type: (GraphQLNonNull(GraphQLString): GraphQLNonNull<typeof GraphQLString>),
    },
    programId: {
      type: (GraphQLNonNull(GraphQLID): GraphQLNonNull<typeof GraphQLID>),
    },
  },
  resolve: (
    _: mixed,
    { name, programId }: Args,
    context: GraphqlContext,
  ): Promise<?WeekModel | UnauthorizedOrUnknownClass> => {
    return unauthorizedOrUnknownResolver<?WeekModel>(context, async (user) => {
      const program = await ProgramModel.addWeek({
        programId: fromGlobalId(programId),
        user: user.id,
        weekName: name,
      });
      const weeks = program?.weeks;
      if (weeks == null) {
        return null;
      }
      return weeks[weeks.length - 1];
    });
  },
};
