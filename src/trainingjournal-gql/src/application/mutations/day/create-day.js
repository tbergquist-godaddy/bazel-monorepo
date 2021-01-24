// @flow

import { GraphQLNonNull } from 'graphql';
import { ProgramModel, DayModel } from '@tj-gql/infrastructure/models';
import {
  CreateDayPayload,
  UnauthorizedOrUnknownClass,
  CreateDayInput,
  type CreateDayInputType,
} from '@tj-gql/application/models';
import type { GraphqlContext } from '@tj-gql/application/services';
import { unauthorizedOrUnknownResolver } from '@tj-gql/application/resolvers';
import { fromGlobalId } from '@adeira/graphql-global-id';

type Args = {
  +day: CreateDayInputType,
  ...
};

export default {
  type: CreateDayPayload,
  args: {
    day: {
      type: (GraphQLNonNull(CreateDayInput): GraphQLNonNull<typeof CreateDayInput>),
    },
  },
  resolve: (
    _: mixed,
    { day: { name, programId, weekId } }: Args,
    context: GraphqlContext,
  ): Promise<?DayModel | UnauthorizedOrUnknownClass> => {
    return unauthorizedOrUnknownResolver<?DayModel>(context, async (user) => {
      const wId = fromGlobalId(weekId);
      const program = await ProgramModel.addDay({
        programId: fromGlobalId(programId),
        weekId: wId,
        user: user.id,
        dayName: name,
      });
      const week = (program?.weeks ?? []).find((w) => w.id === wId);
      if (week == null) {
        return null;
      }
      const days = week.days;
      if (days == null) {
        return null;
      }

      return days[days.length - 1];
    });
  },
};
