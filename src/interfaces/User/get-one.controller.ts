import type { AppCallbackRoute } from '@interfaces/app/server';
import notFoundHttpError from '@interfaces/app/server/errors/not-found.http-error';
import { HttpStatus } from '@interfaces/app/server';
import User from '@domain/User/user.entity';

const getOne: AppCallbackRoute<User> = async (req, res, next) => {
  const { getUserApp } = req.container.cradle;
  const { id } = req.params;

  const user = await getUserApp(id);

  if (!user) {
    return next(notFoundHttpError('User not found'));
  }

  return res.status(HttpStatus.OK).json(user);
};

export default getOne;
