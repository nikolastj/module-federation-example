import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'index-build',
  exposes: {
    './Routes': 'apps/index-build/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
