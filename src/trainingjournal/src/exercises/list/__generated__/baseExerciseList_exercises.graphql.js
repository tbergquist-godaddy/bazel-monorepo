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
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: baseExerciseItem_exercise$ref,
      |}
    |}>
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
  "metadata": null,
  "name": "baseExerciseList_exercises",
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
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "id",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "baseExerciseItem_exercise"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Me",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '99a6a1a624f0435758f49894490ae743';

module.exports = node;
