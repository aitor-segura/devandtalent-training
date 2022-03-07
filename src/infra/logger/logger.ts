import type { Logger, LoggerFn } from '.';
import { AppEnvs } from '@config/env';
import { createLogger, format, transports } from 'winston';

const logger = ({ config }): Logger => {
  const { env, debug } = config;

  const winston = createLogger({
    level: debug ? 'debug' : 'info',
    transports: [
      new transports.Console({
        format: format.combine(format.timestamp(), format.colorize(), format.simple()),
      }),
    ],
    exitOnError: false,
  });

  const template_log = `[${env[AppEnvs.ENV]}] :message:`;

  const log: LoggerFn = (message) => {
    winston.info(template_log.replace(':message:', message));
  };

  const error: LoggerFn = (message) => {
    winston.error(template_log.replace(':message:', message));
  };

  return {
    log,
    error,
  };
};

export default logger;
