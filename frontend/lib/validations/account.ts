import { z } from 'zod';

import { type UpdateUserProfileInput } from '@/gql/types';

import { userDobSchema, userGenderSchema, userProfileNameSchema } from './user';

export const updateUserProfileFormSchema: z.ZodSchema<UpdateUserProfileInput> = z.object({
  profileName: userProfileNameSchema,
  dob: userDobSchema,
  gender: userGenderSchema
});
