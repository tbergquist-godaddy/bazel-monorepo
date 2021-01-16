// @flow

import { Handler } from '@tbergq/mock-server';

import programMock from './responses/program1.json';

const responseMap = new Map();
responseMap.set('1', programMock);

const url = `${process.env.BASE_URL ?? ''}/Program/programs/:programId/`;

const fetchProgramsHandler: Handler = new Handler({
  url,
  type: 'get',
  handler: (req, res, ctx) => {
    const { programId } = req.params;
    return res(ctx.json(responseMap.get(programId)));
  },
});

export default fetchProgramsHandler;
