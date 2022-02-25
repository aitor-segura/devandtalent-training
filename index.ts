import express from 'express';
import Rollbar from 'rollbar';

const rollbar = new Rollbar({
  accessToken: '98f8082144844f56a6d2e8448f982e90',
  captureUncaught: true,
  captureUnhandledRejections: true,
});

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hola Mundo!' });
  rollbar.log('Hello world');
});

app.listen(80, () => {
  rollbar.log('Server is listening on port 80');
});
