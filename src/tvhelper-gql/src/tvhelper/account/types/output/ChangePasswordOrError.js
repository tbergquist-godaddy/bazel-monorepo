// @flow strict-local

import { GraphQLUnionType } from 'graphql';

import ChangePasswordError from './ChangePasswordError';
import ChangePasswordResponse from './ChangePasswordResponse';

export class PasswordError {
  message: string;
  isInvalidPassword: boolean;
  constructor(message: string, isInvalidPassword: boolean) {
    this.message = message;
    this.isInvalidPassword = isInvalidPassword;
  }

  toJSON(): { isInvalidPassword: boolean, message: string } {
    return {
      message: this.message,
      isInvalidPassword: this.isInvalidPassword,
    };
  }
}

export default (new GraphQLUnionType({
  name: 'ChangePasswordOrError',
  types: [ChangePasswordError, ChangePasswordResponse],
  resolveType: (value) => {
    if (value instanceof PasswordError) {
      return ChangePasswordError;
    }
    return ChangePasswordResponse;
  },
}): GraphQLUnionType);
