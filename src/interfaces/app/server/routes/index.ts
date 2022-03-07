import { Router } from 'express';
import api from './api';

const routes = () => {
  const router = Router();

  router.use('/api', api());

  return router;
};

export default routes;
