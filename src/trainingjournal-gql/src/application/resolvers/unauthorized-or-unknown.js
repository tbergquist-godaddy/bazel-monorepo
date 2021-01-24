// @flow

import {
  Reasons,
  UnauthorizedOrUnknownClass,
} from '@tj-gql/application/models/output/common/unauthorized-or-unknown-error';
import type { GraphqlContext, User } from '@tj-gql/application/services';

export default function UnauthorizedOrUnknownResolver<T>(
  { user }: GraphqlContext,
  cb: (User) => Promise<T>,
): Promise<T | UnauthorizedOrUnknownClass> {
  if (user == null) {
    return Promise.resolve(new UnauthorizedOrUnknownClass(Reasons.UNAUTHORIZED));
  }
  try {
    return cb(user);
  } catch (e) {
    return Promise.resolve(new UnauthorizedOrUnknownClass(Reasons.UNKNOWN));
  }
}
