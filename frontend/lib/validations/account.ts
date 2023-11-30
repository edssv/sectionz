import { z } from 'zod';

import { userDobSchema, userGenderSchema, userProfileNameSchema } from './user';

export const profileFormSchema = z.object({
  profile_name: userProfileNameSchema,
  dob: userDobSchema,
  gender: userGenderSchema
});
