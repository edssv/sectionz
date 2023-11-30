import { getServerSession } from 'next-auth/next';

import { authOptions } from '@/lib/auth';

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);

  return session?.user;
}

export async function getApiUserToken() {
  const session = await getServerSession(authOptions);

  return session?.jwt;
}
