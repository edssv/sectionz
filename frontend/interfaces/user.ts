import type { z } from 'zod';

import type { userGenderSchema } from '@/lib/validations/user';

import type { Image } from './strapi-image';

export interface User {
  id: number;
  username: string;
  profile_name: string;
  image: Image & { id: number };
  dob: Date;
  gender: z.infer<typeof userGenderSchema>;
  social_emails: boolean;
  communication_emails: boolean;
  marketing_emails: boolean;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
}
