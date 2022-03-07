import { UserAvailability } from './userAvailability.entity';

type User = {
  id: string;
  name: string;
  availability: UserAvailability;
  email: string;
  country: string;
};

export default User;
