import type { User } from '@/lib/interfaces/user';

export interface LoginResponse {
  jwt: string;
  user: User;
}
