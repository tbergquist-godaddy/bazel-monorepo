// @flow

import { GraphQLUnionType } from 'graphql';

import { UnauthorizedOrUnknown, UnauthorizedOrUnknownClass } from '../common';
import CreateProgram from './create-program';

const CreateProgramPayload: GraphQLUnionType = new GraphQLUnionType({
  name: 'CreateProgramPayload',
  description: 'Union type of creating a program',
  types: [UnauthorizedOrUnknown, CreateProgram],
  resolveType: (value) => {
    if (value instanceof UnauthorizedOrUnknownClass) {
      return UnauthorizedOrUnknown;
    }
    return CreateProgram;
  },
});

export default CreateProgramPayload;
