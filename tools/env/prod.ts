import { EnvConfig } from './env-config.interface';

const ProdConfig: EnvConfig = {
  ENV: 'PROD',
  API_LOCALHOST: 'http://producción/',
  API_FILMS: 'http://prodcuccion/'
};

export = ProdConfig;

