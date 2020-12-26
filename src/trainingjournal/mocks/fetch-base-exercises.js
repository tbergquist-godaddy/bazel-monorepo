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
  {
    id: 3,
    name: 'Arnold press',
    muscle_group: { name: 'Shoulder' },
  },
  {
    id: 4,
    name: 'Bulgarsk utfall',
    muscle_group: { name: 'Quads' },
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
