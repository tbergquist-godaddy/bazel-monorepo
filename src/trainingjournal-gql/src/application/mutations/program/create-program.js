// @flow

import { GraphQLNonNull } from 'graphql';
import { ProgramModel } from '@tj-gql/infrastructure/models';
import {
  CreateProgramPayload,
  CreateProgramInput,
  type CreateProgramInputType,
  UnauthorizedOrUnknownClass,
} from '@tj-gql/application/models';
import type { GraphqlContext } from '@tj-gql/application/services';

type Args = {
  +program: CreateProgramInputType,
  ...
};

export default {
  type: CreateProgramPayload,
  args: {
    program: {
      type: (GraphQLNonNull(CreateProgramInput): GraphQLNonNull<typeof CreateProgramInput>),
    },
  },
  resolve: async (
    _: mixed,
    { program }: Args,
    { user }: GraphqlContext,
  ): Promise<ProgramModel | UnauthorizedOrUnknownClass> => {
    if (user == null) {
      return new UnauthorizedOrUnknownClass('UNAUTHORIZED');
    }
    try {
      const createdProgram = await ProgramModel.createProgram({
        ...program,
        user: user.id,
      });
      return createdProgram;
    } catch (e) {
      return new UnauthorizedOrUnknownClass('UNKNOWN');
    }
  },
};
