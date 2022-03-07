import type { AppServer } from '.';
import { AppEnvs } from '@config/env';
import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import bodyParser from 'body-parser';
import routes from './routes';
import { DependencyCradled } from '@infra/container';

const server: DependencyCradled<AppServer> =
  ({ config, tracker, errorHttpHandler, containerMiddleware }) =>
  () => {
    const { [AppEnvs.PORT]: port } = config.env;

    const app = express();

    app.use(containerMiddleware);
    app.use(helmet());
    app.use(compression());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(routes());
    app.use(errorHttpHandler);

    app
      .listen(port, () => {
        tracker.log(`Server is listening on port ${port}`);
      })
      .on('error', (error) => {
        tracker.critic(error.message);
        process.exit();
      });

    return app;
  };

export default server;
