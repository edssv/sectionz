import * as z from 'zod';

import { Enum_Userspermissionsuser_Gender } from '@/gql/types';

export const userProfileNameSchema = z
  .string({ required_error: 'Введите имя для своего профиля.' })
  .min(3, { message: 'Имя должно содержать не менее 3 символов.' })
  .max(22, { message: 'Имя профиля слишком длинное.' });

export const userImageSchema = z.object({
  image: z.string().min(3).max(64)
});

export const userDobSchema = z.date({ required_error: 'Пожалуйста выберите дату вашего рождения.' });

export const userGenderSchema = z.nativeEnum(Enum_Userspermissionsuser_Gender, {
  required_error: 'Выберите свой пол.'
});
