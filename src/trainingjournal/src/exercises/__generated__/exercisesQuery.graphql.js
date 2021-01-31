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
  description
  videoUrl
}

fragment baseExerciseList_exercises on Me {
  exercises(first: 100) {
    edges {
      node {
        id
        ...baseExerciseItem_exercise
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 100
  }
],
v1 = {
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
            "args": (v0/*: any*/),
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
                      (v1/*: any*/),
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
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "endCursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasNextPage",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "ClientExtension",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__id",
                    "storageKey": null
                  }
                ]
              }
            ],
            "storageKey": "exercises(first:100)"
          },
          {
            "alias": null,
            "args": (v0/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "baseExerciseList_exercises",
            "kind": "LinkedHandle",
            "name": "exercises"
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f0aec299773197ffe856267b4132851e",
    "id": null,
    "metadata": {},
    "name": "exercisesQuery",
    "operationKind": "query",
    "text": "query exercisesQuery {\n  me {\n    ...baseExerciseList_exercises\n    id\n  }\n}\n\nfragment baseExerciseItem_exercise on Exercise {\n  name\n  muscleGroups\n  description\n  videoUrl\n}\n\nfragment baseExerciseList_exercises on Me {\n  exercises(first: 100) {\n    edges {\n      node {\n        id\n        ...baseExerciseItem_exercise\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c7efe9e7336f0706cfc8ff81fd75c1fa';

module.exports = node;
