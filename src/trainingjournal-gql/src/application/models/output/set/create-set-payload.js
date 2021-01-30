// @flow

import { GraphQLUnionType } from 'graphql';

import { UnauthorizedOrUnknown, UnauthorizedOrUnknownClass } from '../common';
import CreateSet from './create-set';

const CreateSetPayload: GraphQLUnionType = new GraphQLUnionType({
  name: 'CreateSetPayload',
  description: 'Union type of creating a set',
  types: [UnauthorizedOrUnknown, CreateSet],
  resolveType: (value) => {
    if (value instanceof UnauthorizedOrUnknownClass) {
      return UnauthorizedOrUnknown;
    }
    return CreateSet;
  },
});

export default CreateSetPayload;
