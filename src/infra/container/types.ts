import type { AppConfig } from '@config/env';
import type { Logger } from '@infra/logger';
import type { Tracker } from '@infra/tracker';
import type { AppServer, AppMiddleware } from '@interfaces/AppServer';

export type AppContainer = {
  config: AppConfig;
  logger: Logger;
  tracker: Tracker;
  server: AppServer;
  containerMiddleware: AppMiddleware;
};


