// @flow

import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLList } from 'graphql';

export type ExerciseInputType = {
  name: string,
  muscleGroups?: string[],
};

const CreateExerciseInput: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'CreateExerciseInput',
  description: 'Model for creating an exercise',
  fields: {
    name: { type: GraphQLNonNull(GraphQLString) },
    muscleGroups: { type: GraphQLList(GraphQLString) },
  },
});

export default CreateExerciseInput;
