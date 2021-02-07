/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type deleteWeekMutationVariables = {|
  id: string,
  connections: $ReadOnlyArray<string>,
|};
export type deleteWeekMutationResponse = {|
  +deleteWeek: ?{|
    +id: ?string,
    +success: ?boolean,
  |}
|};
export type deleteWeekMutation = {|
  variables: deleteWeekMutationVariables,
  response: deleteWeekMutationResponse,
|};
*/


/*
mutation deleteWeekMutation(
  $id: ID!
) {
  deleteWeek(id: $id) {
    id
    success
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "success",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "deleteWeekMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "RangeDelete",
        "kind": "LinkedField",
        "name": "deleteWeek",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "RootMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "deleteWeekMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "RangeDelete",
        "kind": "LinkedField",
        "name": "deleteWeek",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteEdge",
            "key": "",
            "kind": "ScalarHandle",
            "name": "id",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f9c616fff053f68bfe95e8788c2e99a8",
    "id": null,
    "metadata": {},
    "name": "deleteWeekMutation",
    "operationKind": "mutation",
    "text": "mutation deleteWeekMutation(\n  $id: ID!\n) {\n  deleteWeek(id: $id) {\n    id\n    success\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'db9d3bcdd7587a0ede6c8478bcc1eb31';

module.exports = node;
