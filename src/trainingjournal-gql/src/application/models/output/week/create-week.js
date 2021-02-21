// @flow

import { GraphQLObjectType } from 'graphql';

import { WeekEdge } from './week';

const CreateWeek: GraphQLObjectType = new GraphQLObjectType({
  name: 'CreateWeek',
  description: 'Successful week creation model',
  fields: {
    weekEdge: {
      type: WeekEdge,
      resolve: (node) => ({ node }),
    },
  },
});

export default CreateWeek;
