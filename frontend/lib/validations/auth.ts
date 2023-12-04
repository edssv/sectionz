import * as z from 'zod';

import client from '@/apollo/apollo-client';
import type { EmailAvailableQuery, EmailAvailableQueryVariables } from '@/gql/types';
import { EmailAvailableDocument } from '@/gql/types';

import { userDobSchema, userGenderSchema, userProfileNameSchema } from './user';

export const userLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

export const userRegisterEmailSchema = z
  .object({
    email: z
      .string({ required_error: 'Введите адрес электронной почты' })
      .email('Данный адрес электронной почты недействительный. Убедитесь, что он написан в формате example@email.com.')
  })
  .superRefine(async (val, ctx) => {
    if (val.email.includes('@')) {
      const { data } = await client.query<EmailAvailableQuery, EmailAvailableQueryVariables>({
        query: EmailAvailableDocument,
        variables: { email: val.email }
      });

      if (!data.emailAvailable) {
        ctx.addIssue({
          code: 'custom',
          message: ' ',
          path: ['email']
        });
      }
    }
  });

export const userPasswordSchema = z
  .string({ required_error: 'Пароль должен содержать не менее 8 символов.' })
  .min(8, { message: 'Пароль должен содержать не менее 8 символов.' })
  .max(22, { message: 'Ваш пароль слишком длинный.' });

export const userRegisterPasswordSchema = z.object({
  password: userPasswordSchema
});

export const userRegisterInfoSchema = z.object({
  profileName: userProfileNameSchema,
  dob: userDobSchema,
  gender: userGenderSchema
});

export const userRegisterConfirmSchema = z.object({
  marketingEmails: z.boolean().default(false).optional()
});

export const userEmailConfirmSchema = z.object({
  email: z.string().email('Недействительный адрес электронной почты.')
});

export const userResetPasswordSchema = z
  .object({
    code: z.string(),
    password: userPasswordSchema,
    passwordConfirmation: userPasswordSchema
  })
  .superRefine(({ password, passwordConfirmation }, ctx) => {
    if (passwordConfirmation !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'Пароли не совпадают',
        path: ['passwordConfirmation']
      });
    }
  });
