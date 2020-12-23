// @flow

import { Handler } from '@tbergq/mock-server';

const mock = [
  {
    id: 1,
    name: 'Squats',
    muscle_group: { name: 'Quads' },
  },
  {
    id: 2,
    name: 'Bench press',
    muscle_group: { name: 'Breast' },
  },
];
const handler: Handler = new Handler({
  url: `${process.env.BASE_URL ?? ''}/Program/baseExercises/`,
  type: 'get',
  handler: (req, res, ctx) => {
    return res(ctx.json(mock));
  },
});

export default handler;
