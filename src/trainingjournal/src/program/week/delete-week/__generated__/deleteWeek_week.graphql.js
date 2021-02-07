/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type deleteWeek_week$ref: FragmentReference;
declare export opaque type deleteWeek_week$fragmentType: deleteWeek_week$ref;
export type deleteWeek_week = {|
  +id: string,
  +name: ?string,
  +$refType: deleteWeek_week$ref,
|};
export type deleteWeek_week$data = deleteWeek_week;
export type deleteWeek_week$key = {
  +$data?: deleteWeek_week$data,
  +$fragmentRefs: deleteWeek_week$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "deleteWeek_week",
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
  "type": "Week",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'ad5258a38bf86fd036539eece8c77a61';

module.exports = node;
