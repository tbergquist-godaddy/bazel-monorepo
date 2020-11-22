// @flow

import type { User, Request } from '../types';
import getTvhelperLoaders, { type TvHelperDataLoaders } from '../tvhelper/getDataloaders';

export type GraphqlContextType = {|
  +user: User,
  +dataLoader: {|
    +tvhelper: TvHelperDataLoaders,
  |},
|};

export default function createContext(request: Request): GraphqlContextType {
  return {
    user: request.user,
    dataLoader: {
      tvhelper: getTvhelperLoaders(request.user),
    },
  };
}
