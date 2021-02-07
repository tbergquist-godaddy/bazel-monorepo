/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type weekList_weeks$ref = any;
export type programQueryVariables = {|
  id: string
|};
export type programQueryResponse = {|
  +node: ?{|
    +name?: ?string,
    +$fragmentRefs: weekList_weeks$ref,
  |}
|};
export type programQuery = {|
  variables: programQueryVariables,
  response: programQueryResponse,
|};
*/


/*
query programQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ... on Program {
      name
    }
    ...weekList_weeks
    id
  }
}

fragment addWeek_program on Program {
  id
}

fragment dayList_days on DayEdge {
  node {
    id
    ...day_day
  }
}

fragment day_day on Day {
  name
  id
}

fragment deleteProgram_program on Program {
  id
  name
}

fragment deleteWeek_week on Week {
  id
  name
}

fragment weekList_weeks on Program {
  ...addWeek_program
  ...deleteProgram_program
  weeks(first: 50) {
    edges {
      node {
        id
        ...week_week
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment week_week on Week {
  id
  name
  days(first: 7) {
    edges {
      __typename
      ...dayList_days
      cursor
      node {
        __typename
        id
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  ...deleteWeek_week
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
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
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 50
  }
],
v6 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 7
  }
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v8 = {
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
v9 = {
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "programQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/)
            ],
            "type": "Program",
            "abstractKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "weekList_weeks"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "programQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": (v5/*: any*/),
                "concreteType": "WeekConnection",
                "kind": "LinkedField",
                "name": "weeks",
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
                          (v4/*: any*/),
                          (v2/*: any*/),
                          {
                            "alias": null,
                            "args": (v6/*: any*/),
                            "concreteType": "DayConnection",
                            "kind": "LinkedField",
                            "name": "days",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "DayEdge",
                                "kind": "LinkedField",
                                "name": "edges",
                                "plural": true,
                                "selections": [
                                  (v3/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Day",
                                    "kind": "LinkedField",
                                    "name": "node",
                                    "plural": false,
                                    "selections": [
                                      (v4/*: any*/),
                                      (v2/*: any*/),
                                      (v3/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v7/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v8/*: any*/),
                              (v9/*: any*/)
                            ],
                            "storageKey": "days(first:7)"
                          },
                          {
                            "alias": null,
                            "args": (v6/*: any*/),
                            "filters": null,
                            "handle": "connection",
                            "key": "week_days",
                            "kind": "LinkedHandle",
                            "name": "days"
                          },
                          (v3/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v7/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v8/*: any*/),
                  (v9/*: any*/)
                ],
                "storageKey": "weeks(first:50)"
              },
              {
                "alias": null,
                "args": (v5/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "WeekList_weeks",
                "kind": "LinkedHandle",
                "name": "weeks"
              }
            ],
            "type": "Program",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "271054f4ed12b13d37a9e775ce17d93a",
    "id": null,
    "metadata": {},
    "name": "programQuery",
    "operationKind": "query",
    "text": "query programQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on Program {\n      name\n    }\n    ...weekList_weeks\n    id\n  }\n}\n\nfragment addWeek_program on Program {\n  id\n}\n\nfragment dayList_days on DayEdge {\n  node {\n    id\n    ...day_day\n  }\n}\n\nfragment day_day on Day {\n  name\n  id\n}\n\nfragment deleteProgram_program on Program {\n  id\n  name\n}\n\nfragment deleteWeek_week on Week {\n  id\n  name\n}\n\nfragment weekList_weeks on Program {\n  ...addWeek_program\n  ...deleteProgram_program\n  weeks(first: 50) {\n    edges {\n      node {\n        id\n        ...week_week\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment week_week on Week {\n  id\n  name\n  days(first: 7) {\n    edges {\n      __typename\n      ...dayList_days\n      cursor\n      node {\n        __typename\n        id\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  ...deleteWeek_week\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3cb7d511a28e6e36ce53cea2561e8030';

module.exports = node;
