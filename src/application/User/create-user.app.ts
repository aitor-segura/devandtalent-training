import { CreateUserApp } from '.';
import { DependencyCradled } from '@infra/container';
import newUserFromInput from '@interfaces/User/new-user-from-input.adapter';
import { ValidatorSchema, ValidationKey } from '@infra/validator';
import { InputNewUser } from './types';

const CreateUserSchema: ValidatorSchema<InputNewUser> = {
  name: [
    {
      type: ValidationKey.IS_REQUIRED,
    },
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
      type: ValidationKey.IS_REQUIRED,
    },
    {
      type: ValidationKey.IS_EMAIL,
    },
  ],
  country: [
    {
      type: ValidationKey.IS_REQUIRED,
    },
    {
      type: ValidationKey.IS_STRING,
    },
  ],
};

const createUser: DependencyCradled<CreateUserApp> =
  ({ userRepository, validator }) =>
  async (data) => {
    validator(data, CreateUserSchema);
    const newUser = newUserFromInput(data);
    const user = await userRepository.save(newUser);
    return user;
  };

export default createUser;
