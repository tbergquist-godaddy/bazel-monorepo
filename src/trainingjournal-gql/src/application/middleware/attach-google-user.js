// @flow

import type { $Request, $Response, NextFunction } from 'express';
import { OAuth2Client } from 'google-auth-library';
import { UserModel } from '@tj-gql/infrastructure/models';

// This is also visible on the FE, so shouldn't be considered a secret
const CLIENT_ID = '217427830380-6i8cjcbdp4mnft3ahdaln6m0kha8cdps.apps.googleusercontent.com';

const client = new OAuth2Client(CLIENT_ID);

type Payload = {
  iss: string,
  azp: string,
  aud: string,
  sub: string,
  email: string,
  email_verified: boolean,
  at_hash: string,
  name: string,
  picture: string,
  given_name: string,
  family_name: string,
  locale: string,
  iat: number,
  exp: number,
  jti: string,
};

async function verify(idToken: string): Promise<Payload | null> {
  try {
    const ticket = await client.verifyIdToken({
      idToken,
      audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();

    return payload;
  } catch {
    return null;
  }
}

export default function attachGoogleUser(req: $Request, res: $Response, next: NextFunction): void {
  const token = req.headers.authorization;
  const setUser = (user) => {
    // $FlowExpectedError[prop-missing]
    req.user = user;
    next();
  };
  if (token == null) {
    setUser(null);
    return;
  }

  verify(token)
    .then((payload) => {
      if (payload == null) {
        setUser(null);
        return null;
      }
      return UserModel.getOrCreateUser(payload.email);
    })
    .then((user) => {
      if (user) {
        setUser({ id: user._id, email: user.email });
      } else {
        setUser(null);
      }
    })
    .catch(() => {
      setUser(null);
    });
}
