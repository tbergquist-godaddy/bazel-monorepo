/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type addTeamFormMutationVariables = {|
  name: string,
  connections: $ReadOnlyArray<string>,
|};
export type addTeamFormMutationResponse = {|
  +createTeam: ?({|
    +__typename: "CreateTeamEdge",
    +teamEdge: ?{|
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
export type addTeamFormMutation = {|
  variables: addTeamFormMutationVariables,
  response: addTeamFormMutationResponse,
|};
*/


/*
mutation addTeamFormMutation(
  $name: String!
) {
  createTeam(name: $name) {
    __typename
    ... on CreateTeamEdge {
      teamEdge {
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
  "name": "name"
},
v2 = [
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "name"
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
  "concreteType": "TeamEdge",
  "kind": "LinkedField",
  "name": "teamEdge",
  "plural": false,
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
    "name": "addTeamFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "createTeam",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v4/*: any*/)
            ],
            "type": "CreateTeamEdge",
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
    "name": "addTeamFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "createTeam",
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
                "name": "teamEdge",
                "handleArgs": [
                  {
                    "kind": "Variable",
                    "name": "connections",
                    "variableName": "connections"
                  }
                ]
              }
            ],
            "type": "CreateTeamEdge",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6577aa69e407d90aa9769d5b00ced215",
    "id": null,
    "metadata": {},
    "name": "addTeamFormMutation",
    "operationKind": "mutation",
    "text": "mutation addTeamFormMutation(\n  $name: String!\n) {\n  createTeam(name: $name) {\n    __typename\n    ... on CreateTeamEdge {\n      teamEdge {\n        node {\n          id\n          name\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '44e9384df39ec7a9d7594ba47180e639';

module.exports = node;
