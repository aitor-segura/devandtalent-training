import { HttpStatus } from '@interfaces/app/server';
import httpError from './http-error';
import { HttpErrorFn } from './types';

const badRequestHttpError: HttpErrorFn = (error: string) => {
  return httpError(error, HttpStatus.BAD_REQUEST);
};

export default badRequestHttpError;
