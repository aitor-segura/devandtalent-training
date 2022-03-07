import User from '@domain/User/user.entity';
import { EntityRepository } from '../../types';

export type UserFindOneProps = {
  id?: string;
  email?: string;
};
export type UserSaveProps = Omit<User, 'id'>;

export type UserRepository = EntityRepository<User, UserFindOneProps, UserSaveProps>;

export type UserCradleRepository = {
  userRepository: UserRepository;
};

export type NewUser = Omit<User, 'id'>;
