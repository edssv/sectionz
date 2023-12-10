import type { User } from '@/lib/types/user';

export interface LoginResponse {
  jwt: string;
  user: User;
}
