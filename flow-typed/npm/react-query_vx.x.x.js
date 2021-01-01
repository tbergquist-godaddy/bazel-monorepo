// flow-typed signature: 09955620564574388a71d4e5de440d67
// flow-typed version: <<STUB>>/react-query_v3.2.0/flow_v0.140.0

/**
 * This is an autogenerated libdef stub for:
 *
 *   'react-query'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

declare module 'react-query' {
  declare type FetchFunction = Function;
  declare export type QueryConfig = {
    staleTime?: number,
    refetchOnWindowFocus?: boolean,
    suspense?: boolean,
  };
  declare type QueryClientConfig = {
    defaultOptions?: {
      queries?: QueryConfig,
      ...
    },
  };

  declare type CacheKey = string | [string, string | number];

  declare export class QueryClient {
    constructor(config?: QueryClientConfig): this;
    prefetchQuery: (key: CacheKey, fetchFn: FetchFunction, config: QueryConfig) => void;
    invalidateQueries: (key: CacheKey) => void;
    clear: () => void;
  }

  declare export var QueryClientProvider: React$ComponentType<{
    client: QueryClient,
    children: React$Node,
  }>;

  declare export type UseQueryResponse<T> = {
    data: T,
  };

  declare export function useQuery<T>(
    key: CacheKey,
    fn: FetchFunction,
    config?: QueryConfig,
  ): UseQueryResponse<T>;

  declare export function useQueryClient(): QueryClient;

  declare export type MutateConfig<T> = {
    onSuccess: (data: T) => void,
    onError?: () => void,
    ...
  };

  declare export type MutationResponse = {
    mutate: Function,
    isLoading: boolean,
    ...
  };

  declare export function useMutation<T>(
    fn: FetchFunction,
    config: MutateConfig<T>,
  ): MutationResponse;
}

/**
 * We include stubs for each file inside this npm package in case you need to
 * require those files directly. Feel free to delete any files that aren't
 * needed.
 */
declare module 'react-query/dist/persist-localstorage-experimental.development' {
  declare module.exports: any;
}

declare module 'react-query/dist/persist-localstorage-experimental.production.min' {
  declare module.exports: any;
}

declare module 'react-query/dist/react-query-core.development' {
  declare module.exports: any;
}

declare module 'react-query/dist/react-query-core.production.min' {
  declare module.exports: any;
}

declare module 'react-query/dist/react-query-devtools.development' {
  declare module.exports: any;
}

declare module 'react-query/dist/react-query-devtools.production.min' {
  declare module.exports: any;
}

declare module 'react-query/dist/react-query-hydration.development' {
  declare module.exports: any;
}

declare module 'react-query/dist/react-query-hydration.production.min' {
  declare module.exports: any;
}

declare module 'react-query/dist/react-query.development' {
  declare module.exports: any;
}

declare module 'react-query/dist/react-query.production.min' {
  declare module.exports: any;
}

declare module 'react-query/es/core/focusManager' {
  declare module.exports: any;
}

declare module 'react-query/es/core' {
  declare module.exports: any;
}

declare module 'react-query/es/core/infiniteQueryBehavior' {
  declare module.exports: any;
}

declare module 'react-query/es/core/infiniteQueryObserver' {
  declare module.exports: any;
}

declare module 'react-query/es/core/logger' {
  declare module.exports: any;
}

declare module 'react-query/es/core/mutation' {
  declare module.exports: any;
}

declare module 'react-query/es/core/mutationCache' {
  declare module.exports: any;
}

declare module 'react-query/es/core/mutationObserver' {
  declare module.exports: any;
}

declare module 'react-query/es/core/notifyManager' {
  declare module.exports: any;
}

declare module 'react-query/es/core/onlineManager' {
  declare module.exports: any;
}

declare module 'react-query/es/core/queriesObserver' {
  declare module.exports: any;
}

declare module 'react-query/es/core/query' {
  declare module.exports: any;
}

declare module 'react-query/es/core/queryCache' {
  declare module.exports: any;
}

declare module 'react-query/es/core/queryClient' {
  declare module.exports: any;
}

declare module 'react-query/es/core/queryObserver' {
  declare module.exports: any;
}

declare module 'react-query/es/core/retryer' {
  declare module.exports: any;
}

declare module 'react-query/es/core/subscribable' {
  declare module.exports: any;
}

declare module 'react-query/es/core/types' {
  declare module.exports: any;
}

declare module 'react-query/es/core/utils' {
  declare module.exports: any;
}

declare module 'react-query/es/devtools/devtools' {
  declare module.exports: any;
}

declare module 'react-query/es/devtools/Explorer' {
  declare module.exports: any;
}

declare module 'react-query/es/devtools' {
  declare module.exports: any;
}

declare module 'react-query/es/devtools/Logo' {
  declare module.exports: any;
}

declare module 'react-query/es/devtools/styledComponents' {
  declare module.exports: any;
}

declare module 'react-query/es/devtools/theme' {
  declare module.exports: any;
}

declare module 'react-query/es/devtools/useLocalStorage' {
  declare module.exports: any;
}

declare module 'react-query/es/devtools/useMediaQuery' {
  declare module.exports: any;
}

declare module 'react-query/es/devtools/utils' {
  declare module.exports: any;
}

declare module 'react-query/es/hydration/hydration' {
  declare module.exports: any;
}

declare module 'react-query/es/hydration' {
  declare module.exports: any;
}

declare module 'react-query/es/hydration/react' {
  declare module.exports: any;
}

declare module 'react-query/es' {
  declare module.exports: any;
}

declare module 'react-query/es/persist-localstorage-experimental' {
  declare module.exports: any;
}

declare module 'react-query/es/react' {
  declare module.exports: any;
}

declare module 'react-query/es/react/logger' {
  declare module.exports: any;
}

declare module 'react-query/es/react/logger.native' {
  declare module.exports: any;
}

declare module 'react-query/es/react/QueryClientProvider' {
  declare module.exports: any;
}

declare module 'react-query/es/react/QueryErrorResetBoundary' {
  declare module.exports: any;
}

declare module 'react-query/es/react/reactBatchedUpdates' {
  declare module.exports: any;
}

declare module 'react-query/es/react/reactBatchedUpdates.native' {
  declare module.exports: any;
}

declare module 'react-query/es/react/setBatchUpdatesFn' {
  declare module.exports: any;
}

declare module 'react-query/es/react/setLogger' {
  declare module.exports: any;
}

declare module 'react-query/es/react/types' {
  declare module.exports: any;
}

declare module 'react-query/es/react/useBaseQuery' {
  declare module.exports: any;
}

declare module 'react-query/es/react/useInfiniteQuery' {
  declare module.exports: any;
}

declare module 'react-query/es/react/useIsFetching' {
  declare module.exports: any;
}

declare module 'react-query/es/react/useMutation' {
  declare module.exports: any;
}

declare module 'react-query/es/react/useQueries' {
  declare module.exports: any;
}

declare module 'react-query/es/react/useQuery' {
  declare module.exports: any;
}

declare module 'react-query/lib/core/focusManager' {
  declare module.exports: any;
}

declare module 'react-query/lib/core' {
  declare module.exports: any;
}

declare module 'react-query/lib/core/infiniteQueryBehavior' {
  declare module.exports: any;
}

declare module 'react-query/lib/core/infiniteQueryObserver' {
  declare module.exports: any;
}

declare module 'react-query/lib/core/logger' {
  declare module.exports: any;
}

declare module 'react-query/lib/core/mutation' {
  declare module.exports: any;
}

declare module 'react-query/lib/core/mutationCache' {
  declare module.exports: any;
}

declare module 'react-query/lib/core/mutationObserver' {
  declare module.exports: any;
}

declare module 'react-query/lib/core/notifyManager' {
  declare module.exports: any;
}

declare module 'react-query/lib/core/onlineManager' {
  declare module.exports: any;
}

declare module 'react-query/lib/core/queriesObserver' {
  declare module.exports: any;
}

declare module 'react-query/lib/core/query' {
  declare module.exports: any;
}

declare module 'react-query/lib/core/queryCache' {
  declare module.exports: any;
}

declare module 'react-query/lib/core/queryClient' {
  declare module.exports: any;
}

declare module 'react-query/lib/core/queryObserver' {
  declare module.exports: any;
}

declare module 'react-query/lib/core/retryer' {
  declare module.exports: any;
}

declare module 'react-query/lib/core/subscribable' {
  declare module.exports: any;
}

declare module 'react-query/lib/core/types' {
  declare module.exports: any;
}

declare module 'react-query/lib/core/utils' {
  declare module.exports: any;
}

declare module 'react-query/lib/devtools/devtools' {
  declare module.exports: any;
}

declare module 'react-query/lib/devtools/Explorer' {
  declare module.exports: any;
}

declare module 'react-query/lib/devtools' {
  declare module.exports: any;
}

declare module 'react-query/lib/devtools/Logo' {
  declare module.exports: any;
}

declare module 'react-query/lib/devtools/styledComponents' {
  declare module.exports: any;
}

declare module 'react-query/lib/devtools/theme' {
  declare module.exports: any;
}

declare module 'react-query/lib/devtools/useLocalStorage' {
  declare module.exports: any;
}

declare module 'react-query/lib/devtools/useMediaQuery' {
  declare module.exports: any;
}

declare module 'react-query/lib/devtools/utils' {
  declare module.exports: any;
}

declare module 'react-query/lib/hydration/hydration' {
  declare module.exports: any;
}

declare module 'react-query/lib/hydration' {
  declare module.exports: any;
}

declare module 'react-query/lib/hydration/react' {
  declare module.exports: any;
}

declare module 'react-query/lib' {
  declare module.exports: any;
}

declare module 'react-query/lib/persist-localstorage-experimental' {
  declare module.exports: any;
}

declare module 'react-query/lib/react' {
  declare module.exports: any;
}

declare module 'react-query/lib/react/logger' {
  declare module.exports: any;
}

declare module 'react-query/lib/react/logger.native' {
  declare module.exports: any;
}

declare module 'react-query/lib/react/QueryClientProvider' {
  declare module.exports: any;
}

declare module 'react-query/lib/react/QueryErrorResetBoundary' {
  declare module.exports: any;
}

declare module 'react-query/lib/react/reactBatchedUpdates' {
  declare module.exports: any;
}

declare module 'react-query/lib/react/reactBatchedUpdates.native' {
  declare module.exports: any;
}

declare module 'react-query/lib/react/setBatchUpdatesFn' {
  declare module.exports: any;
}

declare module 'react-query/lib/react/setLogger' {
  declare module.exports: any;
}

declare module 'react-query/lib/react/types' {
  declare module.exports: any;
}

declare module 'react-query/lib/react/useBaseQuery' {
  declare module.exports: any;
}

declare module 'react-query/lib/react/useInfiniteQuery' {
  declare module.exports: any;
}

declare module 'react-query/lib/react/useIsFetching' {
  declare module.exports: any;
}

declare module 'react-query/lib/react/useMutation' {
  declare module.exports: any;
}

declare module 'react-query/lib/react/useQueries' {
  declare module.exports: any;
}

declare module 'react-query/lib/react/useQuery' {
  declare module.exports: any;
}

// Filename aliases
declare module 'react-query/dist/persist-localstorage-experimental.development.js' {
  declare module.exports: $Exports<'react-query/dist/persist-localstorage-experimental.development'>;
}
declare module 'react-query/dist/persist-localstorage-experimental.production.min.js' {
  declare module.exports: $Exports<'react-query/dist/persist-localstorage-experimental.production.min'>;
}
declare module 'react-query/dist/react-query-core.development.js' {
  declare module.exports: $Exports<'react-query/dist/react-query-core.development'>;
}
declare module 'react-query/dist/react-query-core.production.min.js' {
  declare module.exports: $Exports<'react-query/dist/react-query-core.production.min'>;
}
declare module 'react-query/dist/react-query-devtools.development.js' {
  declare module.exports: $Exports<'react-query/dist/react-query-devtools.development'>;
}
declare module 'react-query/dist/react-query-devtools.production.min.js' {
  declare module.exports: $Exports<'react-query/dist/react-query-devtools.production.min'>;
}
declare module 'react-query/dist/react-query-hydration.development.js' {
  declare module.exports: $Exports<'react-query/dist/react-query-hydration.development'>;
}
declare module 'react-query/dist/react-query-hydration.production.min.js' {
  declare module.exports: $Exports<'react-query/dist/react-query-hydration.production.min'>;
}
declare module 'react-query/dist/react-query.development.js' {
  declare module.exports: $Exports<'react-query/dist/react-query.development'>;
}
declare module 'react-query/dist/react-query.production.min.js' {
  declare module.exports: $Exports<'react-query/dist/react-query.production.min'>;
}
declare module 'react-query/es/core/focusManager.js' {
  declare module.exports: $Exports<'react-query/es/core/focusManager'>;
}
declare module 'react-query/es/core/index' {
  declare module.exports: $Exports<'react-query/es/core'>;
}
declare module 'react-query/es/core/index.js' {
  declare module.exports: $Exports<'react-query/es/core'>;
}
declare module 'react-query/es/core/infiniteQueryBehavior.js' {
  declare module.exports: $Exports<'react-query/es/core/infiniteQueryBehavior'>;
}
declare module 'react-query/es/core/infiniteQueryObserver.js' {
  declare module.exports: $Exports<'react-query/es/core/infiniteQueryObserver'>;
}
declare module 'react-query/es/core/logger.js' {
  declare module.exports: $Exports<'react-query/es/core/logger'>;
}
declare module 'react-query/es/core/mutation.js' {
  declare module.exports: $Exports<'react-query/es/core/mutation'>;
}
declare module 'react-query/es/core/mutationCache.js' {
  declare module.exports: $Exports<'react-query/es/core/mutationCache'>;
}
declare module 'react-query/es/core/mutationObserver.js' {
  declare module.exports: $Exports<'react-query/es/core/mutationObserver'>;
}
declare module 'react-query/es/core/notifyManager.js' {
  declare module.exports: $Exports<'react-query/es/core/notifyManager'>;
}
declare module 'react-query/es/core/onlineManager.js' {
  declare module.exports: $Exports<'react-query/es/core/onlineManager'>;
}
declare module 'react-query/es/core/queriesObserver.js' {
  declare module.exports: $Exports<'react-query/es/core/queriesObserver'>;
}
declare module 'react-query/es/core/query.js' {
  declare module.exports: $Exports<'react-query/es/core/query'>;
}
declare module 'react-query/es/core/queryCache.js' {
  declare module.exports: $Exports<'react-query/es/core/queryCache'>;
}
declare module 'react-query/es/core/queryClient.js' {
  declare module.exports: $Exports<'react-query/es/core/queryClient'>;
}
declare module 'react-query/es/core/queryObserver.js' {
  declare module.exports: $Exports<'react-query/es/core/queryObserver'>;
}
declare module 'react-query/es/core/retryer.js' {
  declare module.exports: $Exports<'react-query/es/core/retryer'>;
}
declare module 'react-query/es/core/subscribable.js' {
  declare module.exports: $Exports<'react-query/es/core/subscribable'>;
}
declare module 'react-query/es/core/types.js' {
  declare module.exports: $Exports<'react-query/es/core/types'>;
}
declare module 'react-query/es/core/utils.js' {
  declare module.exports: $Exports<'react-query/es/core/utils'>;
}
declare module 'react-query/es/devtools/devtools.js' {
  declare module.exports: $Exports<'react-query/es/devtools/devtools'>;
}
declare module 'react-query/es/devtools/Explorer.js' {
  declare module.exports: $Exports<'react-query/es/devtools/Explorer'>;
}
declare module 'react-query/es/devtools/index' {
  declare module.exports: $Exports<'react-query/es/devtools'>;
}
declare module 'react-query/es/devtools/index.js' {
  declare module.exports: $Exports<'react-query/es/devtools'>;
}
declare module 'react-query/es/devtools/Logo.js' {
  declare module.exports: $Exports<'react-query/es/devtools/Logo'>;
}
declare module 'react-query/es/devtools/styledComponents.js' {
  declare module.exports: $Exports<'react-query/es/devtools/styledComponents'>;
}
declare module 'react-query/es/devtools/theme.js' {
  declare module.exports: $Exports<'react-query/es/devtools/theme'>;
}
declare module 'react-query/es/devtools/useLocalStorage.js' {
  declare module.exports: $Exports<'react-query/es/devtools/useLocalStorage'>;
}
declare module 'react-query/es/devtools/useMediaQuery.js' {
  declare module.exports: $Exports<'react-query/es/devtools/useMediaQuery'>;
}
declare module 'react-query/es/devtools/utils.js' {
  declare module.exports: $Exports<'react-query/es/devtools/utils'>;
}
declare module 'react-query/es/hydration/hydration.js' {
  declare module.exports: $Exports<'react-query/es/hydration/hydration'>;
}
declare module 'react-query/es/hydration/index' {
  declare module.exports: $Exports<'react-query/es/hydration'>;
}
declare module 'react-query/es/hydration/index.js' {
  declare module.exports: $Exports<'react-query/es/hydration'>;
}
declare module 'react-query/es/hydration/react.js' {
  declare module.exports: $Exports<'react-query/es/hydration/react'>;
}
declare module 'react-query/es/index' {
  declare module.exports: $Exports<'react-query/es'>;
}
declare module 'react-query/es/index.js' {
  declare module.exports: $Exports<'react-query/es'>;
}
declare module 'react-query/es/persist-localstorage-experimental/index' {
  declare module.exports: $Exports<'react-query/es/persist-localstorage-experimental'>;
}
declare module 'react-query/es/persist-localstorage-experimental/index.js' {
  declare module.exports: $Exports<'react-query/es/persist-localstorage-experimental'>;
}
declare module 'react-query/es/react/index' {
  declare module.exports: $Exports<'react-query/es/react'>;
}
declare module 'react-query/es/react/index.js' {
  declare module.exports: $Exports<'react-query/es/react'>;
}
declare module 'react-query/es/react/logger.js' {
  declare module.exports: $Exports<'react-query/es/react/logger'>;
}
declare module 'react-query/es/react/logger.native.js' {
  declare module.exports: $Exports<'react-query/es/react/logger.native'>;
}
declare module 'react-query/es/react/QueryClientProvider.js' {
  declare module.exports: $Exports<'react-query/es/react/QueryClientProvider'>;
}
declare module 'react-query/es/react/QueryErrorResetBoundary.js' {
  declare module.exports: $Exports<'react-query/es/react/QueryErrorResetBoundary'>;
}
declare module 'react-query/es/react/reactBatchedUpdates.js' {
  declare module.exports: $Exports<'react-query/es/react/reactBatchedUpdates'>;
}
declare module 'react-query/es/react/reactBatchedUpdates.native.js' {
  declare module.exports: $Exports<'react-query/es/react/reactBatchedUpdates.native'>;
}
declare module 'react-query/es/react/setBatchUpdatesFn.js' {
  declare module.exports: $Exports<'react-query/es/react/setBatchUpdatesFn'>;
}
declare module 'react-query/es/react/setLogger.js' {
  declare module.exports: $Exports<'react-query/es/react/setLogger'>;
}
declare module 'react-query/es/react/types.js' {
  declare module.exports: $Exports<'react-query/es/react/types'>;
}
declare module 'react-query/es/react/useBaseQuery.js' {
  declare module.exports: $Exports<'react-query/es/react/useBaseQuery'>;
}
declare module 'react-query/es/react/useInfiniteQuery.js' {
  declare module.exports: $Exports<'react-query/es/react/useInfiniteQuery'>;
}
declare module 'react-query/es/react/useIsFetching.js' {
  declare module.exports: $Exports<'react-query/es/react/useIsFetching'>;
}
declare module 'react-query/es/react/useMutation.js' {
  declare module.exports: $Exports<'react-query/es/react/useMutation'>;
}
declare module 'react-query/es/react/useQueries.js' {
  declare module.exports: $Exports<'react-query/es/react/useQueries'>;
}
declare module 'react-query/es/react/useQuery.js' {
  declare module.exports: $Exports<'react-query/es/react/useQuery'>;
}
declare module 'react-query/lib/core/focusManager.js' {
  declare module.exports: $Exports<'react-query/lib/core/focusManager'>;
}
declare module 'react-query/lib/core/index' {
  declare module.exports: $Exports<'react-query/lib/core'>;
}
declare module 'react-query/lib/core/index.js' {
  declare module.exports: $Exports<'react-query/lib/core'>;
}
declare module 'react-query/lib/core/infiniteQueryBehavior.js' {
  declare module.exports: $Exports<'react-query/lib/core/infiniteQueryBehavior'>;
}
declare module 'react-query/lib/core/infiniteQueryObserver.js' {
  declare module.exports: $Exports<'react-query/lib/core/infiniteQueryObserver'>;
}
declare module 'react-query/lib/core/logger.js' {
  declare module.exports: $Exports<'react-query/lib/core/logger'>;
}
declare module 'react-query/lib/core/mutation.js' {
  declare module.exports: $Exports<'react-query/lib/core/mutation'>;
}
declare module 'react-query/lib/core/mutationCache.js' {
  declare module.exports: $Exports<'react-query/lib/core/mutationCache'>;
}
declare module 'react-query/lib/core/mutationObserver.js' {
  declare module.exports: $Exports<'react-query/lib/core/mutationObserver'>;
}
declare module 'react-query/lib/core/notifyManager.js' {
  declare module.exports: $Exports<'react-query/lib/core/notifyManager'>;
}
declare module 'react-query/lib/core/onlineManager.js' {
  declare module.exports: $Exports<'react-query/lib/core/onlineManager'>;
}
declare module 'react-query/lib/core/queriesObserver.js' {
  declare module.exports: $Exports<'react-query/lib/core/queriesObserver'>;
}
declare module 'react-query/lib/core/query.js' {
  declare module.exports: $Exports<'react-query/lib/core/query'>;
}
declare module 'react-query/lib/core/queryCache.js' {
  declare module.exports: $Exports<'react-query/lib/core/queryCache'>;
}
declare module 'react-query/lib/core/queryClient.js' {
  declare module.exports: $Exports<'react-query/lib/core/queryClient'>;
}
declare module 'react-query/lib/core/queryObserver.js' {
  declare module.exports: $Exports<'react-query/lib/core/queryObserver'>;
}
declare module 'react-query/lib/core/retryer.js' {
  declare module.exports: $Exports<'react-query/lib/core/retryer'>;
}
declare module 'react-query/lib/core/subscribable.js' {
  declare module.exports: $Exports<'react-query/lib/core/subscribable'>;
}
declare module 'react-query/lib/core/types.js' {
  declare module.exports: $Exports<'react-query/lib/core/types'>;
}
declare module 'react-query/lib/core/utils.js' {
  declare module.exports: $Exports<'react-query/lib/core/utils'>;
}
declare module 'react-query/lib/devtools/devtools.js' {
  declare module.exports: $Exports<'react-query/lib/devtools/devtools'>;
}
declare module 'react-query/lib/devtools/Explorer.js' {
  declare module.exports: $Exports<'react-query/lib/devtools/Explorer'>;
}
declare module 'react-query/lib/devtools/index' {
  declare module.exports: $Exports<'react-query/lib/devtools'>;
}
declare module 'react-query/lib/devtools/index.js' {
  declare module.exports: $Exports<'react-query/lib/devtools'>;
}
declare module 'react-query/lib/devtools/Logo.js' {
  declare module.exports: $Exports<'react-query/lib/devtools/Logo'>;
}
declare module 'react-query/lib/devtools/styledComponents.js' {
  declare module.exports: $Exports<'react-query/lib/devtools/styledComponents'>;
}
declare module 'react-query/lib/devtools/theme.js' {
  declare module.exports: $Exports<'react-query/lib/devtools/theme'>;
}
declare module 'react-query/lib/devtools/useLocalStorage.js' {
  declare module.exports: $Exports<'react-query/lib/devtools/useLocalStorage'>;
}
declare module 'react-query/lib/devtools/useMediaQuery.js' {
  declare module.exports: $Exports<'react-query/lib/devtools/useMediaQuery'>;
}
declare module 'react-query/lib/devtools/utils.js' {
  declare module.exports: $Exports<'react-query/lib/devtools/utils'>;
}
declare module 'react-query/lib/hydration/hydration.js' {
  declare module.exports: $Exports<'react-query/lib/hydration/hydration'>;
}
declare module 'react-query/lib/hydration/index' {
  declare module.exports: $Exports<'react-query/lib/hydration'>;
}
declare module 'react-query/lib/hydration/index.js' {
  declare module.exports: $Exports<'react-query/lib/hydration'>;
}
declare module 'react-query/lib/hydration/react.js' {
  declare module.exports: $Exports<'react-query/lib/hydration/react'>;
}
declare module 'react-query/lib/index' {
  declare module.exports: $Exports<'react-query/lib'>;
}
declare module 'react-query/lib/index.js' {
  declare module.exports: $Exports<'react-query/lib'>;
}
declare module 'react-query/lib/persist-localstorage-experimental/index' {
  declare module.exports: $Exports<'react-query/lib/persist-localstorage-experimental'>;
}
declare module 'react-query/lib/persist-localstorage-experimental/index.js' {
  declare module.exports: $Exports<'react-query/lib/persist-localstorage-experimental'>;
}
declare module 'react-query/lib/react/index' {
  declare module.exports: $Exports<'react-query/lib/react'>;
}
declare module 'react-query/lib/react/index.js' {
  declare module.exports: $Exports<'react-query/lib/react'>;
}
declare module 'react-query/lib/react/logger.js' {
  declare module.exports: $Exports<'react-query/lib/react/logger'>;
}
declare module 'react-query/lib/react/logger.native.js' {
  declare module.exports: $Exports<'react-query/lib/react/logger.native'>;
}
declare module 'react-query/lib/react/QueryClientProvider.js' {
  declare module.exports: $Exports<'react-query/lib/react/QueryClientProvider'>;
}
declare module 'react-query/lib/react/QueryErrorResetBoundary.js' {
  declare module.exports: $Exports<'react-query/lib/react/QueryErrorResetBoundary'>;
}
declare module 'react-query/lib/react/reactBatchedUpdates.js' {
  declare module.exports: $Exports<'react-query/lib/react/reactBatchedUpdates'>;
}
declare module 'react-query/lib/react/reactBatchedUpdates.native.js' {
  declare module.exports: $Exports<'react-query/lib/react/reactBatchedUpdates.native'>;
}
declare module 'react-query/lib/react/setBatchUpdatesFn.js' {
  declare module.exports: $Exports<'react-query/lib/react/setBatchUpdatesFn'>;
}
declare module 'react-query/lib/react/setLogger.js' {
  declare module.exports: $Exports<'react-query/lib/react/setLogger'>;
}
declare module 'react-query/lib/react/types.js' {
  declare module.exports: $Exports<'react-query/lib/react/types'>;
}
declare module 'react-query/lib/react/useBaseQuery.js' {
  declare module.exports: $Exports<'react-query/lib/react/useBaseQuery'>;
}
declare module 'react-query/lib/react/useInfiniteQuery.js' {
  declare module.exports: $Exports<'react-query/lib/react/useInfiniteQuery'>;
}
declare module 'react-query/lib/react/useIsFetching.js' {
  declare module.exports: $Exports<'react-query/lib/react/useIsFetching'>;
}
declare module 'react-query/lib/react/useMutation.js' {
  declare module.exports: $Exports<'react-query/lib/react/useMutation'>;
}
declare module 'react-query/lib/react/useQueries.js' {
  declare module.exports: $Exports<'react-query/lib/react/useQueries'>;
}
declare module 'react-query/lib/react/useQuery.js' {
  declare module.exports: $Exports<'react-query/lib/react/useQuery'>;
}
