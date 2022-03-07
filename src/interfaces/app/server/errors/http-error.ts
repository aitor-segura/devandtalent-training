import { HttpStatus } from '@interfaces/app/server';
import { HttpError } from '@interfaces/app/server/middlewares/types';

// todo: err type string | JSON | Error
const httpError = (err: string, status: HttpStatus): HttpError => {
  return {
    type: 'a',
    message: err,
    status: status,
  };
};

export default httpError;
