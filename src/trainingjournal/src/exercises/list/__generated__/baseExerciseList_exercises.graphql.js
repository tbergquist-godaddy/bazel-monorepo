/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type baseExerciseItem_exercise$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type baseExerciseList_exercises$ref: FragmentReference;
declare export opaque type baseExerciseList_exercises$fragmentType: baseExerciseList_exercises$ref;
export type baseExerciseList_exercises = {|
  +exercises: ?{|
    +__id: string,
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: baseExerciseItem_exercise$ref,
      |}
    |}>,
  |},
  +$refType: baseExerciseList_exercises$ref,
|};
export type baseExerciseList_exercises$data = baseExerciseList_exercises;
export type baseExerciseList_exercises$key = {
  +$data?: baseExerciseList_exercises$data,
  +$fragmentRefs: baseExerciseList_exercises$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "exercises"
        ]
      }
    ]
  },
  "name": "baseExerciseList_exercises",
  "selections": [
    {
      "alias": "exercises",
      "args": null,
      "concreteType": "ExerciseConnection",
      "kind": "LinkedField",
      "name": "__baseExerciseList_exercises_connection",
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
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "baseExerciseItem_exercise"
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
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '7d8ab3a4e697d6cdd9a3e6b5c8ce9b17';

module.exports = node;
