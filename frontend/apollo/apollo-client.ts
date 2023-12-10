import type { DefaultOptions } from '@apollo/client';
import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';

import { authLink } from './apollo-auth-link';
import errorLink from './apollo-error-link';
import { httpLink } from './apollo-http-link';

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore'
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all'
  }
};

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([errorLink, authLink.concat(httpLink)]),
  ssrMode: typeof window === 'undefined',
  defaultOptions
});

export default client;
