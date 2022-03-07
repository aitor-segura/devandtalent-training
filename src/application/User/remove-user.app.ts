import { RemoveUserApp } from '.';
import { DependencyCradled } from '@infra/container';

const removeUserApp: DependencyCradled<RemoveUserApp> =
  ({ userRepository }) =>
  async (id) => {
    await userRepository.remove(id);
  };

export default removeUserApp;
