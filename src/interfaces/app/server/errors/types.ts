import { HttpError } from '@interfaces/app/server/middlewares/types';

export type HttpErrorFn = (error: any) => HttpError;
