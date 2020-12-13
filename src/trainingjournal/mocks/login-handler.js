// @flow

import { Handler } from '@tbergq/mock-server';

const url = `${process.env.BASE_URL ?? ''}/Account/auth/`;

function handler(req: $FlowFixMe, res: $FlowFixMe, ctx: $FlowFixMe): $FlowFixMe {
  if (req.body.username === 'success') {
    return res(ctx.json({ token: 'mock_token' }));
  }

  return res(ctx.status(400));
}

const loginHandler: Handler = new Handler({
  url,
  type: 'post',
  handler,
});

export default loginHandler;
