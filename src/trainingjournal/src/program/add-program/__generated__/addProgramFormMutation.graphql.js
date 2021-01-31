/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateProgramInput = {|
  name: string
|};
export type addProgramFormMutationVariables = {|
  program: CreateProgramInput,
  connections: $ReadOnlyArray<string>,
|};
export type addProgramFormMutationResponse = {|
  +createProgram: ?({|
    +__typename: "CreateProgram",
    +programEdge: ?{|
      +node: ?{|
        +id: string,
        +name: ?string,
      |}
    |},
  |} | {|
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    +__typename: "%other"
  |})
|};
export type addProgramFormMutation = {|
  variables: addProgramFormMutationVariables,
  response: addProgramFormMutationResponse,
|};
*/


/*
mutation addProgramFormMutation(
  $program: CreateProgramInput!
) {
  createProgram(program: $program) {
    __typename
    ... on CreateProgram {
      programEdge {
        node {
          id
          name
        }
      }
    }
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
  "name": "program"
},
v2 = [
  {
    "kind": "Variable",
    "name": "program",
    "variableName": "program"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "ProgramEdge",
  "kind": "LinkedField",
  "name": "programEdge",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Program",
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
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
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
    "name": "addProgramFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "createProgram",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v4/*: any*/)
            ],
            "type": "CreateProgram",
            "abstractKey": null
          }
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
    "name": "addProgramFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "createProgram",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "filters": null,
                "handle": "appendEdge",
                "key": "",
                "kind": "LinkedHandle",
                "name": "programEdge",
                "handleArgs": [
                  {
                    "kind": "Variable",
                    "name": "connections",
                    "variableName": "connections"
                  }
                ]
              }
            ],
            "type": "CreateProgram",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "06be21fbe84552f0464ae46cc6266e74",
    "id": null,
    "metadata": {},
    "name": "addProgramFormMutation",
    "operationKind": "mutation",
    "text": "mutation addProgramFormMutation(\n  $program: CreateProgramInput!\n) {\n  createProgram(program: $program) {\n    __typename\n    ... on CreateProgram {\n      programEdge {\n        node {\n          id\n          name\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9b97576c53c2c13c366e978720780d58';

module.exports = node;
