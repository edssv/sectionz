import { HttpLink } from '@apollo/client';

import { env } from '@/env.mjs';

const uri = typeof window === 'undefined' ? env.GRAPHQL_SERVER_URL : env.NEXT_PUBLIC_GRAPHQL_SERVER_URL;
const token = typeof window === 'undefined' ? env.STRAPI_API_TOKEN : env.NEXT_PUBLIC_STRAPI_API_TOKEN;

export const httpLink = new HttpLink({
  uri,
  headers: {
    authorization: `bearer ${token}`
  }
});
