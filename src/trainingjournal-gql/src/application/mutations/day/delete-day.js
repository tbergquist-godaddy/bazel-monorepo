// @flow

import { type GraphQLFieldConfig } from 'graphql';
import { ProgramModel } from '@tj-gql/infrastructure/models';

import createRangeDeleteMutation from '../common/range-delete-mutation';

const deleteDay: GraphQLFieldConfig<any, any> = createRangeDeleteMutation((dayId, userId) => {
  return ProgramModel.deleteDay(dayId, userId);
});

export default deleteDay;
