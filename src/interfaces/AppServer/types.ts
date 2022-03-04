import { Express, Request, Response, NextFunction } from 'express';

export type AppServer = () => Express;

export type AppMiddleware = (req: Request, res: Response, next: NextFunction) => void;
