import User from '@domain/User/user.entity';
import { AppCallbackRoute, HttpStatus } from '@interfaces/app/server';
import badRequestHttpError from '@interfaces/app/server/errors/bad-request.http-error';

const create: AppCallbackRoute<User> = async (req, res, next) => {
  const { createUserApp } = req.container.cradle;
  try {
    const { name, email, availability, country } = req.body;

    const userData = { name, email, availability, country };
    const user = await createUserApp(userData);
    return res.status(HttpStatus.CREATED).json(user);
  } catch (err) {
    return next(badRequestHttpError(JSON.parse(err.message)));
  }
};

export default create;
