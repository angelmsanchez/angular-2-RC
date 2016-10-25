// Feel free to extend this interface
// depending on your app specific config.
export interface EnvConfig {
    ENV?: string;
    API_LOCALHOST?: string;
    API_FILMS?: string;
    API_IMAGES?: string;
}

export const Config: EnvConfig = JSON.parse('<%= ENV_CONFIG %>');

