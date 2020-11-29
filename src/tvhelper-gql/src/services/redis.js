// @flow

import { createClient, type RedisClient } from '@tbergq/redis-client';

import loadConfig from './load-config';

loadConfig();

const { REDIS_PASSWORD } = process.env;

const client: RedisClient = createClient({
  port: 13111,
  host: 'redis-13111.c3.eu-west-1-1.ec2.cloud.redislabs.com',
  options: {
    password: REDIS_PASSWORD,
  },
});

export default client;
