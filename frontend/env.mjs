import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    // strapi
    STRAPI_API_TOKEN: z.string().min(1),
    // graphql
    GRAPHQL_SERVER_URL: z.string().min(1),
    // next auth
    NEXTAUTH_URL: z.string().url().optional(),
    NEXTAUTH_SECRET: z.string().min(1),
    // google
    GOOGLE_CLIENT_ID: z.string().min(1),
    GOOGLE_CLIENT_SECRET: z.string().min(1),
    // vk
    VK_CLIENT_ID: z.string().min(1),
    VK_CLIENT_SECRET: z.string().min(1),
    // google recaptcha
    RECAPTCHA_SECRET_KEY: z.string().min(1)
  },
  client: {
    // app
    NEXT_PUBLIC_APP_URL: z.string().min(1),
    // graphql
    NEXT_PUBLIC_GRAPHQL_SERVER_URL: z.string().min(1),
    // strapi
    NEXT_PUBLIC_STRAPI_URL: z.string().min(1),
    NEXT_PUBLIC_STRAPI_API_TOKEN: z.string().min(1),
    // google recaptcha
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: z.string().min(1)
  },
  runtimeEnv: {
    // app
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    // strapi
    NEXT_PUBLIC_STRAPI_URL: process.env.NEXT_PUBLIC_STRAPI_URL,
    STRAPI_API_TOKEN: process.env.STRAPI_API_TOKEN,
    NEXT_PUBLIC_STRAPI_API_TOKEN: process.env.NEXT_PUBLIC_STRAPI_API_TOKEN,
    // next auth
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    // graphql
    GRAPHQL_SERVER_URL: process.env.GRAPHQL_SERVER_URL,
    NEXT_PUBLIC_GRAPHQL_SERVER_URL: process.env.NEXT_PUBLIC_GRAPHQL_SERVER_URL,
    // google
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    // vk
    VK_CLIENT_ID: process.env.VK_CLIENT_ID,
    VK_CLIENT_SECRET: process.env.VK_CLIENT_SECRET,
    // google recaptcha
    RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
  }
});
