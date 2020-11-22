// @flow

import { GraphQLObjectType, GraphQLString } from 'graphql';
import GlobalID from '@adeira/graphql-global-id';
import {
  connectionArgs,
  type ConnectionArguments,
  connectionFromArray,
} from '@adeira/graphql-relay';
import * as R from 'ramda';

import type { GraphqlContextType } from '../../../../services/createGraphqlContext';
import TvShowConnection from '../../../tvshow/types/output/TvShowConnection';
import SortOptions from '../../../tvshow/types/input/SortOptions';
import type { TvShow as TvShowType } from '../../../tvshow/TvShow';

type SortBy =
  | 'name'
  | '_embedded.nextepisode.airdate'
  | '_embedded.previousepisode.airdate'
  | 'status';
type Args = {
  +options: {|
    +sortDirection: 'ascending' | 'descending',
    +sortBy: SortBy,
  |},
  ...$Exact<ConnectionArguments>,
  ...
};

export default (new GraphQLObjectType({
  name: 'TvHelperViewer',
  description: 'The viewer object for the current logged in user in tvhelper app',
  isTypeOf: (value) => value === 'tvhelper',
  fields: {
    id: GlobalID((_: mixed, { user }: GraphqlContextType) => user?.id ?? ''),
    username: {
      type: GraphQLString,
      resolve: (_: mixed, __: mixed, { user }: GraphqlContextType) => {
        return user?.username;
      },
    },

    favorites: {
      type: TvShowConnection,
      description: 'Your favorite tv shows',
      args: {
        ...connectionArgs,
        options: {
          type: SortOptions,
          defaultValue: {
            sortDirection: 'ascending',
            sortBy: 'name',
          },
        },
      },
      resolve: async (_: mixed, args: Args, { user, dataLoader }: GraphqlContextType) => {
        const userId = user?.id ?? '';
        const savedFavorites = await dataLoader.tvhelper.favorites.load(userId);

        const serieIds = savedFavorites.map((item) => item.serieId.toString());
        const favorites = await dataLoader.tvhelper.tvDetail.loadMany(serieIds);

        const sortBy =
          args.options.sortDirection === 'ascending'
            ? R.ascend(R.path(args.options.sortBy.split('.')))
            : R.descend(R.path(args.options.sortBy.split('.')));

        return connectionFromArray<TvShowType>(R.sort(sortBy, favorites), args);
      },
    },
  },
}): GraphQLObjectType);
