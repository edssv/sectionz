import { env } from '@/env.mjs';

export const AuthService = {
  async callback(provider: string | undefined, accessToken: string | undefined) {
    const response = await fetch(
      `${env.NEXT_PUBLIC_STRAPI_URL}/api/auth/${provider}/callback?access_token=${accessToken}`
    );
    return response.json();
  }
};
