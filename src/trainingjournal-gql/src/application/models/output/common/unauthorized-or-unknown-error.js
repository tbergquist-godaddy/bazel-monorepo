// @flow

import { GraphQLObjectType, GraphQLEnumType, GraphQLString } from 'graphql';
import { ErrorInterface } from '@tj-gql/application/models/interfaces';

export const Reasons = {
  UNAUTHORIZED: 'UNAUTHORIZED',
  UNKNOWN: 'UNKNOWN',
};

type FailedReason = $Keys<typeof Reasons>;

export class UnauthorizedOrUnknownClass {
  reason: FailedReason;

  constructor(reason: FailedReason) {
    this.reason = reason;
  }

  getMessage(): string {
    if (this.reason === Reasons.UNAUTHORIZED) {
      return 'You must be logged in to create an exercise.';
    }
    return 'We had an unexpected error, please try again.';
  }
}

const UnauthorizedOrUnknownReason = new GraphQLEnumType({
  name: 'UnauthorizedOrUnknownReason',
  values: {
    UNAUTHORIZED: { value: Reasons.UNAUTHORIZED },
    UNKNOWN: { value: Reasons.UNKNOWN },
  },
});

const UnauthorizedOrUnknown: GraphQLObjectType = new GraphQLObjectType({
  name: 'UnauthorizedOrUnknown',
  description: 'Used for error type where error is either unauthorized or unknown',
  interfaces: [ErrorInterface],
  fields: {
    message: {
      type: GraphQLString,
      resolve: (input) => {
        return input.getMessage();
      },
    },
    reason: {
      type: UnauthorizedOrUnknownReason,
    },
  },
});

export default UnauthorizedOrUnknown;
