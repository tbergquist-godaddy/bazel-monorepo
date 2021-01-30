/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type baseExerciseItem_exercise$ref: FragmentReference;
declare export opaque type baseExerciseItem_exercise$fragmentType: baseExerciseItem_exercise$ref;
export type baseExerciseItem_exercise = {|
  +name: ?string,
  +muscleGroups: ?$ReadOnlyArray<?string>,
  +$refType: baseExerciseItem_exercise$ref,
|};
export type baseExerciseItem_exercise$data = baseExerciseItem_exercise;
export type baseExerciseItem_exercise$key = {
  +$data?: baseExerciseItem_exercise$data,
  +$fragmentRefs: baseExerciseItem_exercise$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "baseExerciseItem_exercise",
  "selections": [
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
  "type": "Exercise",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '06863bc0cdcab328b80606330f93cc27';

module.exports = node;
