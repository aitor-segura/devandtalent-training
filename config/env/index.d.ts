export type AppConfig = {
  env: NodeJS.ProcessEnv;
  debug: boolean;
};

export enum AppEnvs {
  Env = 'NODE_ENV',
  Port = 'NODE_ENV_PORT',
}
