import type { z } from 'zod';

import { toast } from '@/components/ui/use-toast';
import { env } from '@/env.mjs';
import type { UserRegisterForms } from '@/hooks/useRegister';
import type { userLoginSchema, userResetPasswordSchema } from '@/lib/validations/auth';

import type { LoginResponse } from './auth.interface';

type UserLoginForm = z.infer<typeof userLoginSchema>;
type UserResetPasswordForm = z.infer<typeof userResetPasswordSchema>;

export const AuthService = {
  async callback(provider: string | undefined, accessToken: string | undefined) {
    const response = await fetch(
      `${env.NEXT_PUBLIC_STRAPI_API_URL}/auth/${provider}/callback?access_token=${accessToken}`
    );
    return response.json();
  },
  async register(credentials: UserRegisterForms) {
    return fetch(`${env.NEXT_PUBLIC_STRAPI_API_URL}/auth/local/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: credentials?.email,
        username: `${credentials?.email.split('@')[0]}_${Math.floor(Math.random() * 1000)}`,
        password: credentials?.password,
        profile_name: credentials.profile_name,
        dob: credentials?.dob,
        gender: credentials?.gender,
        social_emails: credentials?.social_emails
      })
    });
  },
  async login(credentials: UserLoginForm) {
    const res = await fetch(`${env.NEXT_PUBLIC_STRAPI_API_URL}/auth/local?populate=image`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        identifier: credentials?.email,
        password: credentials?.password
      })
    });

    if (!res.ok) {
      return null;
    }

    return res.json() as Promise<LoginResponse>;
  },
  async emailAvailable(email: string | undefined) {
    return fetch(`${env.NEXT_PUBLIC_STRAPI_API_URL}/auth/emailAvailable?email=${email}`, {
      headers: {
        Authorization: `bearer ${env.NEXT_PUBLIC_STRAPI_API_TOKEN}`
      }
    });
  },
  async forgotPassword(email: string) {
    return fetch(`${env.NEXT_PUBLIC_STRAPI_API_URL}/auth/forgot-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email
      })
    });
  },
  async resetPassword(form: UserResetPasswordForm) {
    const res = await fetch(`${env.NEXT_PUBLIC_STRAPI_API_URL}/auth/reset-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        code: form.code,
        password: form.passwords.password,
        passwordConfirmation: form.passwords.passwordConfirmation
      })
    });

    if (!res.ok) {
      toast({
        title: 'Что-то пошло не так.',
        description: 'Ваш запрос на вход не выполнен. Пожалуйста, попробуйте еще раз.',
        variant: 'destructive'
      });

      return null;
    }

    return res.json();
  }
};
