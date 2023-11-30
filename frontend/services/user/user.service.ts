import { getSession } from 'next-auth/react';

import { toast } from '@/components/ui/use-toast';
import { env } from '@/env.mjs';
import { getClientJwt } from '@/lib/client-jwt';

import type { GetMeResponse, GetUserResponse } from './user.interface';

export const UserService = {
  async update(data: any) {
    const jwt = await getClientJwt();
    const session = await getSession();

    return fetch(`${env.NEXT_PUBLIC_STRAPI_API_URL}/users/${session?.user?.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${jwt}`
      },
      body: JSON.stringify(data)
    });
  },
  async getMe(jwt: string) {
    const res = await fetch(`${env.NEXT_PUBLIC_STRAPI_API_URL}/users/me?populate=image`, {
      headers: {
        Authorization: `bearer ${jwt}`
      }
    });

    if (!res.ok) {
      toast({
        title: 'Что-то пошло не так.',
        description: 'Ваш запрос на вход не выполнен. Пожалуйста, попробуйте еще раз.',
        variant: 'destructive'
      });
      return null;
    }

    return res.json() as Promise<GetMeResponse>;
  },
  async getUser(userId: number | string) {
    const res = await fetch(`${env.NEXT_PUBLIC_STRAPI_API_URL}/users/${userId}?populate=image`, {
      headers: {
        Authorization: `bearer ${env.STRAPI_API_TOKEN}`
      }
    });

    return res.json() as Promise<GetUserResponse>;
  }
};
