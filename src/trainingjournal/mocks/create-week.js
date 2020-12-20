// @flow

import { Handler } from '@tbergq/mock-server';
import shortid from 'shortid';

const url = `${process.env.BASE_URL ?? ''}/Program/weeks/`;

const fetchProgramsHandler: Handler = new Handler({
  url,
  type: 'post',
  handler: (req, res, ctx) => {
    return res(
      ctx.json({
        id: shortid.generate(),
        name: req.body.name,
      }),
    );
  },
});

export default fetchProgramsHandler;
