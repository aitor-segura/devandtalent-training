import type { AppServer } from './index.d';
import { AppEnvs } from '@config/env';
import express from 'express';
import helmet from 'helmet';
import compression from 'compression';

const server = ({ config, tracker, containerMiddleware }): AppServer => {
  const { [AppEnvs.Port]: port } = config.env;

  const app = express();

  app.use(containerMiddleware);
  app.use(helmet());
  app.use(compression());

  // app.use(routes());

  app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hola Mundo nuevo!' });
  });

  app
    .listen(port, () => {
      tracker.info(`Server is listening on port ${port}`);
    })
    .on('error', (error) => {
      tracker.critical(error);
      process.exit();
    });

  return app;
};

export default server;
