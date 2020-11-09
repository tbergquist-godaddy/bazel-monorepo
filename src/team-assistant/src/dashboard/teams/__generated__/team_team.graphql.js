/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type team_team$ref: FragmentReference;
declare export opaque type team_team$fragmentType: team_team$ref;
export type team_team = {|
  +name: ?string,
  +$refType: team_team$ref,
|};
export type team_team$data = team_team;
export type team_team$key = {
  +$data?: team_team$data,
  +$fragmentRefs: team_team$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "team_team",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Team",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '5a3930a1690524e0cfaac7f8453d8a62';

module.exports = node;
