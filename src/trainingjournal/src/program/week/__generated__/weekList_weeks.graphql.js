/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type addWeek_program$ref = any;
type deleteProgram_program$ref = any;
type week_week$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type weekList_weeks$ref: FragmentReference;
declare export opaque type weekList_weeks$fragmentType: weekList_weeks$ref;
export type weekList_weeks = {|
  +weeks: ?{|
    +__id: string,
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: week_week$ref,
      |}
    |}>,
  |},
  +$fragmentRefs: addWeek_program$ref & deleteProgram_program$ref,
  +$refType: weekList_weeks$ref,
|};
export type weekList_weeks$data = weekList_weeks;
export type weekList_weeks$key = {
  +$data?: weekList_weeks$data,
  +$fragmentRefs: weekList_weeks$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "weeks"
        ]
      }
    ]
  },
  "name": "weekList_weeks",
  "selections": [
    {
      "alias": "weeks",
      "args": null,
      "concreteType": "WeekConnection",
      "kind": "LinkedField",
      "name": "__WeekList_weeks_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "WeekEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Week",
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
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "week_week"
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
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
      "name": "addWeek_program"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "deleteProgram_program"
    }
  ],
  "type": "Program",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '8f2f866382dd785e7cddc766bed29828';

module.exports = node;
