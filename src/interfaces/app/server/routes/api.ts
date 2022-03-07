import { Router } from 'express';
import userController from '@interfaces/User/user.controller';

const api = () => {
  const router = Router();

  router.get('/users', userController.getAll);
  router.get('/users/:id', userController.getOne);
  router.post('/users', userController.create);
  router.put('/users/:id', userController.update);
  router.patch('/users/:id', userController.update);
  router.delete('/users/:id', userController.remove);

  return router;
};

export default api;
