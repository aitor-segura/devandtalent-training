import User from '@domain/User/user.entity';
import type { AppCallbackRoute } from '@interfaces/app/server';
import HttpStatus from 'http-status-codes';

const getAll: AppCallbackRoute<User[]> = async (req, res) => {
  const { getUsersApp } = req.container.cradle;

  const users = await getUsersApp();

  return res.status(HttpStatus.OK).json(users);
};

export default getAll;
