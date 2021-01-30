// @flow

import { GraphQLNonNull } from 'graphql';
import { ProgramModel, SetModel } from '@tj-gql/infrastructure/models';
import {
  CreateSetPayload,
  UnauthorizedOrUnknownClass,
  CreateSetInput,
  type CreateSetInputType,
} from '@tj-gql/application/models';
import type { GraphqlContext } from '@tj-gql/application/services';
import { unauthorizedOrUnknownResolver } from '@tj-gql/application/resolvers';
import { fromGlobalId } from '@adeira/graphql-global-id';

type Args = {
  +set: CreateSetInputType,
  ...
};

export default {
  type: CreateSetPayload,
  args: {
    set: {
      type: (GraphQLNonNull(CreateSetInput): GraphQLNonNull<typeof CreateSetInput>),
    },
  },
  resolve: (
    _: mixed,
    { set: { dayId, exerciseId, ...rest } }: Args,
    context: GraphqlContext,
  ): Promise<?SetModel | UnauthorizedOrUnknownClass> => {
    return unauthorizedOrUnknownResolver<?SetModel>(context, async (user) => {
      const program = await ProgramModel.addSet({
        user: user.id,
        dayId: fromGlobalId(dayId),
        set: {
          exercise: fromGlobalId(exerciseId),
          ...rest,
        },
      });

      if (program == null) {
        return null;
      }

      for (const weeks of program.weeks) {
        for (const day of weeks.days) {
          if (day.id === fromGlobalId(dayId)) {
            const sets = day.sets;
            return sets[sets.length - 1];
          }
        }
      }

      return null;
    });
  },
};
