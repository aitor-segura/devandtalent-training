export type LoggerFn = (message: string) => void;

export type Logger = {
  log: LoggerFn;
};
