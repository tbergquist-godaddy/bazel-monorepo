// @flow

import { Handler } from '@tbergq/mock-server';

const handler: Handler = new Handler({
  url: `${process.env.BASE_URL ?? ''}/Program/exercises/:id/`,
  type: 'put',
  handler: (req, res, ctx) => {
    return res(ctx.json(req.body));
  },
});

export default handler;
