import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'exceptions',
  exposes: {
    './Routes': 'apps/exceptions/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
