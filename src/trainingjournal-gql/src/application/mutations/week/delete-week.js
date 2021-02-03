// @flow

import { type GraphQLFieldConfig } from 'graphql';
import { ProgramModel } from '@tj-gql/infrastructure/models';

import createRangeDeleteMutation from '../common/range-delete-mutation';

const deleteWeek: GraphQLFieldConfig<any, any> = createRangeDeleteMutation((weekId, userId) => {
  return ProgramModel.deleteWeek(weekId, userId);
});

export default deleteWeek;
