import { DependencyCradled } from '@infra/container';
import { isEmpty, isString, isInt, isEmail, minLength, maxLength } from 'class-validator';
import {
  Validator,
  ValidateAs,
  ValidationKey,
  ValidatorSchemaProperty,
  ValidationTypes,
} from './types';

const validationTypes: ValidationTypes = {
  [ValidationKey.IS_REQUIRED]: {
    exec: (value) => !isEmpty(value),
    error: 'field ":key:" is required',
    mandatory: true,
  },
  [ValidationKey.IS_STRING]: {
    exec: (value) => isString(value),
    error: 'field ":key:" must be a string',
    mandatory: false,
  },
  [ValidationKey.IS_NUMBER]: {
    exec: (value) => isInt(value),
    error: 'field ":key:" must be an integer',
    mandatory: false,
  },
  [ValidationKey.IS_EMAIL]: {
    exec: (value) => isEmail(value),
    error: 'field ":key:" must be an email',
    mandatory: false,
  },
  [ValidationKey.MIN_LENGTH]: {
    exec: (value: string, min: number) => minLength(value, min),
    error: 'field ":key:" must be at least :constraints: chars in lenght',
    mandatory: false,
  },
  [ValidationKey.MAX_LENGTH]: {
    exec: (value: string, max: number) => maxLength(value, max),
    error: 'field ":key:" must be a maximum of :constraints: chars in lenght',
    mandatory: false,
  },
};

const validateAs: ValidateAs = (object, schema) => {
  const validateProperty = (key: string) => {
    return (errors: string[], property: ValidatorSchemaProperty, _, arr) => {
      const { type, constraints, error } = property;
      const { exec, error: defaultError, mandatory } = validationTypes[type];
      const message = (error || defaultError)
        .replace(':key:', key)
        .replace(':constraints:', `${constraints}`);
      if (!exec || !exec(object[key], constraints)) {
        errors.push(message);
        if (mandatory) {
          arr.splice(1);
        }
      }
      return errors;
    };
  };

  return Object.entries(schema).reduce((errors: {}, entry: [string, ValidatorSchemaProperty[]]) => {
    const [key, properties] = entry;
    const isRequired = Object.keys(properties).includes(ValidationKey.IS_REQUIRED);
    const errorsField = properties.reduce(validateProperty(key), []);
    if (errorsField.length > 0 && isRequired) {
      return {
        ...errors,
        [key]: errorsField,
      };
    }
    return errors;
  }, {});
};

const validator: DependencyCradled<Validator> =
  () =>
  (object, schema): void => {
    const errors = validateAs(object, schema);
    if (Object.keys(errors).length > 0) {
      throw new Error(JSON.stringify({ error: errors }));
    }
  };

export default validator;
