import User from '@domain/User/user.entity';
import { v4 as uuid } from 'uuid';
import { NewUser } from '../types';

export type CreateUser = (data: NewUser) => User;

const createUser: CreateUser = (newUser) => ({
  id: uuid(),
  ...newUser,
});

export default createUser;
