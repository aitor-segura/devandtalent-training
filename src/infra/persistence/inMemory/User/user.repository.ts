import type { UserRepository, UserFindOneProps, UserSaveProps } from './types';
import createUser from './helpers/create-user';
import User from '@domain/User/user.entity';
import users from '@infra/persistence/inMemory/User/user.data';
import cleanEntity from '@helpers/clean-entity';

const userRepository = (): UserRepository => {
  const find = (): Promise<User[]> => {
    return new Promise((resolve) => {
      return resolve(users);
    });
  };

  const findOne = (filter: UserFindOneProps): Promise<User | null> => {
    const { id, email } = filter;
    return new Promise((resolve) => {
      const user = users.find((item) => item.id === id || item.email === email);
      return resolve(user);
    });
  };

  const save = (newUser: UserSaveProps): Promise<User> => {
    return new Promise((resolve) => {
      const user: User = createUser(newUser);
      return resolve(user);
    });
  };

  const update = (id: string, data: User | Partial<User>): Promise<User> => {
    return new Promise((resolve) => {
      const user: User = users.find((item) => item.id === id);
      const cleanData = cleanEntity<User>(data);
      const updated: User = { ...user, ...cleanData };
      return resolve(updated);
    });
  };

  const remove = (id: string): void => {
    new Promise((resolve) => {
      const user: User = users.find((item) => item.id === id);
      resolve(user);
    });
  };

  return {
    find,
    findOne,
    save,
    update,
    remove,
  };
};

export default userRepository;
