import {ModuleFederationConfig} from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'portfolio',
  library: { type: 'var', name: 'portfolio'},
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
