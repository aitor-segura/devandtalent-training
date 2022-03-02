import type { AppConfig } from './index.d';
import 'dotenv/config';

const config: AppConfig = {
  env: process.env,
  debug: process.env.NODE_ENV !== 'production',
};

export default config;
