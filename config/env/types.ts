export type AppConfig = {
  env: NodeJS.ProcessEnv;
  debug: boolean;
};

export enum AppEnvs {
  ENV = 'NODE_ENV',
  PORT = 'NODE_ENV_PORT',
  PERSISTENCE = 'NODE_ENV_PERSISTENCE',
}
