// @flow

import bodyParser from 'body-parser';
import type { $Request, $Response, NextFunction } from 'express';

import StoredOperationRepository from '../database/models/stored-operations';

const jsonParser = bodyParser.json();

type Request = {
  ...$Request,
  body: { [string]: string },
  ...
};

export default function matchQueryMiddleware(): (
  req: Request,
  res: $Response,
  next: NextFunction,
) => any {
  return (req: Request, res: $Response, next: NextFunction) => {
    return jsonParser(req, res, async () => {
      const { queryId } = req.body;
      if (typeof queryId === 'string') {
        const query = await StoredOperationRepository.getOperationText(queryId);

        if (query != null) {
          // eslint-disable-next-line require-atomic-updates
          req.body.query = query;
        } else {
          throw new Error(`matchQueryMiddleware: can't find queryId: ${queryId}`);
        }
      }
      next();
    });
  };
}
