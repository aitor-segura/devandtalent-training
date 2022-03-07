import { UpdateUserApp, InputUpdateUser } from '.';
import { DependencyCradled } from '@infra/container';
import { ValidatorSchema, ValidationKey } from '@infra/validator';

const UpdateUserSchema: ValidatorSchema<InputUpdateUser> = {
  name: [
    {
      type: ValidationKey.IS_STRING,
    },
    {
      type: ValidationKey.MIN_LENGTH,
      constraints: 3,
    },
  ],
  email: [
    {
      type: ValidationKey.IS_EMAIL,
    },
  ],
  country: [
    {
      type: ValidationKey.IS_STRING,
    },
  ],
};

const updateUser: DependencyCradled<UpdateUserApp> =
  ({ userRepository, validator }) =>
  async (id, data) => {
    validator(data, UpdateUserSchema);
    const user = await userRepository.update(id, data);
    return user;
  };

export default updateUser;
