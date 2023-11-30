import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:1337/graphql',
  documents: ['components/**/*.tsx', 'app/**/*.tsx'],
  generates: {
    '/gql': {
      preset: 'client',
      plugins: []
    }
  }
};

export default config;
