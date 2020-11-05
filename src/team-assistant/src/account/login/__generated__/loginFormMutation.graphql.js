/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type loginFormMutationVariables = {|
  password: string,
  email: string,
|};
export type loginFormMutationResponse = {|
  +login: ?{|
    +token: ?string
  |}
|};
export type loginFormMutation = {|
  variables: loginFormMutationVariables,
  response: loginFormMutationResponse,
|};
*/


/*
mutation loginFormMutation(
  $password: String!
  $email: String!
) {
  login(password: $password, email: $email) {
    token
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
    "alias": null,
    "args": [
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
    "concreteType": "LoginResponse",
    "kind": "LinkedField",
    "name": "login",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "token",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "loginFormMutation",
    "selections": (v2/*: any*/),
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
    "name": "loginFormMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "ee531111beb22e3500edd16ce9ad025f",
    "id": null,
    "metadata": {},
    "name": "loginFormMutation",
    "operationKind": "mutation",
    "text": "mutation loginFormMutation(\n  $password: String!\n  $email: String!\n) {\n  login(password: $password, email: $email) {\n    token\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f5df30aa50fd3967119cb69fc364eec4';

module.exports = node;
