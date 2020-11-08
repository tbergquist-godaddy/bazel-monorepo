// @flow

import type { $Request } from 'express';
import Dataloader from 'dataloader';

import type { JwtPayload } from './middleware/auth';
import TeamsLoader, { type TeamLoaderType } from './team/dataloaders/teams-loader';

export type Context = {
  user: JwtPayload | null,
  dataloader: {
    teams: {
      teamsLoader: Dataloader<string, TeamLoaderType>,
    },
  },
};
type Request = $ReadOnly<{
  ...$Request,
  user: JwtPayload | null,
  ...
}>;

export default function createContext(req: Request): Context {
  return {
    user: req.user,
    dataloader: {
      teams: {
        teamsLoader: new Dataloader(TeamsLoader),
      },
    },
  };
}
