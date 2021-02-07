/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type day_day$ref: FragmentReference;
declare export opaque type day_day$fragmentType: day_day$ref;
export type day_day = {|
  +name: ?string,
  +id: string,
  +$refType: day_day$ref,
|};
export type day_day$data = day_day;
export type day_day$key = {
  +$data?: day_day$data,
  +$fragmentRefs: day_day$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "day_day",
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
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Day",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '1faa9ba3c101ac2149179bc9e3e2d932';

module.exports = node;
