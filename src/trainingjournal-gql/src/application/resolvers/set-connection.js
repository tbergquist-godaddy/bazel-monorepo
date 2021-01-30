// @flow

import { DayModel, SetModel } from '@tj-gql/infrastructure/models';
import {
  connectionFromArray,
  type ConnectionArguments,
  type Connection,
} from '@adeira/graphql-relay';

export default function setConnectionResolver(
  { sets }: DayModel,
  args: ConnectionArguments,
): Connection<SetModel> {
  return connectionFromArray(sets, args);
}
