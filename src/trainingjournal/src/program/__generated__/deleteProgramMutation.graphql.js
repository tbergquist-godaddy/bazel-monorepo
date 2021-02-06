/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type deleteProgramMutationVariables = {|
  id: string,
  connections: $ReadOnlyArray<string>,
|};
export type deleteProgramMutationResponse = {|
  +deleteProgram: ?{|
    +id: ?string,
    +success: ?boolean,
  |}
|};
export type deleteProgramMutation = {|
  variables: deleteProgramMutationVariables,
  response: deleteProgramMutationResponse,
|};
*/


/*
mutation deleteProgramMutation(
  $id: ID!
) {
  deleteProgram(id: $id) {
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
    "name": "deleteProgramMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "RangeDelete",
        "kind": "LinkedField",
        "name": "deleteProgram",
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
    "name": "deleteProgramMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "RangeDelete",
        "kind": "LinkedField",
        "name": "deleteProgram",
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
    "cacheID": "32d9b6adb13f96da7319c70e2ec2e070",
    "id": null,
    "metadata": {},
    "name": "deleteProgramMutation",
    "operationKind": "mutation",
    "text": "mutation deleteProgramMutation(\n  $id: ID!\n) {\n  deleteProgram(id: $id) {\n    id\n    success\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a5b32ee27b2497e609e27eb3a46e1228';

module.exports = node;
