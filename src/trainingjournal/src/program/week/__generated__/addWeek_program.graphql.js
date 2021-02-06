/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type addWeek_program$ref: FragmentReference;
declare export opaque type addWeek_program$fragmentType: addWeek_program$ref;
export type addWeek_program = {|
  +id: string,
  +$refType: addWeek_program$ref,
|};
export type addWeek_program$data = addWeek_program;
export type addWeek_program$key = {
  +$data?: addWeek_program$data,
  +$fragmentRefs: addWeek_program$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "addWeek_program",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Program",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '41faa1827153fe637b5c7ac91dc08511';

module.exports = node;
