/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type week_week$ref: FragmentReference;
declare export opaque type week_week$fragmentType: week_week$ref;
export type week_week = {|
  +id: string,
  +name: ?string,
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
    }
  ],
  "type": "Week",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'dcc1189a51087a16cb7758c4acc8bca3';

module.exports = node;
