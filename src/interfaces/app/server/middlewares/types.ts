import { NextFunction } from 'express';
import { AppRequest, AppResponse, HttpStatus } from '../types';

export type HttpError = {
  type: string;
  message: string;
  status: HttpStatus;
};

export type ErrorHttpHandler = (
  err: HttpError,
  req: AppRequest,
  res: AppResponse,
  next: NextFunction,
) => void;
