import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';

import { authLink } from './apollo-auth-link';
import errorLink from './apollo-error-link';
import { httpLink } from './apollo-http-link';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([errorLink, authLink.concat(httpLink)]),
  ssrMode: typeof window === 'undefined',
  connectToDevTools: true
});

export default client;
