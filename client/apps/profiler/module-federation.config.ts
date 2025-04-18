import {ModuleFederationConfig} from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'profiler',
  library: { type: 'var', name: 'profiler'},
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
