import type { GetUsersApp } from '.';
import { DependencyCradled } from '@infra/container';

const getUsersApp: DependencyCradled<GetUsersApp> =
  ({ userRepository }) =>
  async () => {
    const users = await userRepository.find();
    return users;
  };

export default getUsersApp;
