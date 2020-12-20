// @flow

import fetch from '../../services/fetch';
import type { ProgramList, Program } from '../types';

const url = '/Program/programs/';
export function fetchPrograms(): Promise<ProgramList[]> {
  return fetch(url);
}

export const FETCH_PROGRAMS_KEY = 'FETCH_PROGRAMS';
export const FETCH_PROGRAM_KEY = 'FETCH_PROGRAM';
export const CREATE_PROGRAM_KEY = 'CREATE_PROGRAM';

export function createProgram(name: string): Promise<ProgramList> {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({ name }),
  });
}

export function fetchProgram(id: number | string): Promise<Program> {
  return fetch(`${url}${id.toString()}/`);
}
