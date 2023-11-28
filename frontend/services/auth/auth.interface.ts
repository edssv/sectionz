import type { User } from '@/interfaces/user';

export interface LoginResponse {
  jwt: string;
  user: User;
}
