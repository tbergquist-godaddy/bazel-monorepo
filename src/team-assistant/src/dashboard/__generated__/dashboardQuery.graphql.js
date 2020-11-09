/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type teams_user$ref = any;
export type dashboardQueryVariables = {||};
export type dashboardQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: teams_user$ref
  |}
|};
export type dashboardQuery = {|
  variables: dashboardQueryVariables,
  response: dashboardQueryResponse,
|};
*/


/*
query dashboardQuery {
  viewer {
    __typename
    ... on User {
      ...teams_user
    }
  }
}

fragment team_team on Team {
  name
}

fragment teams_user on User {
  teams(first: 5) {
    edges {
      node {
        id
        ...team_team
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "dashboardQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "teams_user"
              }
            ],
            "type": "User",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "dashboardQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
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
                  }
                ],
                "storageKey": "teams(first:5)"
              }
            ],
            "type": "User",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f26554ce1803bddf9b090237ec6a4c8f",
    "id": null,
    "metadata": {},
    "name": "dashboardQuery",
    "operationKind": "query",
    "text": "query dashboardQuery {\n  viewer {\n    __typename\n    ... on User {\n      ...teams_user\n    }\n  }\n}\n\nfragment team_team on Team {\n  name\n}\n\nfragment teams_user on User {\n  teams(first: 5) {\n    edges {\n      node {\n        id\n        ...team_team\n      }\n    }\n  }\n}\n"
  }
};
// prettier-ignore
(node/*: any*/).hash = '83b6967a748da3369a15b783b4d4b521';

module.exports = node;
