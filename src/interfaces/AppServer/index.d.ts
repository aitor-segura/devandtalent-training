import { Express } from 'express';

export type AppServer = Express;

export type AppMiddleware = (req, res, next) => void;
