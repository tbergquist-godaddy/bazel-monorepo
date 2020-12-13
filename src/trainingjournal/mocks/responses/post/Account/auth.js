// @flow

function postAuth(req: $FlowFixMe, res: $FlowFixMe, ctx: $FlowFixMe): $FlowFixMe {
  if (req.body.username === 'success') {
    return res(ctx.json({ token: 'mock_token' }));
  }

  return res(ctx.status(400));
}

export const url = '/Account/auth/';
export const handler = postAuth;
