// @flow

import { GraphQLUnionType } from 'graphql';

import { UnauthorizedOrUnknown, UnauthorizedOrUnknownClass } from '../common';
import CreateDay from './create-day';

const CreateDayPayload: GraphQLUnionType = new GraphQLUnionType({
  name: 'CreateDayPayload',
  description: 'Union type of creating a day',
  types: [UnauthorizedOrUnknown, CreateDay],
  resolveType: (value) => {
    if (value instanceof UnauthorizedOrUnknownClass) {
      return UnauthorizedOrUnknown;
    }
    return CreateDay;
  },
});

export default CreateDayPayload;
