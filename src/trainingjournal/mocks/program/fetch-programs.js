// @flow

import { Handler } from '@tbergq/mock-server';

const url = `${process.env.BASE_URL ?? ''}/Program/programs/`;

const handler: Handler = new Handler({
  url,
  type: 'get',
  handler: (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        count: 1,
        next: null,
        previous: null,
        results: [{ id: 1, name: 'program 1' }],
      }),
    );
  },
});

export default handler;
