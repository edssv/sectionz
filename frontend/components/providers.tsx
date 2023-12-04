'use client';

import { ApolloProvider } from '@apollo/client';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';

import client from '@/apollo/apollo-client';

interface ProviderProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProviderProps) {
  return (
    <ThemeProvider enableSystem attribute='class' defaultTheme='system'>
      <ApolloProvider {...{ client }}>
        <SessionProvider>{children}</SessionProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
}
