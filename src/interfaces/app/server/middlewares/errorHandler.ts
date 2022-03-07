import { DependencyCradled } from '@infra/container';
import { ErrorHttpHandler } from './types';

const errorHttpHandler: DependencyCradled<ErrorHttpHandler> =
  ({ tracker }) =>
  (err, _req, res, _next) => {
    tracker.error(err.message);
    return res.status(err.status).json(err.message);
  };

export default errorHttpHandler;
