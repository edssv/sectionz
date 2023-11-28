import type { User as DefaultUser } from 'next-auth';

type UserId = number;
type JwtFromStrapi = string;

declare module 'next-auth/jwt' {
  interface JWT {
    id: UserId;
    jwt: JwtFromStrapi;
  }
}

declare module 'next-auth' {
  interface Session {
    user: DefaultUser & {
      id: UserId;
    };
    jwt: JwtFromStrapi;
  }

  interface User extends DefaultUser {
    jwt: JwtFromStrapi;
  }
}
