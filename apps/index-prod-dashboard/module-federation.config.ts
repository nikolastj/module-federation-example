import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'index-prod-dashboard',
  exposes: {
    './Routes':
      'apps/index-prod-dashboard/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
