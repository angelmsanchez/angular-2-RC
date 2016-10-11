import { EnvConfig } from './env-config.interface';

const DevConfig: EnvConfig = {
  ENV: 'DEV',
  API_LOCALHOST: 'http://localhost:4444/',
  API_FILMS: 'http://localhost:5555/'
};

export = DevConfig;

