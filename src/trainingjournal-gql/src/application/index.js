// @flow

/* eslint-disable no-console */

import app from './app';

if (__DEV__) {
  app.listen({ port: process.env.PORT ?? 4200 }, () =>
    console.log(`🚀 Server ready at http://localhost:4200/graphql`),
  );
} else {
  app.listen();
}
