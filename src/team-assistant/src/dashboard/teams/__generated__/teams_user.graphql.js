/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type team_team$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type teams_user$ref: FragmentReference;
declare export opaque type teams_user$fragmentType: teams_user$ref;
export type teams_user = {|
  +teams: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: team_team$ref,
      |}
    |}>
  |},
  +$refType: teams_user$ref,
|};
export type teams_user$data = teams_user;
export type teams_user$key = {
  +$data?: teams_user$data,
  +$fragmentRefs: teams_user$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "teams_user",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 5
        }
      ],
      "concreteType": "TeamConnection",
      "kind": "LinkedField",
      "name": "teams",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "TeamEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Team",
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
                  "name": "team_team"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "teams(first:5)"
    }
  ],
  "type": "User",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'e0bbe8bbac2adaad6283130acde779df';

module.exports = node;
