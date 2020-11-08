// @flow

import Viewer from '../models/viewer';
import type { Context } from '../../context';

type ViewerResult =
  | {
      message: string,
    }
  | {
      identity: {
        email: string,
      },
    };
export default {
  type: Viewer,
  description: 'The context of the logged in user',
  resolve: (_: mixed, __: mixed, { user }: Context): ViewerResult => {
    if (user == null) {
      return { message: 'You must be logged in to see this field' };
    }
    return { identity: { email: user.email } };
  },
};
