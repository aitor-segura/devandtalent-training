import User from '@domain/User/user.entity';
import UserAvailability from '@domain/User/userAvailability.entity';
import userAvailabilityFromString from './helpers/user-availability-from-string';
import data from './users.json';

const users: User[] = data.map((item) => ({
  ...item,
  availability: item?.availability
    ? userAvailabilityFromString(item?.availability)
    : UserAvailability.UNKNOWN,
}));

export default users;
