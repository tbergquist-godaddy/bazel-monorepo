/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type dayList_days$ref = any;
type deleteWeek_week$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type week_week$ref: FragmentReference;
declare export opaque type week_week$fragmentType: week_week$ref;
export type week_week = {|
  +id: string,
  +name: ?string,
  +days: ?{|
    +__id: string,
    +edges: ?$ReadOnlyArray<?{|
      +__typename: string,
      +$fragmentRefs: dayList_days$ref,
    |}>,
  |},
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


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "days"
        ]
      }
    ]
  },
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
      "alias": "days",
      "args": null,
      "concreteType": "DayConnection",
      "kind": "LinkedField",
      "name": "__week_days_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "DayEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "Day",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v0/*: any*/)
              ],
              "storageKey": null
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "dayList_days"
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
})();
// prettier-ignore
(node/*: any*/).hash = 'b4ebb975fd029ae3c17a3f519b8d24d8';

module.exports = node;
