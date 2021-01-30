/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type baseExerciseList_exercises$ref = any;
export type exercisesQueryVariables = {||};
export type exercisesQueryResponse = {|
  +me: ?{|
    +$fragmentRefs: baseExerciseList_exercises$ref
  |}
|};
export type exercisesQuery = {|
  variables: exercisesQueryVariables,
  response: exercisesQueryResponse,
|};
*/


/*
query exercisesQuery {
  me {
    ...baseExerciseList_exercises
    id
  }
}

fragment baseExerciseItem_exercise on Exercise {
  name
  muscleGroups
}

fragment baseExerciseList_exercises on Me {
  exercises {
    edges {
      node {
        id
        ...baseExerciseItem_exercise
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "exercisesQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "baseExerciseList_exercises"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "exercisesQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Me",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ExerciseConnection",
            "kind": "LinkedField",
            "name": "exercises",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ExerciseEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Exercise",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
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
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b6c6cff791b27c1282bc8408236248a6",
    "id": null,
    "metadata": {},
    "name": "exercisesQuery",
    "operationKind": "query",
    "text": "query exercisesQuery {\n  me {\n    ...baseExerciseList_exercises\n    id\n  }\n}\n\nfragment baseExerciseItem_exercise on Exercise {\n  name\n  muscleGroups\n}\n\nfragment baseExerciseList_exercises on Me {\n  exercises {\n    edges {\n      node {\n        id\n        ...baseExerciseItem_exercise\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c7efe9e7336f0706cfc8ff81fd75c1fa';

module.exports = node;
