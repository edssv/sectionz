import { HttpLink } from '@apollo/client';

import { env } from '@/env.mjs';

const uri = typeof window === 'undefined' ? env.GRAPHQL_SERVER_URL : env.NEXT_PUBLIC_GRAPHQL_SERVER_URL;

export const httpLink = new HttpLink({
  uri,
  credentials: 'include'
});
