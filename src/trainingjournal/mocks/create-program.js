// @flow

import { Handler } from '@tbergq/mock-server';

const url = `${process.env.BASE_URL ?? ''}/Program/programs/`;

function handler(req: $FlowFixMe, res: $FlowFixMe, ctx: $FlowFixMe): $FlowFixMe {
  if (req.body.name === 'success') {
    return res(
      ctx.json({ date: '2020-12-13T18:18:34Z', id: 77, name: req.body.name, user: 2, weeks: [] }),
    );
  }

  return res(ctx.status(400));
}

const createProgramHandler: Handler = new Handler({
  url,
  type: 'post',
  handler,
});

export default createProgramHandler;
