import { z } from 'zod';

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

export const notificationsFormSchema = z.object({
  communication_emails: z.boolean().default(false).optional(),
  social_emails: z.boolean().default(false).optional(),
  marketing_emails: z.boolean().default(false).optional(),
  security_emails: z.boolean()
});
