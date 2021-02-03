// @flow

import { GraphQLNonNull, GraphQLID, type GraphQLFieldConfig } from 'graphql';
import { type DeletedReturn } from '@tj-gql/infrastructure/models';
import { RangeDelete } from '@tj-gql/application/models';
import type { GraphqlContext, OpaqueIDString } from '@tj-gql/application/services';
import { fromGlobalId } from '@adeira/graphql-global-id';

type Args = {
  +id: OpaqueIDString,
  ...
};

type DeleteFunction = (id: string, userId: string) => Promise<DeletedReturn>;

export default function createRangeDeleteMutation(
  deleteFunction: DeleteFunction,
): GraphQLFieldConfig<any, any> {
  return {
    type: RangeDelete,
    args: {
      id: {
        type: (GraphQLNonNull(GraphQLID): GraphQLNonNull<typeof GraphQLID>),
      },
    },
    resolve: async (
      _: mixed,
      { id }: Args,
      { user }: GraphqlContext,
    ): Promise<{ +id: OpaqueIDString, +success: boolean }> => {
      try {
        const { deletedCount } = await deleteFunction(fromGlobalId(id), user?.id ?? '');
        return { id, success: deletedCount > 0 };
      } catch {
        return { id, success: false };
      }
    },
  };
}
