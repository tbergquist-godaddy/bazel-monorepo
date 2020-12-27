// @flow

import { Handler } from '@tbergq/mock-server';
import { generate } from 'shortid';

const mock = {
  id: generate(),
  break_time: '2',
  day: 229,
  description: 'go easy',
  reps: '2',
  set: '2',
};

const handler: Handler = new Handler({
  url: `${process.env.BASE_URL ?? ''}/Program/exercises/`,
  type: 'post',
  handler: (req, res, ctx) => {
    return res(ctx.json(mock));
  },
});

export default handler;
