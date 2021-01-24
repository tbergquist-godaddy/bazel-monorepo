// @flow

process.env.JWT_SECRET = 'MOCKED_SECRET';
globalThis.__DEV__ = true;
// process.env.MONGO_DEBUG = 'true';

jest.mock('../src/application/middleware/attach-google-user', () => (req, res, next) => {
  if (req.headers.authorization != null) {
    req.user = JSON.parse(req.headers.authorization);
  }
  next();
});
