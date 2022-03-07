import type { AppConfig } from '@config/env';
import type { Logger } from '@infra/logger';
import type { Tracker } from '@infra/tracker';
import type { Validator } from '@infra/validator';
import type { AppServer, AppMiddleware } from '@interfaces/app/server';
import type { UserCradleApp } from '@application/User';
import type { UserCradleRepository } from '@infra/persistence/inMemory/User/types';
import { AwilixContainer } from 'awilix';
import { ErrorHttpHandler } from '@interfaces/app/server/middlewares/types';

export type AppCradle = {
  config: AppConfig;
  logger: Logger;
  tracker: Tracker;
  validator: Validator;
  server: AppServer;
  errorHttpHandler: ErrorHttpHandler;
  containerMiddleware: AppMiddleware;
} & UserCradleApp &
  UserCradleRepository;

export type AppContainer = AwilixContainer<AppCradle>;

export type DependencyCradled<T> = (container: AppCradle) => T;
