import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import VkProvider from 'next-auth/providers/vk';

import client from '@/apollo/apollo-client';
import { env } from '@/env.mjs';
import type { LoginMutation, LoginMutationVariables } from '@/gql/types';
import { LoginDocument } from '@/gql/types';
import { AuthService } from '@/services/auth/auth.service';
import { UserService } from '@/services/user/user.service';

import { absoluteUrlStrapi } from './utils';

export const authOptions: NextAuthOptions = {
  secret: env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/login'
  },
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET
    }),
    VkProvider({
      clientId: env.VK_CLIENT_ID,
      clientSecret: env.VK_CLIENT_SECRET
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' }
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      authorize: async (credentials) => {
        if (!credentials) {
          return null;
        }

        const { data } = await client.mutate<LoginMutation, LoginMutationVariables>({
          mutation: LoginDocument,
          variables: { input: { identifier: credentials.email, password: credentials.password, provider: 'local' } }
        });

        if (data?.login) {
          return {
            ...data.login.user,
            jwt: data.login.jwt
          };
        }
        return null;
      }
    })
  ],
  callbacks: {
    session({ session, token }) {
      if (token) {
        session.jwt = token.jwt;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }

      return session;
    },
    async jwt({ account, token, user }) {
      if (token?.jwt) {
        const me = await UserService.getMe(token.jwt);

        if (me) {
          token.id = me.id;
          token.name = me.profile_name;
          token.email = me.email;
          token.picture = me?.image ? absoluteUrlStrapi(me.image.url) : null;

          return token;
        }
      }

      if (user?.jwt) {
        token.jwt = user.jwt;
        token.id = Number(user.id);
        token.name = user.name;
        token.picture = user.image;

        return token;
      }

      if (account) {
        const data = await AuthService.callback(account?.provider, account?.access_token);

        if (data) {
          token.jwt = data.jwt;
          token.id = data.user.id;
          token.name = data.user.username;
        }

        return token;
      }

      return null!;
    }
  }
};
