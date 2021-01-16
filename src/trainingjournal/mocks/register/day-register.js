// @flow

import { Handler } from '@tbergq/mock-server';

const url = `${process.env.BASE_URL ?? ''}/Workout/dayregister/:id/`;

const handler: Handler = new Handler({
  url,
  type: 'get',
  handler: (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          start_time: new Date().toISOString(),
          end_time: new Date().toISOString(),
          day_program: { id: 1 },
        },
      ]),
    );
  },
});

export default handler;
