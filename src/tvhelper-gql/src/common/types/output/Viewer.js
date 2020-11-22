// @flow

import { GraphQLUnionType } from 'graphql';

import TVHViewer from '../../../tvhelper/account/types/output/TvHelperViewer';
import Unauthorized from './Unauthorized';

export default (new GraphQLUnionType({
  name: 'Viewer',
  types: [TVHViewer, Unauthorized],
  resolveType: (value) => {
    if (value === 'tvhelper') {
      return TVHViewer;
    }
    return Unauthorized;
  },
}): GraphQLUnionType);
