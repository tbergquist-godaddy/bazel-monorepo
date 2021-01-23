// @flow

import { Me } from '@tj-gql/application/models';
import type { GraphqlContext } from '@tj-gql/application/services';

export default {
  type: Me,
  resolve: (_: mixed, __: mixed, { user }: GraphqlContext): $FlowFixMe => {
    if (user == null) {
      return null;
    }
    return user;
  },
};
