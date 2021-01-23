// @flow

import { UnauthorizedOrUnknownClass, Reasons } from '../unauthorized-or-unknown-error';

describe('application / models / output / common / UnauthorizedOrUnknownClass', () => {
  it('returns the correct error message', () => {
    expect(new UnauthorizedOrUnknownClass(Reasons.UNAUTHORIZED).getMessage()).toBe(
      'You must be logged in to perform this operation.',
    );

    expect(new UnauthorizedOrUnknownClass(Reasons.UNKNOWN).getMessage()).toBe(
      'We had an unexpected error, please try again.',
    );
  });
});
