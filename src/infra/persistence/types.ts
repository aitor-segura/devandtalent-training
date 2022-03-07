export type EntityRepository<T, FindOneProps = { id: string }, SaveProps = any> = {
  find: () => Promise<T[]>;
  findOne: (filter: FindOneProps) => Promise<T | null>;
  save: (data: SaveProps) => Promise<T>;
  update: (id: string, data: T | Partial<T>) => Promise<T>;
  remove: (id: string) => void;
};
