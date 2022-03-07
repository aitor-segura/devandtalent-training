const cleanEntity = <T>(obj: T | Partial<T>): Partial<T> =>
  Object.fromEntries(Object.entries(obj).filter(([, value]) => value)) as Partial<T>;

export default cleanEntity;
