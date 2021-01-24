// @flow

import { GraphQLObjectType } from 'graphql';

import { DayEdge } from './day-connection';

const CreateDay: GraphQLObjectType = new GraphQLObjectType({
  name: 'CreateDay',
  description: 'Successful day creation model',
  fields: {
    dayEdge: {
      type: DayEdge,
      resolve: (node) => ({ node }),
    },
  },
});

export default CreateDay;
