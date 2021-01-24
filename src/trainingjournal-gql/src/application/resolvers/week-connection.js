// @flow

import { ProgramModel, WeekModel } from '@tj-gql/infrastructure/models';
import {
  connectionFromArray,
  type ConnectionArguments,
  type Connection,
} from '@adeira/graphql-relay';

export default function weekConnectionResolver(
  { weeks }: ProgramModel,
  args: ConnectionArguments,
): Connection<WeekModel> {
  return connectionFromArray(weeks, args);
}
