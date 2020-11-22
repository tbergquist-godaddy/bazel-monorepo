// @flow

import toConnection from '../toConnection';

const items = [1, 2, 3];

it('returns hasPreviousPage correctly', () => {
  expect(toConnection(items, { offset: 0, count: 5 }).pageInfo.hasPreviousPage).toBe(false);
  expect(toConnection(items, { offset: 1, count: 5 }).pageInfo.hasPreviousPage).toBe(true);
});

it('returns hasNextPage correctly', () => {
  expect(toConnection(items, { offset: 1, count: 4 }).pageInfo.hasNextPage).toBe(false);
  expect(toConnection(items, { offset: 1, count: 5 }).pageInfo.hasNextPage).toBe(true);
});

it('sets start and end cursor correctly', () => {
  const {
    pageInfo: { startCursor, endCursor },
    edges,
  } = toConnection<number>(items, { offset: 0, count: 5 });
  const firstEdge = edges[0];
  const lastEdge = edges[edges.length - 1];

  expect(startCursor).toEqual(firstEdge.cursor);
  expect(endCursor).toEqual(lastEdge.cursor);
});

it('works with empty array', () => {
  expect(() => {
    toConnection([], { count: 5, offset: 0 });
  }).not.toThrow();
});
