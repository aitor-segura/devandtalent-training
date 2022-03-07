export enum ValidationKey {
  IS_REQUIRED = 'isRequired',
  IS_STRING = 'isString',
  IS_NUMBER = 'isNumber',
  IS_EMAIL = 'isEmail',
  MIN_LENGTH = 'minLength',
  MAX_LENGTH = 'maxLength',
}

export type ValidationTypes = {
  [K in ValidationKey]: {
    exec: (...args: any) => boolean;
    error: string;
    mandatory: boolean;
  };
};

export type ValidatorSchemaProperty = {
  type: ValidationKey;
  constraints?: string | number;
  error?: string;
};

export type ValidatorSchema<T> = {
  [K in keyof Partial<T>]: ValidatorSchemaProperty[];
};

export type ValidateAs = <T>(object: T, schema: ValidatorSchema<T>) => {};

export type Validator = <T>(object: T, schmea: ValidatorSchema<T>) => void;
