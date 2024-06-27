import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'main-app',
  remotes: [], //'exceptions'
};

export default config;
