import { EnvConfig } from './env-config.interface';

const DevConfig: EnvConfig = {
    ENV: 'DEV',
    API_LOCALHOST: 'http://localhost:4444/',
    API_FILMS: 'https://api.themoviedb.org/3/',
    API_IMAGES: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2'
};

export = DevConfig;

