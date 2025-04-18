import {ModuleFederationConfig} from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'authorization',
  library: { type: 'var', name: 'authorization'},
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

/**
* Nx requires a default export of the config to allow correct resolution of the module federation graph.
**/
export default config;
