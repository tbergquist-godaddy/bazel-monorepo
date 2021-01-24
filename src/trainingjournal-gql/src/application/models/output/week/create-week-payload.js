// @flow

import { GraphQLUnionType } from 'graphql';

import { UnauthorizedOrUnknown, UnauthorizedOrUnknownClass } from '../common';
import CreateWeek from './create-week';

const CreateWeekPayload: GraphQLUnionType = new GraphQLUnionType({
  name: 'CreateWeekPayload',
  description: 'Union type of creating a week',
  types: [UnauthorizedOrUnknown, CreateWeek],
  resolveType: (value) => {
    if (value instanceof UnauthorizedOrUnknownClass) {
      return UnauthorizedOrUnknown;
    }
    return CreateWeek;
  },
});

export default CreateWeekPayload;
