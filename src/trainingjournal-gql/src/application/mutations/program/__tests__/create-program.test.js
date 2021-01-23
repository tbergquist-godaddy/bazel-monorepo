// @flow

import { ProgramModel } from '@tj-gql/infrastructure/models';

import CreateProgram from '../create-program';

const { resolve } = CreateProgram;

describe('application / mutations / exercise / CreateProgram', () => {
  const setup = () => {
    const program = {
      name: 'test program',
    };
    // $FlowExpectedError[prop-missing]
    const act = (user) => resolve(null, { program }, { user });
    return {
      act,
      program,
    };
  };

  it('handles missing auth', async () => {
    const { act } = setup();

    const response = await act(null);
    // $FlowExpectedError[prop-missing]
    expect(response.reason).toBe('UNAUTHORIZED');
  });

  it('handles unexpected errors', async () => {
    const spy = jest.spyOn(ProgramModel, 'createProgram').mockRejectedValue(null);
    const { act, program } = setup();

    const response = await act({ id: '1', email: 'lol@lol.no' });
    // $FlowExpectedError[prop-missing]
    expect(response.reason).toBe('UNKNOWN');
    expect(spy).toHaveBeenCalledWith({ ...program, user: '1' });

    spy.mockRestore();
  });

  it('returns the created program', async () => {
    const { act, program } = setup();
    const user = { id: '1', email: 'lol@lol.no' };
    const createdProgram = {
      _id: '123',
      name: program.name,
      user: '1',
    };

    const spy = jest.spyOn(ProgramModel, 'createProgram').mockResolvedValue(createdProgram);
    const response = await act(user);

    expect(response).toBe(createdProgram);
    expect(spy).toHaveBeenCalledWith({ ...program, user: '1' });

    spy.mockRestore();
  });
});
