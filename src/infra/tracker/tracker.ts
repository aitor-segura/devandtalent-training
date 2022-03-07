import type { Tracker, TrackerFn } from '.';
import Rollbar from 'rollbar';

const TRACKER_CRTIICAL_MESSAGE = 'App has stopped.';

const tracker = ({ config, logger }): Tracker => {
  const rollbar = new Rollbar({
    accessToken: config.env.NODE_ENV_ROLLBAR_TOKEN,
    captureUncaught: true,
    captureUnhandledRejections: true,
  });

  const log: TrackerFn = (message) => {
    rollbar.log(message);
    logger.log(message);
  };

  const error: TrackerFn = (message) => {
    rollbar.error(message);
    logger.error(message); // todo: create new log method
  };

  const critic: TrackerFn = (message) => {
    rollbar.critical(message);
    logger.log(message); // todo: create new log method
    logger.log(TRACKER_CRTIICAL_MESSAGE); // todo: create new log method
    process.exit(1);
  };

  return {
    log,
    error,
    critic,
  };
};

export default tracker;
