/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type deleteProgram_program$ref: FragmentReference;
declare export opaque type deleteProgram_program$fragmentType: deleteProgram_program$ref;
export type deleteProgram_program = {|
  +id: string,
  +name: ?string,
  +$refType: deleteProgram_program$ref,
|};
export type deleteProgram_program$data = deleteProgram_program;
export type deleteProgram_program$key = {
  +$data?: deleteProgram_program$data,
  +$fragmentRefs: deleteProgram_program$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "deleteProgram_program",
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
    }
  ],
  "type": "Program",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'e4ee0deaf6f361be5cd5d844faa09d5b';

module.exports = node;
