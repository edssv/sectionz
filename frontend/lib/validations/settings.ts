import { z } from 'zod';

import { userPasswordSchema } from './auth';

const languageSchema = z.string({
  required_error: 'Пожалуйста, выберите язык.'
});

const themeSchema = z.enum(['light', 'dark'], {
  required_error: 'Пожалуйста, выберите тему.'
});

export const displayFormSchema = z.object({
  language: languageSchema,
  theme: themeSchema
});

export const updateUserNotificationsFormSchema = z.object({
  communicationEmails: z.boolean().default(false).optional(),
  socialEmails: z.boolean().default(false).optional(),
  marketingEmails: z.boolean().default(false).optional(),
  securityEmails: z.boolean()
});

export const changePasswordFormSchema = z
  .object({
    currentPassword: z.string({ required_error: 'Введите текущий пароль.' }),
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
