import { onError } from '@apollo/client/link/error';

import { toast } from '@/components/ui/use-toast';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ locations, message, path }) => {
      toast({ description: message });
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
    });
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

export default errorLink;
