import { setContext } from '@apollo/client/link/context';

import { getClientJwt } from '@/lib/client-session';

export const authLink = setContext(async (req, { headers }) => {
  const token = await getClientJwt();

  if (headers?.authorization) {
    return headers;
  }

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});
