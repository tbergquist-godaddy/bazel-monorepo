// @flow

import { GraphQLObjectType } from 'graphql';
import GlobalID from '@adeira/graphql-global-id';

import type { Cast } from '../../../tvshow/TvShow';
import Person from './Person';

export default (new GraphQLObjectType({
  name: 'Cast',
  description: 'A character appearing in a tvshow, and the actor/actress',
  fields: {
    id: GlobalID(({ person, character }) => `${person.id}:${character.id}`),
    person: {
      type: Person,
      resolve: ({ person }: Cast) => ({ ...person, type: 'person' }),
    },
    character: {
      type: Person,
      resolve: ({ character }: Cast) => ({ ...character, type: 'character' }),
    },
  },
}): GraphQLObjectType);
