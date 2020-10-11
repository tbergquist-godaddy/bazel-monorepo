/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type homeQueryVariables = {||};
export type homeQueryResponse = {|
  +test: {|
    +id: string,
    +firstName: string,
    +lastName: ?string,
  |}
|};
export type homeQuery = {|
  variables: homeQueryVariables,
  response: homeQueryResponse,
|};
*/

/*
query homeQuery {
  test(id: "1") {
    id
    firstName
    lastName
  }
}
*/

const node /*: ConcreteRequest*/ = (function () {
  var v0 = [
    {
      alias: null,
      args: [
        {
          kind: 'Literal',
          name: 'id',
          value: '1',
        },
      ],
      concreteType: 'Test',
      kind: 'LinkedField',
      name: 'test',
      plural: false,
      selections: [
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'id',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'firstName',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'lastName',
          storageKey: null,
        },
      ],
      storageKey: 'test(id:"1")',
    },
  ];
  return {
    fragment: {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'homeQuery',
      selections: (v0 /*: any*/),
      type: 'Query',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: [],
      kind: 'Operation',
      name: 'homeQuery',
      selections: (v0 /*: any*/),
    },
    params: {
      cacheID: '0f9c81adb3012f65c7446c8ea072262a',
      id: null,
      metadata: {},
      name: 'homeQuery',
      operationKind: 'query',
      text: 'query homeQuery {\n  test(id: "1") {\n    id\n    firstName\n    lastName\n  }\n}\n',
    },
  };
})();
// prettier-ignore
(node/*: any*/).hash = '13a4a11e3859f76078dd7653303d1542';

module.exports = node;
