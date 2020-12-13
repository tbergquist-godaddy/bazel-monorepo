// @flow

import type { Handler as HandlerFunction } from 'msw';

type Type = 'post' | 'get';

type Args = {
  +url: string,
  +type: Type,
  +handler: HandlerFunction,
};

export default class Handler {
  url: string;
  type: Type;
  handler: HandlerFunction;

  constructor(args: Args) {
    this.url = args.url;
    this.type = args.type;
    this.handler = args.handler;
  }
}
