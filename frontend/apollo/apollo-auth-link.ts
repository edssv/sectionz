import { setContext } from '@apollo/client/link/context';

import { getClientJwt } from '@/lib/client-jwt';

export const authLink = setContext(async (req, { headers }) => {
  const token = await getClientJwt();

  if (req.query.definitions[0].operation === 'query') {
    return headers;
  }

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});
