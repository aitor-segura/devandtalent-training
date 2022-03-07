import { InputNewUser } from '@application/User';
import User from '@domain/User/user.entity';
import { NewUser } from '@infra/persistence/inMemory/User/types';
import { AppCallbackRoute } from '@interfaces/app/server';

export type NewUserFromInput = (data: InputNewUser) => NewUser;

export type UserController = {
  getAll: AppCallbackRoute<User[]>;
  getOne: AppCallbackRoute<User>;
  create: AppCallbackRoute<User>;
  update: AppCallbackRoute<User>;
  remove: AppCallbackRoute<void>;
};
