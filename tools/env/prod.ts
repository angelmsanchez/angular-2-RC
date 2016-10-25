import { EnvConfig } from './env-config.interface';

const ProdConfig: EnvConfig = {
    ENV: 'PROD',
    API_LOCALHOST: 'http://producción/',
    API_FILMS: 'http://prodcuccion/',
    API_IMAGES: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2'
};

export = ProdConfig;

