import * as z from 'zod';

import { AuthService } from '@/services/auth/auth.service';

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
      const res = await AuthService.emailAvailable(val.email);

      if (!res.ok) return null;

      const isEmailAvailable = await res.json();

      if (!isEmailAvailable) {
        ctx.addIssue({
          code: 'custom',
          message: ' ',
          path: ['email']
        });
      }
    }
  });

export const userRegisterPasswordSchema = z.object({
  password: z
    .string({ required_error: 'Пароль должен содержать не менее 8 символов.' })
    .min(8, { message: 'Пароль должен содержать не менее 8 символов.' })
    .max(22, { message: 'Ваш пароль слишком длинный.' })
});

export const userRegisterInfoSchema = z.object({
  profile_name: userProfileNameSchema,
  dob: userDobSchema,
  gender: userGenderSchema
});

export const userRegisterConfirmSchema = z.object({
  marketing_emails: z.boolean().default(false).optional()
});

export const userEmailConfirmSchema = z.object({
  email: z.string().email('Недействительный адрес электронной почты.')
});

export const userResetPasswordSchema = z.object({
  code: z.string(),
  passwords: z
    .object({
      password: z
        .string({ required_error: 'Это обязательное поле.' })
        .min(8, { message: 'Пароль должен содержать не менее 8 символов.' }),
      passwordConfirmation: z
        .string({ required_error: 'Это обязательное поле.' })
        .min(8, { message: 'Пароль должен содержать не менее 8 символов.' })
    })
    .superRefine(({ password, passwordConfirmation }, ctx) => {
      if (passwordConfirmation !== password) {
        ctx.addIssue({
          code: 'custom',
          message: 'Пароли не совпадают',
          path: ['passwordConfirmation']
        });
      }
    })
});
