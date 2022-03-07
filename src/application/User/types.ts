import User from '@domain/User/user.entity';

export type GetUsersApp = () => Promise<User[]>;

export type GetUserApp = (id: string) => Promise<User>;

export type InputNewUser = {
  name: string;
  email: string;
  availability?: string;
  country: string;
};
export type CreateUserApp = (data: InputNewUser) => Promise<User>;

export type InputUpdateUser = Partial<User>;
export type UpdateUserApp = (id: string, data: InputUpdateUser) => Promise<User>;

export type RemoveUserApp = (id: string) => void;

export type UserCradleApp = {
  getUsersApp: GetUsersApp;
  getUserApp: GetUserApp;
  createUserApp: CreateUserApp;
  updateUserApp: UpdateUserApp;
  removeUserApp: RemoveUserApp;
};
