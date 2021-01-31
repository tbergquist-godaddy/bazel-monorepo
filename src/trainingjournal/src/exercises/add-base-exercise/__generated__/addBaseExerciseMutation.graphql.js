/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateExerciseInput = {|
  description?: ?string,
  muscleGroups?: ?$ReadOnlyArray<?string>,
  name: string,
  videoUrl?: ?string,
|};
export type addBaseExerciseMutationVariables = {|
  exercise: CreateExerciseInput,
  connections: $ReadOnlyArray<string>,
|};
export type addBaseExerciseMutationResponse = {|
  +createExercise: ?{|
    +exerciseEdge?: ?{|
      +node: ?{|
        +id: string,
        +name: ?string,
        +muscleGroups: ?$ReadOnlyArray<?string>,
        +description: ?string,
        +videoUrl: ?string,
      |}
    |}
  |}
|};
export type addBaseExerciseMutation = {|
  variables: addBaseExerciseMutationVariables,
  response: addBaseExerciseMutationResponse,
|};
*/


/*
mutation addBaseExerciseMutation(
  $exercise: CreateExerciseInput!
) {
  createExercise(exercise: $exercise) {
    __typename
    ... on CreateExercise {
      exerciseEdge {
        node {
          id
          name
          muscleGroups
          description
          videoUrl
        }
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "exercise"
},
v2 = [
  {
    "kind": "Variable",
    "name": "exercise",
    "variableName": "exercise"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "ExerciseEdge",
  "kind": "LinkedField",
  "name": "exerciseEdge",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Exercise",
      "kind": "LinkedField",
      "name": "node",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "muscleGroups",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "description",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "videoUrl",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "addBaseExerciseMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "createExercise",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/)
            ],
            "type": "CreateExercise",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "addBaseExerciseMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "createExercise",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "filters": null,
                "handle": "appendEdge",
                "key": "",
                "kind": "LinkedHandle",
                "name": "exerciseEdge",
                "handleArgs": [
                  {
                    "kind": "Variable",
                    "name": "connections",
                    "variableName": "connections"
                  }
                ]
              }
            ],
            "type": "CreateExercise",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e82e0f6165319a0eb342f2ac27141cb0",
    "id": null,
    "metadata": {},
    "name": "addBaseExerciseMutation",
    "operationKind": "mutation",
    "text": "mutation addBaseExerciseMutation(\n  $exercise: CreateExerciseInput!\n) {\n  createExercise(exercise: $exercise) {\n    __typename\n    ... on CreateExercise {\n      exerciseEdge {\n        node {\n          id\n          name\n          muscleGroups\n          description\n          videoUrl\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9d83a39cff068a7e60999aae49b027b5';

module.exports = node;
