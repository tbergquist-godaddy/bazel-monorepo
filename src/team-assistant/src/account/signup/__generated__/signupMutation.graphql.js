/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateAccountErrorReason = "EMAIL_EXISTS" | "INVALID_EMAIL" | "MISSING_PASSWORD" | "UNKNOWN" | "%future added value";
export type signupMutationVariables = {|
  password: string,
  email: string,
|};
export type signupMutationResponse = {|
  +createAccount: {|
    +__typename: "Identity",
    +reason?: CreateAccountErrorReason,
  |}
|};
export type signupMutation = {|
  variables: signupMutationVariables,
  response: signupMutationResponse,
|};
*/


/*
mutation signupMutation(
  $password: String!
  $email: String!
) {
  createAccount(password: $password, email: $email) {
    __typename
    ... on Identity {
      __typename
    }
    ... on CreateAccountError {
      reason
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "email"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "password"
},
v2 = [
  {
    "kind": "Variable",
    "name": "email",
    "variableName": "email"
  },
  {
    "kind": "Variable",
    "name": "password",
    "variableName": "password"
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
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "reason",
      "storageKey": null
    }
  ],
  "type": "CreateAccountError",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "signupMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "createAccount",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/)
            ],
            "type": "Identity",
            "abstractKey": null
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "signupMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "createAccount",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c8fbeaedc34d0806c7d17636e425b349",
    "id": null,
    "metadata": {},
    "name": "signupMutation",
    "operationKind": "mutation",
    "text": "mutation signupMutation(\n  $password: String!\n  $email: String!\n) {\n  createAccount(password: $password, email: $email) {\n    __typename\n    ... on Identity {\n      __typename\n    }\n    ... on CreateAccountError {\n      reason\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3378e13ce9c3f4683f9945074e0c8052';

module.exports = node;
