import type { AppContainer } from '.';
import { asFunction, asValue, createContainer } from 'awilix';
import { scopePerRequest } from 'awilix-express';
import envs, { AppConfig } from '@config/env';
import logger, { Logger } from '@infra/logger';
import tracker, { Tracker } from '@infra/tracker';
import server, { AppMiddleware, AppServer } from '@interfaces/AppServer';

const container = createContainer<AppContainer>();

container.register({
  config: asValue<AppConfig>(envs),
  logger: asFunction<Logger>(logger).singleton(),
  tracker: asFunction<Tracker>(tracker).singleton(),
  server: asFunction<AppServer>(server).singleton(),
});

container.register({
  containerMiddleware: asValue<AppMiddleware>(scopePerRequest(container)),
});

export default container;
