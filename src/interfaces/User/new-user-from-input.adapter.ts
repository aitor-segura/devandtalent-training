import { NewUserFromInput } from './types';
import UserAvailability from '@domain/User/userAvailability.entity';

const newUserFromInput: NewUserFromInput = (data) => {
  const { name, email, country } = data;
  const availability: UserAvailability =
    UserAvailability?.[data?.availability?.toUpperCase()] || UserAvailability.AVAILABLE;

  return {
    name,
    email,
    availability,
    country,
  };
};

export default newUserFromInput;
