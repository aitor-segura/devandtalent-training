import { HttpStatus } from '@interfaces/app/server';
import httpError from './http-error';
import { HttpErrorFn } from './types';

const notFoundHttpError: HttpErrorFn = (error: string) => {
  return httpError(error, HttpStatus.NOT_FOUND);
};

export default notFoundHttpError;
