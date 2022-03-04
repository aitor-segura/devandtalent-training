export type TrackerFn = (message: string) => void;

export enum TrackerLevel {
  LOG = 'log',
  ERROR = 'error',
  CRITIC = 'critic',
}

export type Tracker = Record<TrackerLevel, TrackerFn>;
