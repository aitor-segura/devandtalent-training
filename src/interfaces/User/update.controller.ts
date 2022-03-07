import User from '@domain/User/user.entity';
import { AppCallbackRoute, HttpStatus } from '@interfaces/app/server';
import badRequestHttpError from '@interfaces/app/server/errors/bad-request.http-error';
import notFoundHttpError from '@interfaces/app/server/errors/not-found.http-error';

const update: AppCallbackRoute<User> = async (req, res, next) => {
  const { getUserApp, updateUserApp } = req.container.cradle;
  try {
    const { id } = req.params;
    const { name, email, availability, country } = req.body;

    const userData = { name, email, availability, country };

    const user = await getUserApp(id);
    if (!user) {
      return next(notFoundHttpError('User not found'));
    }

    const updatedUser = await updateUserApp(id, userData);
    return res.status(HttpStatus.OK).json(updatedUser);
  } catch (err) {
    return next(badRequestHttpError(JSON.parse(err.message)));
  }
};

export default update;
