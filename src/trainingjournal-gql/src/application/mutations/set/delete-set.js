// @flow

import { type GraphQLFieldConfig } from 'graphql';
import { ProgramModel } from '@tj-gql/infrastructure/models';

import createRangeDeleteMutation from '../common/range-delete-mutation';

const deleteSet: GraphQLFieldConfig<any, any> = createRangeDeleteMutation((setId, userId) => {
  return ProgramModel.deleteSet(setId, userId);
});

export default deleteSet;
