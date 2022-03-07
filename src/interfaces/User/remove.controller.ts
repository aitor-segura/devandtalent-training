import { AppCallbackRoute, HttpStatus } from '@interfaces/app/server';
import notFoundHttpError from '@interfaces/app/server/errors/not-found.http-error';

const remove: AppCallbackRoute<void> = async (req, res, next) => {
  const { getUserApp, removeUserApp } = req.container.cradle;

  const { id } = req.params;

  const user = await getUserApp(id);
  if (!user) {
    return next(notFoundHttpError('User not found'));
  }
  await removeUserApp(id);
  return res.status(HttpStatus.OK).send();
};

export default remove;
