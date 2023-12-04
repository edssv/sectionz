import type { CodegenConfig } from '@graphql-codegen/cli';
import { loadEnvConfig } from '@next/env';

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.GRAPHQL_SERVER_URL,
  documents: ['gql/schemas/**/*.gql'],
  generates: {
    './gql/types.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        avoidOptionals: true,
        maybeValue: 'T',
        immutableTypes: true,
        withResultType: true,
        scalars: { ID: 'number' }
      }
    }
  }
};

export default config;
