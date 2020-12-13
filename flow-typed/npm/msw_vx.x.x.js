// flow-typed signature: 6e58830887352b461731fb41d3443336
// flow-typed version: <<STUB>>/msw_v0.24.2/flow_v0.140.0

/**
 * This is an autogenerated libdef stub for:
 *
 *   'msw'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

declare module 'msw' {
  declare type RequestHandler = $FlowFixMe;
  declare export type Handler = (req: any, res: any, ctx: any) => $FlowFixMe;
  declare type HandlerFunction = (url: string, handler: Handler) => RequestHandler;
  declare type Rest = {
    get: HandlerFunction,
    post: HandlerFunction
  }
  declare export var rest: Rest;
}

declare module 'msw/node' {
  import type { RequestHandler } from 'msw';
  declare export type Server = {
    listen: () => Promise<void>,
    resetHandlers: () => Promise<void>,
    close: () => Promise<void>,

  };
  declare export var setupServer: any;
}