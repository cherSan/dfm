import {ModuleFederationConfig} from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'dashboard',
  library: { type: 'var', name: 'dashboard'},
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
