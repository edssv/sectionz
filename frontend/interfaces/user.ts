import type { Image } from './strapi-image';

export interface User {
  id: number;
  username: string;
  profile_name: string;
  image: Image & { id: number };
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
}
