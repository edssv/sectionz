import { HttpLink } from '@apollo/client';

import { env } from '@/env.mjs';

export const httpLink = new HttpLink({
  uri: typeof window === 'undefined' ? env.GRAPHQL_SERVER_URL : env.NEXT_PUBLIC_GRAPHQL_SERVER_URL,
  headers: {
    authorization: `bearer ${typeof window === 'undefined' ? env.STRAPI_API_TOKEN : env.NEXT_PUBLIC_STRAPI_API_TOKEN}`
  }
});
