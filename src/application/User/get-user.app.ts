import { GetUserApp } from '.';
import { DependencyCradled } from '@infra/container';

const getUser: DependencyCradled<GetUserApp> =
  ({ userRepository }) =>
  async (id) => {
    const filter = { id };
    const user = await userRepository.findOne(filter);
    return user;
  };

export default getUser;
