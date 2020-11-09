// @flow

import { type Node, type AbstractComponent, useEffect, Suspense } from 'react';
import { useQueryLoader } from 'react-relay/hooks';
// eslint-disable-next-line import/extensions
import type { PreloadedQuery } from 'react-relay/relay-experimental/EntryPointTypes.flow.js.flow';
import { Spinner } from '@tbergq/components';
import type { GraphQLTaggedNode } from 'react-relay';

type Props = {
  +query: GraphQLTaggedNode,
  +persistentChildren?: Node,
  +loader?: Node,
};

export type Variables = { +[string]: $FlowFixMe, ... };
type OperationType = {|
  // TODO(T33395812) Make this an open object type
  +variables: Variables,
  +response: mixed,
  +rawResponse?: { ... },
|};
type EnvironmentProviderOptions = { [string]: mixed, ... };

export type QueryReference<
  TQuery: OperationType,
  TEnvironmentProviderOptions: EnvironmentProviderOptions,
> = PreloadedQuery<TQuery, TEnvironmentProviderOptions>;

type InjectedProps = {
  +queryReference: QueryReference<any, any>,
};

export default function withUseQuery<Config>(
  Component: AbstractComponent<$ReadOnly<{ ...Config, ...InjectedProps }>>,
  { query, persistentChildren, loader = <Spinner /> }: Props,
): AbstractComponent<Config> {
  return function WithUseQuery(props: Config) {
    const [queryReference, loadQuery] = useQueryLoader(query);

    useEffect(() => {
      loadQuery({});
    }, [loadQuery]);

    return (
      <>
        {persistentChildren}
        {queryReference == null ? (
          loader
        ) : (
          <Suspense fallback={loader}>
            <Component queryReference={queryReference} {...props} />
          </Suspense>
        )}
      </>
    );
  };
}
