/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type deleteWeek_week$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type week_week$ref: FragmentReference;
declare export opaque type week_week$fragmentType: week_week$ref;
export type week_week = {|
  +id: string,
  +name: ?string,
  +$fragmentRefs: deleteWeek_week$ref,
  +$refType: week_week$ref,
|};
export type week_week$data = week_week;
export type week_week$key = {
  +$data?: week_week$data,
  +$fragmentRefs: week_week$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "week_week",
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "deleteWeek_week"
    }
  ],
  "type": "Week",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'd43f58da11a848122e2bd7caa7911223';

module.exports = node;
