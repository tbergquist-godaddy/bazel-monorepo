/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type day_day$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type dayList_days$ref: FragmentReference;
declare export opaque type dayList_days$fragmentType: dayList_days$ref;
export type dayList_days = $ReadOnlyArray<{|
  +node: ?{|
    +id: string,
    +$fragmentRefs: day_day$ref,
  |},
  +$refType: dayList_days$ref,
|}>;
export type dayList_days$data = dayList_days;
export type dayList_days$key = $ReadOnlyArray<{
  +$data?: dayList_days$data,
  +$fragmentRefs: dayList_days$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "dayList_days",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Day",
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
          "name": "day_day"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "DayEdge",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '8bd33eeec240bbff3282a598fc0a93d1';

module.exports = node;
