// @flow

import { Handler } from '@tbergq/mock-server';

const handler: Handler = new Handler({
  url: `${process.env.BASE_URL ?? ''}/Program/exercises/:id/`,
  type: 'delete',
  handler: (req, res, ctx) => {
    return res(ctx.status(204));
  },
});

export default handler;
