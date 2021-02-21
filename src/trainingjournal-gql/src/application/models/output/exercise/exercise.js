// @flow

import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import globalID from '@adeira/graphql-global-id';
import { GraphqlBaseObject, type GraphQLConnectionDefinitions } from '@tj-gql/application/services';

const exercise: GraphqlBaseObject = new GraphqlBaseObject({
  name: 'Exercise',
  description: 'Model of an exercise',
  fields: {
    id: globalID(({ _id: id }) => id),
    name: { type: GraphQLString },
    muscleGroups: { type: GraphQLList(GraphQLString) },
    description: { type: GraphQLString },
    videoUrl: { type: GraphQLString },
  },
});

const Exercise: GraphQLObjectType = exercise.getGraphqlObject();
const {
  connectionType: ExerciseConnection,
  edgeType: ExerciseEdge,
}: GraphQLConnectionDefinitions = exercise.getConnectionDefinitions();

export { Exercise, ExerciseConnection, ExerciseEdge };
