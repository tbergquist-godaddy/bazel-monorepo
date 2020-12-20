// @flow

import { Handler } from '@tbergq/mock-server';

const url = `${process.env.BASE_URL ?? ''}/Program/programs/:programId/`;

const programMock = {
  id: 1,
  name: 'mock_program',
  weeks: [{ id: 1, name: 'Week 1', days: [] }],
};

const fetchProgramsHandler: Handler = new Handler({
  url,
  type: 'get',
  handler: (req, res, ctx) => {
    return res(ctx.json(programMock));
  },
});

export default fetchProgramsHandler;
