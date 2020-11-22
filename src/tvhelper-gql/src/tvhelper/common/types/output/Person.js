// @flow

import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';
import { toGlobalId } from '@adeira/graphql-relay';

import type { Person } from '../../../tvshow/TvShow';
import TvHelperImage from './TvHelperImage';

type Ancestor = {|
  ...Person,
  type: 'person' | 'character',
|};

export default (new GraphQLObjectType({
  name: 'Person',
  description: 'An actor or a character in a tv show',
  fields: {
    id: {
      type: GraphQLID,
      resolve: ({ id, type }: Ancestor) => toGlobalId(type, id),
    },
    name: {
      type: GraphQLString,
    },
    image: {
      type: TvHelperImage,
    },
  },
}): GraphQLObjectType);
