// @flow

import redis, { type CreateOptions } from 'redis';
import { promisify } from 'util';

type Args = {
  +port: number,
  +host: string,
  +options: CreateOptions,
};

export type RedisClient = {
  +set: (key: string, value: string, expire?: 'EX' | 'PX', time?: number) => Promise<void>,
  +get: (key: string) => Promise<string>,
};

const ONE_WEEK = 60 * 60 * 24 * 7;

export default function createClient({ port, host, options }: Args): RedisClient {
  const client = redis.createClient(port, host, options);

  const set = promisify(client.set).bind(client);
  const get = promisify(client.get).bind(client);

  return {
    set: (key, value, expire = 'EX', time = ONE_WEEK) => set(key, value, expire, time),
    get,
  };
}
