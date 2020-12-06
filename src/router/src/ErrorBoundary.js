// @flow

import { Component, type Node } from 'react';

type Props = {
  +error?: Error,
  +children: Node,
};
type MyError = $ReadOnly<{
  ...Error,
  +source: string,
  ...
}>;
type State = {
  +error: MyError | null,
};
/**
 * A reusable component for handling errors in a React (sub)tree.
 */
class ErrorBoundary extends Component<Props, State> {
  state: State = {
    error: null,
  };

  static getDerivedStateFromError(error: MyError): State {
    return {
      error,
    };
  }

  render(): Node {
    if (this.state.error != null) {
      return (
        <div>
          <div>Error: {this.state.error.message}</div>
          <div>
            <pre>{JSON.stringify(this.state.error.source, null, 2)}</pre>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
