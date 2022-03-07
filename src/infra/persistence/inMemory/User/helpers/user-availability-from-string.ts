import UserAvailability from '@domain/User/userAvailability.entity';

const userAvailabilityFromString = (availability: string): UserAvailability => {
  const [key] = Object.entries(UserAvailability).find(([, value]) => value === availability) || [];
  if (!key) {
    return UserAvailability.UNKNOWN;
  }
  return UserAvailability[key];
};

export default userAvailabilityFromString;
