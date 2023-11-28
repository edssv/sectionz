import { getSession } from 'next-auth/react';

export async function getClientJwt() {
  const session = await getSession();

  return session?.jwt;
}
