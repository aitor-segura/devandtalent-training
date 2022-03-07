import path from 'path';
import type { AppCradle } from '.';
import { asFunction, asValue, createContainer, Lifetime } from 'awilix';
import { scopePerRequest } from 'awilix-express';
import config, { AppConfig, AppEnvs } from '@config/env';
import logger, { Logger } from '@infra/logger';
import tracker, { Tracker } from '@infra/tracker';
import validator, { Validator } from '@infra/validator';
import server, { AppMiddleware, AppServer } from '@interfaces/app/server';
import errorHttpHandler from '@interfaces/app/server/middlewares/errorHandler';
import { ErrorHttpHandler } from '@interfaces/app/server/middlewares/types';

const { env } = config;

const container = createContainer<AppCradle>();

container.register({
  config: asValue<AppConfig>(config),
  logger: asFunction<Logger>(logger).singleton(),
  tracker: asFunction<Tracker>(tracker).singleton(),
  validator: asFunction<Validator>(validator).singleton(),
  server: asFunction<AppServer>(server).singleton(),
  errorHttpHandler: asFunction<ErrorHttpHandler>(errorHttpHandler).singleton(),
});

container.loadModules(
  [
    `application/**/*.app.{js,ts}`,
    `infra/persistence/${env[AppEnvs.PERSISTENCE]}/repositories/**/*.repository.{js,ts}`,
  ],
  {
    formatName: 'camelCase',
    resolverOptions: {
      register: asFunction,
      lifetime: Lifetime.SCOPED,
    },
    cwd: path.resolve('src'),
  },
);

container.register({
  containerMiddleware: asValue<AppMiddleware>(scopePerRequest(container)),
});

export default container;
