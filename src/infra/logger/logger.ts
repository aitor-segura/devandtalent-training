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

  const log: LoggerFn = (message) => {
    winston.info(`[${env[AppEnvs.Env]}] ${message}`);
  };

  return {
    log,
  };
};

export default logger;
